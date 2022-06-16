import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Dashboard from "@mui/icons-material/Dashboard";
import WorkspacesIcon from "@mui/icons-material/Workspaces";

export const NAVBAR_DROPDOWN_BUTTONS = [
  {
    id: 1,
    btnTitle: "Workspaces",
    drpOptions: [
      {
        id: 1,
        optionTitle: "Edit",
        icon: <EditIcon />,
      },
      {
        id: 2,
        optionTitle: "Duplicate",
        icon: <FileCopyIcon />,
      },
      {
        id: 3,
        optionTitle: "Archive",
        icon: <ArchiveIcon />,
      },
      {
        id: 4,
        optionTitle: "More",
        icon: <MoreHorizIcon />,
      },
    ],
  },
  {
    id: 2,
    btnTitle: "Recent",
    drpOptions: [
      {
        id: 1,
        optionTitle: "Edit",
        icon: <EditIcon />,
      },
      {
        id: 2,
        optionTitle: "Duplicate",
        icon: <FileCopyIcon />,
      },
      {
        id: 3,
        optionTitle: "Archive",
        icon: <ArchiveIcon />,
      },
      {
        id: 4,
        optionTitle: "More",
        icon: <MoreHorizIcon />,
      },
    ],
  },
  {
    id: 3,
    btnTitle: "Starred",
    drpOptions: [
      {
        id: 1,
        optionTitle: "Edit",
        icon: <EditIcon />,
      },
      {
        id: 2,
        optionTitle: "Duplicate",
        icon: <FileCopyIcon />,
      },
      {
        id: 3,
        optionTitle: "Archive",
        icon: <ArchiveIcon />,
      },
      {
        id: 4,
        optionTitle: "More",
        icon: <MoreHorizIcon />,
      },
    ],
  },
  {
    id: 4,
    btnTitle: "Templates",
    drpOptions: [
      {
        id: 1,
        optionTitle: "Edit",
        icon: <EditIcon />,
      },
      {
        id: 2,
        optionTitle: "Duplicate",
        icon: <FileCopyIcon />,
      },
      {
        id: 3,
        optionTitle: "Archive",
        icon: <ArchiveIcon />,
      },
      {
        id: 4,
        optionTitle: "More",
        icon: <MoreHorizIcon />,
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
