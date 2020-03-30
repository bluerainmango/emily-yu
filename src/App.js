import React from "react";
import "./App.css";

// import $ from "jquery";
import { Waypoint } from "react-waypoint";

import Header from "./components/header/header.component";
import { About } from "./components/about/about.component";
import { TopNav } from "./components/top-nav/top-nav.component";
import { SideNav } from "./components/side-nav/side-nav.component";

function App() {
  return (
    <div className="App">
      <Waypoint />
      <TopNav />
      <Header />
      {/* <SideNav /> */}
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
