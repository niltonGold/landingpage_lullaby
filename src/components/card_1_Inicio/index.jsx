import React from 'react';
import './style.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useMediaQuery } from '@mui/material';

export const Card_1_Inicio = () => {



  const isLargeScreen = useMediaQuery( '(min-width:769px)' );
  
  const sendMessage = () => {
      const phoneNumber = '+34624030926gti';
      const message = 'Ahorra';
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
  };



  return (
    <>
      {/* CONTENEDOR PRINCIPAL */}
      <div className='card_1-container'>

                {/* SUB Contenedor 1 */}
                <div className="card_1_banner-title">
                      " FOTOVOLTAICA FLOTANTE: INNOVACIÓN Y SOSTENIBILIDAD EN EMBALSES "
                </div>
        

                {/* SUB Contenedor 2 */}
                <div className='card_1_sub-container'>
                
                        {/* SUB Contenedor 2.1 */}
                        <div className="card_1-sub-title1">
                              " Aprovecha al máximo cada m<sup>2</sup> de agua con la tecnología SFS "
                        </div>
                

                        {/* SUB Contenedor 2.2 */} 
                        <div className="car_1-sub-title2" onClick={sendMessage} style={{ cursor: 'pointer' }}>
                                  
                                  <div className="car_1-sub-title2-texto">
                                      ¿Tienes un embalse y quieres ahorrar hasta el
                                      30% de tu factura eléctrica?       
                                  </div>
                  
                                  <WhatsAppIcon sx={{ color: '#ffffff', fontSize: isLargeScreen ? 140 : 40 }} />
            
                        </div>
                
                </div>
        
      </div>
    </> 
  )
}
