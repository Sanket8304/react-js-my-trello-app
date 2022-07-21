import React from "react";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import HistoryIcon from "@mui/icons-material/History";
import StarIcon from "@mui/icons-material/Star";
import ArticleIcon from "@mui/icons-material/Article";
import Dashboard from "@mui/icons-material/Dashboard";

import { URL_WORKSPACES } from "./Paths";

export const NAVBAR_DROPDOWN_BUTTONS = [
  {
    id: 1,
    btnTitle: "Workspaces",
    Workspaces: [
      {
        id: 1,
        optionTitle: "My Workspaces",
        icon: <WorkspacesIcon />,
        url: URL_WORKSPACES,
      },
    ],
  },
  {
    id: 2,
    btnTitle: "Recent",
    Recent: [
      {
        id: 1,
        optionTitle: "Recent",
        icon: <HistoryIcon />,
        url: "",
      },
    ],
  },
  {
    id: 3,
    btnTitle: "Starred",
    Starred: [
      {
        id: 1,
        optionTitle: "Starred",
        icon: <StarIcon />,
        url: "",
      },
    ],
  },
  {
    id: 4,
    btnTitle: "Templates",
    Templates: [
      {
        id: 1,
        optionTitle: "Templates",
        icon: <ArticleIcon />,
        url: "",
      },
    ],
  },
];

export const SIDEMENU_OPTIONS = [
  {
    listText: "DashBoard",
    listIcon: <Dashboard />,
    url: "/dashboard",
  },
  {
    listText: "My Workspaces",
    listIcon: <WorkspacesIcon />,
    url: "/workspaces",
  },
];
