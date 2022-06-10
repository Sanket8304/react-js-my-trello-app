import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Dashboard from "@mui/icons-material/Dashboard";

export const NAVBAR_DROPDOWN_BUTTONS = [
  {
    btnTitle: "Workspaces",
    drpOptions: [
      {
        optionTitle: "Edit",
        icon: <EditIcon />,
      },
      {
        optionTitle: "Duplicate",
        icon: <FileCopyIcon />,
      },
      {
        optionTitle: "Archive",
        icon: <ArchiveIcon />,
      },
      {
        optionTitle: "More",
        icon: <MoreHorizIcon />,
      },
    ],
  },
  {
    btnTitle: "Recent",
    drpOptions: [
      {
        optionTitle: "Edit",
        icon: <EditIcon />,
      },
      {
        optionTitle: "Duplicate",
        icon: <FileCopyIcon />,
      },
      {
        optionTitle: "Archive",
        icon: <ArchiveIcon />,
      },
      {
        optionTitle: "More",
        icon: <MoreHorizIcon />,
      },
    ],
  },
  {
    btnTitle: "Starred",
    drpOptions: [
      {
        optionTitle: "Edit",
        icon: <EditIcon />,
      },
      {
        optionTitle: "Duplicate",
        icon: <FileCopyIcon />,
      },
      {
        optionTitle: "Archive",
        icon: <ArchiveIcon />,
      },
      {
        optionTitle: "More",
        icon: <MoreHorizIcon />,
      },
    ],
  },
  {
    btnTitle: "Templates",
    drpOptions: [
      {
        optionTitle: "Edit",
        icon: <EditIcon />,
      },
      {
        optionTitle: "Duplicate",
        icon: <FileCopyIcon />,
      },
      {
        optionTitle: "Archive",
        icon: <ArchiveIcon />,
      },
      {
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
  },
];
