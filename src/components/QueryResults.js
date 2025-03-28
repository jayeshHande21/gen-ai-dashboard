import React from "react";
import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const QueryResults = () => {
  const { result, loading, error } = useSelector((state) => state.query);

  // Sample mock data for visualization
  const data = result
    ? [
        { name: "Category A", value: Math.floor(Math.random() * 100) },
        { name: "Category B", value: Math.floor(Math.random() * 100) },
        { name: "Category C", value: Math.floor(Math.random() * 100) },
      ]
    : [];

  return (
    <div className="p-4 w-full max-w-lg mx-auto text-center bg-white shadow-md rounded-lg">
      {loading && <p className="text-blue-500">Processing your query...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {result && (
        <>
          <p className="text-green-600 font-semibold">{result}</p>
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
