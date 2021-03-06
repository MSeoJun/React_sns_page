import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./components/Main";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Main} />
      <Route path="/Detail/:id" component={Detail} />
    </BrowserRouter>
  );
}

export default App;
