import {
    FrontendActionTypes,
    SEND_QUERY,
    UPDATE_TYPE,
    ASC_NAME,
    DESC_NAME,
    DESC_SERVINGS,
    ASC_SERVINGS,
  } from "../types/types";
  
  export function sendQuery(searchQuery: string): FrontendActionTypes {
    return {
      type: SEND_QUERY,
      payload: searchQuery,
    };
  }
  
  export function updateFilter(filterType: string):FrontendActionTypes{
    console.log(filterType)
    return{
        type: UPDATE_TYPE,
        payload: filterType
    }
  }
  
  export function sortAscName(sortingKey: string): FrontendActionTypes {
    return {
      type: ASC_NAME,
      payload: sortingKey,
    };
  }
  
  export function sortDescName(sortingKey: string): FrontendActionTypes {
    return {
      type: DESC_NAME,
      payload: sortingKey,
    };
  }
  
  export function sortDescServings(sortingKey: string): FrontendActionTypes {
    return {
      type: DESC_SERVINGS,
      payload: sortingKey,
    };
  }
  
  export function sortAscServings(sortingKey: string): FrontendActionTypes {
    return {
      type: ASC_SERVINGS,
      payload: sortingKey,
    };
  }
  
  
  