import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./Redux/greetingSlices";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Greeting from "./components/Greeting";

const  App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData())
  });


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
