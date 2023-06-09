import { lazy } from "react";
import { retry } from "../utils/index";

export const noAuthRoute = [
  {
    path: "/",
    component: lazy(() =>
      retry(() =>
        import(/* webpackChunkName: "Landing Page" */ "../pages/landing")
      )
    ),
  }
];

export const authenticatedRoute = [
  {
    path: "/overview",
    component: lazy(() =>
      retry(() =>
        import(/* webpackChunkName: "Overview" */ "../pages/overview")
      )
    ),
  },
  {
    path: "/payments",
    component: lazy(() =>
      retry(() =>
        import(/* webpackChunkName: "Payments" */ "../pages/payments")
      )
    ),
  },
];
