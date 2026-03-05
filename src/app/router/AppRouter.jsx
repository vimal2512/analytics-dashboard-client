import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import { routes } from "./routes";

function renderRoutes(routes) {
    return routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element}>
              {route.children && renderRoutes(route.children)}
            </Route>
          ))
}


function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
         <Routes>{renderRoutes(routes)}</Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRouter;