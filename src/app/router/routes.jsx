import React from "react";
import DashboardLayout from "../../shared/layouts/DashboardLayout";
import ProtectedRoute from "../../shared/components/ProtectedRoute";

const LoginPage = React.lazy(() =>
  import("../../features/auth/pages/LoginPage")
);

const SignupPage = React.lazy(() =>
  import("../../features/auth/pages/SignupPage")
);

const DashboardPage = React.lazy(() =>
  import("../../features/analytics/pages/DashboardPage")
);

const WebsitesPage = React.lazy(() =>
  import("../../features/websites/pages/WebsitesPage")
);

const WebsiteSettingsPage = React.lazy(() =>
  import("../../features/websites/pages/WebsiteSettingsPage")
);

export const routes = [
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/signup",
    element: <SignupPage />
  },
  {
    path: "/",
    element: (
     <ProtectedRoute>
         <DashboardLayout />
    </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <DashboardPage />
      },
      {
        path: "websites",
        element: <WebsitesPage />
      },
      {
        path: "websites/:id/settings",
        element: <WebsiteSettingsPage />
      }
    ]
  }
];