import { createSlice } from "@reduxjs/toolkit";

export const filmSlice = createSlice({
  name: "film",
  initialState: {
    details: {},
    query: "",
    search: [],
    loans: []
  },
  reducers: {
    addFilm: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    addSearch: (state, action) => {
      return {
        ...state,
        search: action.payload,
      };
    },
    addCriteria: (state, action) => {
      return {
        ...state,
        query: action.payload,
      };
    },
    addLoans: (state, action) => {
      return {
        ...state,
        loans: action.payload
      }
    }
  },
});

export const { addFilm, addSearch, addCriteria } = filmSlice.actions;

export const filmData = (state) => state.film;
export default filmSlice.reducer;
