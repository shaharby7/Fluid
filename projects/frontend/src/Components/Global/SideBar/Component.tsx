import * as React from "react";
import * as _ from "lodash";

import sideBarItemsConfig from "./sideBarItemsConfig";

import { useAppDispatch, useAppSelector } from "../../../hooks";
import { pushToRoute, popFromRoute, cutRouteByIdx } from "./Reducer";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography/Typography";
import { ButtonBase, Grid, IconButton, ListItemIcon } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import AddIcon from "@mui/icons-material/Add";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const drawerWidth = 240;

export default function SideBar() {
  const dispatch = useAppDispatch();
  const route = useAppSelector((state) => state.SideBar.route);
  const availableItems = _.get(sideBarItemsConfig, route.join("."));
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <Grid container justifyContent="flex">
          <IconButton onClick={() => dispatch(popFromRoute())}>
            <ArrowLeftIcon />
          </IconButton>
        </Grid>
        <Grid container justifyContent="flex">
          {route.map((page, index) => (
            <ButtonBase onClick={() => dispatch(cutRouteByIdx(index))}>
              <Typography paragraph>{`/${page}`}</Typography>
            </ButtonBase>
          ))}
        </Grid>
        <List>
          {_.entries(availableItems).map(([name, attrs]) => {
            const isFolder = !attrs.kind; //make less stupid validation
            const handleClick = () => {
              if (isFolder) dispatch(pushToRoute(name));
            };
            return (
              <ListItem key={name} disablePadding>
                <ListItemIcon>
                  {isFolder ? <FolderIcon /> : <AddIcon />}
                </ListItemIcon>
                <ListItemButton onClick={handleClick}>
                  <ListItemText primary={name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
}
