import React from "react";
import Header from "./components/Header";
import QueryInput from "./components/QueryInput";
import QueryResults from "./components/QueryResults";
import QueryHistory from "./components/QueryHistory";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <QueryInput />
        <QueryResults />
        <QueryHistory />
      </div>
    </div>
  );
};

export default App;
