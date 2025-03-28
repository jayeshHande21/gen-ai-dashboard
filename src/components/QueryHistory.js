import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuery } from "../redux/querySlice";

const QueryHistory = () => {
  const history = useSelector((state) => state.query.history);
  const dispatch = useDispatch();

  return (
    <div className="p-4 w-full max-w-lg mx-auto">
      <h2 className="text-lg font-semibold mb-2">Query History</h2>
      <ul className="bg-white border rounded-lg shadow-md max-h-40 overflow-y-auto">
        {history.length === 0 ? (
          <li className="p-2 text-gray-500">No previous queries</li>
        ) : (
          history.map((query, index) => (
            <li
              key={index}
              onClick={() => dispatch(setQuery(query))}
              className="p-2 cursor-pointer hover:bg-gray-100 border-b"
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
