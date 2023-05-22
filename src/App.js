import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// ROUTES
import Home from "./components/Home";
import Browse from "./components/Browse";
import WriteReviewSection from "./components/WriteReviewSection";
import ReviewPage from "./components/ReviewPage";

import NotFound from "./components/NotFound";


function App() {
  return (
    <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/browse"
              element={
                <Browse/>
              }
            />
            <Route
              path="/browse"
              element={
                <Browse/>
              }
            />
            <Route
              path="/write-a-review"
              element={
                <WriteReviewSection/>
              }
            />
            <Route
              path="/the-shawshank-redemption"
              element={
                <ReviewPage name="The Shawshank Redemption"/>
              }
            />
            <Route
              path="/moana"
              element={
                <ReviewPage name="Moana"/>
              }
            />
            <Route
              path="/tom-Jones"
              element={
                <ReviewPage name="Tom Jones"/>
              }
            />
            Tom Jones
           
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </Fragment>
  );
}

export default App;
