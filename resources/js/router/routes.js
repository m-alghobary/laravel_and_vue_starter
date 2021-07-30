export default [
    {
        path: "/",
        name: "home",
        component: () => import("../pages/Home.vue")
    },
    {
        path: "/users",
        name: "users",
        component: () => import("../pages/Users.vue")
    }
];
