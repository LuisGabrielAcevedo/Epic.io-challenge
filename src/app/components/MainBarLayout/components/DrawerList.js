import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import HomeIcon from "@material-ui/icons/Home";
import StoreIcon from "@material-ui/icons/Store";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import { useNavigate } from "react-router-dom";

const list = [
  {
    label: "Home",
    value: "home",
    path: "/home",
    icon: () => <HomeIcon />,
  },
  {
    label: "Inventory",
    value: "inventory",
    path: "/inventory",
    icon: () => <ViewModuleIcon />,
  },
  {
    label: "Store",
    value: "store",
    path: "/store",
    icon: () => <StoreIcon />,
  },
];

export const DrawerList = () => {
  const navigate = useNavigate();
  return (
    <>
      <Divider />
      <List>
        {list.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(item.path)}>
              <ListItemIcon>{item.icon()}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};
