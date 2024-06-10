import React, { useState } from 'react';
import { Box, AppBar, Toolbar, IconButton, Menu, MenuItem, Button, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import './style.css';




export const Header = () => {

  const [anchorEl, setAnchorEl] = useState( null );
  
  const isMobile = useMediaQuery('(max-width: 768px)'); 

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: 'INICIO', href: '#Inicio' },
    { label: 'PORQUE', href: '#Por_que' },
    { label: 'QUIENES SOMOS', href: '#QuienesSomos' },
    { label: 'SFS', href: '#SFS' },
    { label: 'AHORRO', href: '#Ahorro' },
    { label: 'EXPERIENCIA', href: '#Experiencia' },
    { label: 'CONTACTO', href: '#Contacto' },
  ];




  return (
    <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'rgba(241, 226, 40, 0.2)' }}>
                    <Toolbar>
                      {isMobile ? (
                        <>
              

                                <IconButton
                                  size="large"
                                  edge="start"
                                  color="inherit"
                                  aria-label="menu"
                                  sx={{ mr: 2 }}
                                  onClick={handleMenuClick}
                                >
                
                                      <MenuIcon />
                
                                </IconButton>
                          
                                <Menu
                                  anchorEl={anchorEl}
                                  open={Boolean(anchorEl)}
                                  onClose={handleMenuClose}
                                  // sx={{ bgcolor: 'rgba(114, 144, 40, 0.8)' }} // Cambia el color de fondo del menú
                                >
                                  {menuItems.map((item) => (
                                    <MenuItem
                                      onClick={handleMenuClose}
                                      key={item.label}
                                      sx={{ bgcolor: 'rgba(114, 144, 40, 0.6)' }} // Cambia el color de fondo de cada elemento del menú
                                    >
                                      <a href={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        {item.label}
                                      </a>
                                    </MenuItem>
                                  ))}
                                </Menu>
                                
                                <div className="cont">
                                    <a href="http://aguainc.com/" target="_blank" className="aguainclogoimg"></a>
                                </div>
                                <div className="cont">
                                    <a href="https://www.grupoexcellentia.com/" target="_blank" className="excellentialogoimg"></a>
                                </div>

                        </>
                      ) : (
                        <>

                
                                <div className="cont">
                                    <a href="http://aguainc.com/" target="_blank" className="aguainclogoimg"></a>
                                </div>
                                <div className="cont">
                                    <a href="https://www.grupoexcellentia.com/" target="_blank" className="excellentialogoimg"></a>
                                </div>
                                <Box sx={{ display: 'flex', marginLeft: 'auto', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                                
                                    
                                      {menuItems.map((item, index) => (
                                              
                                                <React.Fragment key={item.label}>
                                                    
                                                    <Button
                                                      href={item.href}
                                                      sx={{ color: 'inherit', fontWeight: 'bold', fontSize: 'larger' }}
                                                    >
                                                      {item.label}
                                                    </Button>
                                                    
                                                    {index < menuItems.length - 1 && (
                                                        <span style={{ margin: '0 8px', alignSelf: 'center' }}>|</span>
                                                      )}
                                              
                                                </React.Fragment>
                                      
                                      ) )}
                                
                                </Box>
                
                        </>
                      )}
                    </Toolbar>
            </AppBar>
    </Box>
  );
};
