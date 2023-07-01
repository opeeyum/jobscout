import React from 'react';
import { Box, Drawer, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';

export default function TemporaryDrawer({ anchor, menuItems, open, onClose }) {
  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    onClose();
  };

  const list = (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {menuItems.map((menuItem, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={menuItem.onClick}>
              <ListItemIcon>
                {menuItem.icon}
              </ListItemIcon>
              <ListItemText sx={{
                ml:-2
              }} primary={menuItem.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <IconButton sx={{
      ml: "20%",
      mr: 1
    }} onClick={toggleDrawer}>
        {anchor}
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
      >
        {list}
      </Drawer>
    </React.Fragment>
  );
}
