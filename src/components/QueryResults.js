import React from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./QueryResults.css"; 

const QueryResults = () => {
  const { result, loading, error } = useSelector((state) => state.query);

  const data = result
    ? [
        { name: "Category A", value: Math.floor(Math.random() * 100) },
        { name: "Category B", value: Math.floor(Math.random() * 100) },
        { name: "Category C", value: Math.floor(Math.random() * 100) },
      ]
    : [];

  return (
    <div className="query-results-container">
      <h2 className="query-results-heading">Query Results</h2>
      {loading && <p className="query-results-loading">Processing your query...</p>}
      {error && <p className="query-results-error">{error}</p>}
      {result && (
        <>
          <p className="query-results-message">{result}</p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
};

export default QueryResults;
