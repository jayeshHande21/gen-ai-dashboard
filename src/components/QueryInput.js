import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery, addToHistory, setLoading, setResult, setError } from "../redux/querySlice";

const aiSuggestions = [
  "What was the revenue last quarter?",
  "Show me the top 5 selling products.",
  "How many users signed up this month?",
  "What is the average order value?",
];

const QueryInput = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query.query);
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const input = e.target.value;
    dispatch(setQuery(input));

    // Show AI suggestions based on input
    if (input.length > 0) {
      const filteredSuggestions = aiSuggestions.filter((s) =>
        s.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    dispatch(setLoading());
    dispatch(addToHistory(query));

    // Simulating AI processing delay
    setTimeout(() => {
      if (query.toLowerCase().includes("error")) {
        dispatch(setError("Unable to process query."));
      } else {
        dispatch(setResult(`Generated insights for: ${query}`));
      }
    }, 1500);
  };

  return (
    <div className="p-4 w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Ask a business question..."
          className="p-3 border rounded-lg w-full"
        />
        {suggestions.length > 0 && (
          <ul className="bg-white border rounded-lg shadow-md">
            {suggestions.map((s, index) => (
              <li
                key={index}
                onClick={() => dispatch(setQuery(s))}
                className="p-2 cursor-pointer hover:bg-gray-100"
              >
                {s}
              </li>
            ))}
          </ul>
        )}
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default QueryInput;
