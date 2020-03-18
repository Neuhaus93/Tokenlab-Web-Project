import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import EventList from "./pages/EventList";
import EventCreate from "./pages/EventCreate";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path="/auth/signin" exact component={SignInPage} />
          <Route path="/auth/signup" exact component={SignUpPage} />
          <Route path="/events/list" exact component={EventList} />
          <Route path="/events/new" exact component={EventCreate} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
