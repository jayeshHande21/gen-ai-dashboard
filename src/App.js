import React from "react";
import QueryInput from "./components/QueryInput";
import QueryResults from "./components/QueryResults";
import QueryHistory from "./components/QueryHistory";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <QueryInput />
      <QueryResults />
      <QueryHistory />
    </div>
  );
};

export default App;
