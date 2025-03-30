import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuery } from "../redux/querySlice";
import "./QueryHistory.css";

const QueryHistory = () => {
  const history = useSelector((state) => state.query.history);
  const dispatch = useDispatch();

  return (
    <div className="query-history-container">
      <h2 className="query-history-heading">Query History</h2>
      <ul className="query-history-list">
        {history.length === 0 ? (
          <li className="query-history-empty">No previous queries</li>
        ) : (
          history.map((query, index) => (
            <li
              key={index}
              onClick={() => dispatch(setQuery(query))}
              className="query-history-item"
            >
              {query}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default QueryHistory;
