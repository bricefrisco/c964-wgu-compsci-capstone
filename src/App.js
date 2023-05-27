import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import pages from "./pages";
import TableOfContents from "./components/TableOfContents";

const App = () => {
  const [mobileMenuShown, setMobileMenuShown] = useState(false);

  return (
    <HashRouter>
      <Header setMobileMenuShown={setMobileMenuShown} />
      <div className="container mx-auto max-w-[1900px] flex lg:place-content-between px-3">
        <Navigation
          mobileMenuShown={mobileMenuShown}
          setMobileMenuShown={setMobileMenuShown}
        />
        <Routes>
          {pages.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={React.createElement(page.component)}
            />
          ))}
        </Routes>
        <TableOfContents />
      </div>
    </HashRouter>
  );
};

export default App;
