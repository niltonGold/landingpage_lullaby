import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './style.css';
import AdsClickIcon from '@mui/icons-material/AdsClick';



const sendMessage = () => {
  const phoneNumber = '+34624667821';
  const message = 'Ahorra';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};




export const Footer_flotante = () => {
  return (
      <>
              <AppBar position="fixed" sx={{
                top: 'auto', bottom: 0, backgroundColor: 'rgb(84, 130, 53, 0.8)',
                display: 'flex', flexDirection: 'row', padding: '0.5rem',
                paddingLeft: '1rem', paddingRight: '1rem', gap: '1rem' }}>

                      <Link onClick={sendMessage} sx={{
                        display: 'inline-flex', gap: '1rem', cursor: 'pointer',
                        textDecoration: 'none', backgroundColor: '#17662F',
                        color: 'white', alignItems: 'center', alignSelf: 'center', fontSize: { xs: '12px', md: '20px' }, padding: '0.5rem 0.5rem 0.5rem 0.5rem',
                        borderRadius: '8px', fontWeight: 'bold', border: 'none', boxShadow: '8px 10px 4px rgba(0, 0, 0, 0.6)', transition: 'background-color 0.3s, transform 0.2s', 
                          '&:hover': { backgroundColor: '#e64a19', transform: 'scale(1.05)' } }} >
          
          
                            <div>                 
                              "Gratis tu diagnostico energético aquí"
                            </div>
                            <AdsClickIcon sx={{ fontSize:  { xs: '2.5rem', md: '3rem' } }}/>
                      
                      </Link>

              
                      <Box sx={{ flexGrow: 1 }} />

              
                      <Box sx={{ width: '50%', textAlign: 'right', display: 'flex', justifyContent: 'flex-end' }} >
                                      
                                <Link onClick={sendMessage} sx={{
                                    display: 'inline-flex',
                                    gap: '1rem',
                                    cursor: 'pointer', textDecoration: 'none',
                                    backgroundColor: '#17662F', color: 'white', fontSize: { xs: '12px', md: '20px' },         
                                    padding: '0.1rem 0.5rem 0.1rem 0.5rem',
                                    borderRadius: '8px', fontWeight: 'bold', border: 'none',
                                    boxShadow: '8px 10px 4px rgba(0, 0, 0, 0.6)', transition: 'background-color 0.3s, transform 0.2s', 
                                        '&:hover': { backgroundColor: '#e64a19', transform: 'scale(1.05)' } }} >
                                
                
                                        <Box sx={{ display: 'flex', flexDirection: 'column', color: 'white', fontWeight: 'bold', alignSelf: 'center', textAlign: 'center' }} >
                                        
                                                <Box >
                                                    Escribe
                                                </Box>
                                                <Box>
                                                    "AHORRAR"
                                                </Box>
                                        
                                        </Box>
                                                            
                                        <Box sx={{ display: 'flex', alignItems: 'center', color: 'white' }} >
                                        
                                              <WhatsAppIcon sx={{ fontSize:  { xs: '2.5rem', md: '3rem' } }} />
                                        
                                        </Box>

                  
                                </Link>
                                      
                      </Box>
                    
              </AppBar> 
      </>
  )
}
