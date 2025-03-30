import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  result: null,
  loading: false,
  error: null,
  history: [],
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
      state.history.unshift(action.payload); 
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    addToHistory: (state, action) => {
      state.history.unshift(action.payload);
    },
  },
});


export const submitQuery = (query) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    
    setTimeout(() => {
      const mockResult = `Result for: ${query}`;
      dispatch(setResult(mockResult));
      dispatch(addToHistory(query));
      dispatch(setLoading(false));
    }, 1500);
  } catch (error) {
    dispatch(setError("Failed to process query"));
    dispatch(setLoading(false));
  }
};

export const { setQuery, setLoading, setResult, setError, addToHistory } = querySlice.actions;
export default querySlice.reducer;
