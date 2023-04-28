import React from "react";
import { Route, Routes } from "react-router-dom";

import { noAuthRoute, authenticatedRoute } from "./routes";
import Layout from "./components/layouts";
import UnmatchPage from "./pages/UnmatchPage";

function App() {
  const token = localStorage.getItem("token");

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
      <Route path="*" element={<UnmatchPage />} />
    </Routes>
  );
}

export default App;
