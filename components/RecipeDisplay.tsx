import React, { Fragment, useEffect, useState } from "react";
import { connect, ConnectedProps, useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import { initialState } from "../store/reducers/appReducer";
import { View, FlatList, StyleSheet } from "react-native";
import Modal from "./Modal";
import { Button, Provider as PaperProvider } from "react-native-paper";
import { Icon } from "react-native-elements";

const mapState = (state: typeof initialState) => ({
  text: state.text,
  ascending: state.ascending,
  sortBy: state.sortBy,
  filterChoice: state.filterChoice,
});

const mapDispatch = {
  sendQuery: () => ({ type: "SEND_QUERY" }),
  ascName: () => ({ type: "ASC_NAME" }),
  descName: () => ({ type: "DESC_NAME" }),
  ascServings: () => ({ type: "ASC_SERVINGs" }),
  descServings: () => ({ type: "DESC_SERVINGS" }),
  updateFilter: () => ({ type: "UPDATE_TYPE" }),
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

const RecipeDisplay = (props: PropsFromRedux) => {
  // eslint-disable-next-line
  const [error, setError] = useState(false);
  const [recipes, setRecipes] = useState<any[]>([]);
  const [page, setPage] = React.useState(1);

  //Handles change in pagenumber
  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrev = () => {
    if (page === 1) {
      //Button.type = disabled
    } else {
      setPage(page - 1);
    }
  };

  // Functionality for searching among the recipe titles
  const searchText = useSelector((state: RootState) => state.recipes.text);

  // Functionality for filtering among the recipes tags
  const filters = useSelector((state: RootState) => state.recipes.filterChoice);

  // Functionality for sorting the recipes by alphabet and no. of servings
  const sortInfo = useSelector((state: RootState) => state.recipes.sortBy);
  const ascending = useSelector((state: RootState) => state.recipes.ascending);

  function sortOrderToString(sortOrder: boolean) {
    let order = "";
    if (sortOrder) {
      order = "asc";
    } else {
      order = "desc";
    }
    return order;
  }

  useEffect(() => {
    async function fetchData() {
      let sortOrder = sortOrderToString(ascending);
      const response = await fetch(
        `http://it2810-36.idi.ntnu.no:3000/recipe?page=${page}&name=${searchText}&tags=${filters}&sortBy=${sortInfo}&sortOrder=${sortOrder}`
      );
      const data = await response.json().catch((error) => setError(error));
      setRecipes(data);
    }
    fetchData();
  }, [page, searchText, filters, sortInfo, ascending]);

  return (
    <>
      <View>
        <FlatList
          data={recipes}
          renderItem={({ item }) => (
            <Modal
              key={item.id}
              _id={item.id}
              name={item.name}
              ingredients={item.ingredients}
              servings={item.servings}
              instructions={item.instructions}
              preptime={item.preptime}
              rating={item.rating}
              tags={item.tags}
            />
          )}
        />
        <View style={styles.wrapper}>
          <Button
            onPress={() => handlePrev()}
            style={styles.prevNext}
            compact
            color="#006a4e"
          >
            <Icon
              name="navigate-next"
              color="#006a4e"
              size={40}
              style={{ transform: [{ rotateY: "180deg" }] }}
            />
          </Button>
          <Button
            onPress={() => handleNext()}
            style={styles.prevNext}
            compact
            color="#006a4e"
          >
            <Icon name="navigate-next" color="#006a4e" size={40} />
          </Button>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  prevNext: {
    marginTop: 20,
  },
});

export default connector(RecipeDisplay);
