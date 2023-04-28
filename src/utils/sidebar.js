import Home from "../assets/icons/Home";
import BankNotes from "../assets/icons/BankNotes";
import UserGroup from "../assets/icons/UserGroup";

const sidebarMenu = [
  {
    title: "Overview",
    path: "/overview",
    icon: <Home className="w-4 h-auto" />,
  },
  {
    title: "Payments",
    path: "/payments",
    icon: <BankNotes className="w-4 h-auto" />,
    isLinked: true,
    subMenu: [
      { title: "Top Ups", path: "/payments/top-ups" },
      { title: "Payouts", path: "/payments/payouts" },
      { title: "All Transaction", path: "/payments/all-transaction" },
    ],
  },
  {
    title: "User Managements",
    path: "/user-managements",
    icon: <UserGroup className="w-4 h-auto" />,
    isLinked: false,
    subMenu: [
      { title: "User List", path: "/user-managements/user-list" },
      { title: "Roles", path: "/user-managements/roles" },
      {
        title: "Access Management",
        path: "/user-managements/access-management",
      },
    ],
  },
];

export { sidebarMenu };
