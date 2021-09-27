import React from 'react'
import  './Sidenav.css';
import icon from '../Sidebar/icon.png'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import course from '../Sidebar/course.png'
import house from '../Sidebar/house.png'
import achiev from '../Sidebar/achiev.png'
import bookmark from '../Sidebar/bookmark.png'
import { flexbox } from '@mui/system';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidenav = () => {
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                      <ListItemIcon>
                          <img src={icon} style={{margin:15}}/>
                        </ListItemIcon>
                          
                        <ListItemText

                          sx={{ my: 0}}
                            primary="UPSKILL"
                            primaryTypographyProps={{
                            fontSize: 20,
                            fontWeight: 'medium',
                            letterSpacing: 0,
                            }}
                        />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemButton component="a" href="/dashboard/">
                        <ListItemIcon>
                        <img src={house} style={{display:flexbox,weight:32,height:32}}/>
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemButton component="a" href="/dashboard/bookmark">
                        <ListItemIcon>
                        <img src={bookmark} style={{display:flexbox,weight:32,height:32}}/>
                        </ListItemIcon>
                        <ListItemText primary="Bookmark" />
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemButton component="a" href="/dashboard/Course">
                      <ListItemIcon>
                          <img src={course} style={{display:flexbox,weight:32,height:32}}/>
                        </ListItemIcon>
                        
                        <ListItemText primary="Course" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                      <ListItemIcon>
                          <img src={achiev} style={{display:flexbox,weight:32,height:32}}/>
                        </ListItemIcon>
                        
                        <ListItemText primary="Achievement" />
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemButton>
                      <ListItemIcon>
                          <SearchIcon color="action"/>
                        </ListItemIcon>
                        
                        <ListItemText primary="Explore" />
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemButton>
                      <ListItemIcon>
                          <AccountCircleIcon color="action"/>
                        </ListItemIcon>
                        
                        <ListItemText primary="Profile" />
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemButton>
                      <ListItemIcon>
                          <NotificationsActiveIcon color="action"/>
                        </ListItemIcon>
                        
                        <ListItemText primary="Notification" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                      <ListItemIcon>
                          <LogoutIcon  color="action"/>
                        </ListItemIcon>
                        
                        <ListItemText primary="Log Out" />
                      </ListItemButton>
                    </ListItem>
                    
                    


                </List>
            </nav>
            <Divider />
                <nav aria-label="secondary mailbox folders">
                    <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText primary="About Us" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="Notes" />
                          </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
        </Box>

    )
}

export default Sidenav
