import React from "react";
import { Route, Routes } from "react-router-dom";

import { noAuthRoute, authenticatedRoute } from "./routes";
import Overview from "./pages/overview";
import Layout from "./components/layouts";

function App() {
  // const token = localStorage.getItem("token");
  const token = "ada";

  return (
    <Routes>
      {token === null ? (
        noAuthRoute.map((item, i) => (
          <Route key={i} element={<item.component />} path={item.path} />
        ))
      ) : (
        <Route path="/" element={<Layout />}>
          {authenticatedRoute.map((item, key) => (
            <Route
              key={key}
              element={
                <item.component
                  {...{
                    token,
                    pathUrl: item.path,
                  }}
                />
              }
              state={item.name}
              path={item.path}
            />
          ))}
        </Route>
      )}
    </Routes>
  );
}

export default App;
