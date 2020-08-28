import React, { createContext, useReducer, useContext } from "react";

const BookContext = createContext();
const { Provider } = BookContext;

// const initialState = {
//   savedBooks = [],
//   queryBooks = [],
//   isLoading = false
// }

const reducer = (state, action) => {
  switch (action.type) {
    case "getSavedBooks":
      return {
        ...state,
        savedBooks = action.payload
      }
    case "addSavedBook":
      const newSavedBookArr = [...state.savedBooks, action.payload];
      return {
        ...state,
        savedBooks: newSavedBookArr,
      };

    case "removeSavedBook":
      const newSavedBookArr = state.savedBooks.filter(
        (book) => book.id === action.payload
      );
      return {
        ...state,
        savedBooks: newSavedBookArr,
      };
    case "updateQueryList":
      return {
        ...state,
        queryBooks: action.payload
      }
    default:
      return "Sorry, no action type matches your request."
  }
};

const BookProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return <Provider value={[state, dispatch]} {...props} />;
};

const useBookContext = () => {
  return useContext(BookContext);
};

export { BookProvider, useBookContext };
