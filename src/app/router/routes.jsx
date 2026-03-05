import React from "react";

const LoginPage = React.lazy(() =>
    import("../../features/auth/pages/LoginPage")
);

const SignupPage = React.lazy(() =>
    import("../../features/auth/pages/SignupPage")
);

const DashboardPage = React.lazy(() => 
    import("../../features/analytics/pages/DashboardPage")
)

const WebsitesPage = React.lazy(() =>
     import("../../features/websites/pages/WebsitesPage")
)

export const routes = [
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/signup",
        element: <SignupPage/>
    },
    {
        path: "/dashboard",
        element: <DashboardPage/>
    },
    {
        path: "/websites",
        element: <WebsitesPage/>
    }
];

