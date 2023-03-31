import React from "react";
import NavigationSidebar from "../navigation-sidebar";
import WhoToFollowList from "../who-to-follow-list";
import whoReducer from "../reducers/who-reducer";
import tuitsReducer from "../tuits/tuits-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import TuitsList from "../tuits/tuit-list";
import WhatsHappening from "./whats-happening";
const store = configureStore({
  reducer: { who: whoReducer, tuitsData: tuitsReducer },
});

function HomeComponent() {
  return (
    <Provider store={store}>
      <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar active="home" />
        </div>
        <div
          className="col-10 col-md-10 col-lg-7 col-xl-6"
          style={{ position: "relative" }}
        >
          <h4>Home</h4>
          <WhatsHappening />
          <TuitsList />
        </div>
        <div className="d-none d-md-none d-lg-block col-lg-4 col-xl-4">
          <WhoToFollowList />
        </div>
      </div>
    </Provider>
  );
}

export default HomeComponent;
