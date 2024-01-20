export default [
  {
    path: "/nationality",
    name: "nationality",
    component: () => import("@/views/pages/PublicCodes/nationalities/List.vue"),
    meta: {
      headerClass: "header",
      sidebarClass: "",
    },
  },
  {
    path: "/addNationality",
    // same name with addBuilding route
    name: "addBuilding",
    component: () => import("@/views/pages/PublicCodes/nationalities/Edit.vue"),
    meta: {
      headerClass: "header",
      sidebarClass: "",
    },
  },
  {
    path: "/editNationality/:id",
    name: "editBuilding",
    // same component with addNationality
    component: () => import("@/views/pages/PublicCodes/nationalities/Edit.vue"),
    meta: {
      headerClass: "header",
      sidebarClass: "",
    },
  },
];
