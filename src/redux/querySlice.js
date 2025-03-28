import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  history: [],
  result: null,
  loading: false,
  error: null,
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    addToHistory: (state, action) => {
      state.history.unshift(action.payload);
    },
    setResult: (state, action) => {
      state.result = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setQuery, addToHistory, setResult, setLoading, setError } =
  querySlice.actions;

export default querySlice.reducer;
