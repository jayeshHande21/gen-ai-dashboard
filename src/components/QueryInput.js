import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitQuery } from "../redux/querySlice";
import "./QueryInput.css"; 

const commonQueries = [
  "What were the total sales last month?",
  "Show me the top 5 best-selling products.",
  "What is the customer retention rate?",
  "How many new users joined this week?",
  "What is the revenue growth trend for this quarter?",
];

const QueryInput = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();


  const handleChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);

    if (inputValue.length > 0) {
      const filtered = commonQueries.filter((q) =>
        q.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(submitQuery(query));
      setQuery(""); 
      setSuggestions([]); 
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="query-input-container">
      <h2 className="query-input-heading">AI-Powered Query Dashboard</h2>
      <form onSubmit={handleSubmit} className="query-input-form">
        <input
          type="text"
          placeholder="Ask a business question..."
          value={query}
          onChange={handleChange}
          className="query-input-field"
        />
        
      
        {suggestions.length > 0 && (
          <ul className="query-suggestions">
            {suggestions.map((sug, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(sug)}
                className="query-suggestion-item"
              >
                {sug}
              </li>
            ))}
          </ul>
        )}

        <button type="submit" className="query-submit-button">
          Submit Query
        </button>
      </form>
    </div>
  );
};

export default QueryInput;
