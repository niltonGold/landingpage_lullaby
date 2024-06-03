import React from 'react';
import './style.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useMediaQuery } from '@mui/material';

export const Card_3 = () => {

  const isLargeScreen = useMediaQuery( '(min-width:769px)' );
  
  const sendMessage = () => {
    const phoneNumber = '+34624667821';
    const message = 'Ahorra';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };



  return (
    <>
      {/* CONTENEDOR PRINCIPAL */}
      <div className='card_3-container'>

        
              {/* SUB Contenedor 1 */}
              <div className='card_3-banner-tilte'>
                    " CON MÁS DE 2000 PROYECTOS Y CERTIFICACIONES ISO, GARANTIZAMOS RESULTADOS "
              </div>
    

              {/* SUB Contenedor 2 */}
              <div className='card_3-sub-container'>
      
                    <div className='card_3-sub-container-iconwhasap-parrafo1' onClick={sendMessage} style={{ cursor: 'pointer' }}>
                            
                            <WhatsAppIcon sx={{ color: '#ffffff', fontSize: isLargeScreen ? 120 : 40 }} />

                            <div className='card_3-sub-container-parrafo1'>
                                  Mándanos un WhatsApp con la palabra “AHORRAR” y 
                                  transforma tus embalses en energía limpia.
                            </div>
                    
                    </div>
                
              </div>
  
      </div>
    </>
  )
}
