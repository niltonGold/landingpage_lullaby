import React from 'react'
import './style.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useMediaQuery } from '@mui/material';
import AdsClickIcon from '@mui/icons-material/AdsClick';

export const Card_8 = ({onButtonClick}) => {

    const isLargeScreen = useMediaQuery( '(min-width:769px)' );
    
    const sendMessage = () => {
        const phoneNumber = '+34624030926';
        const message = 'Ahorra';
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        };
        
        const handlebtnhide = () => {
                handlebtnhide();
        }

    return (
        <>
             {/* CONTENEDOR PRINCIPAL */}
            <div className='card_8-container'>

                        {/* SUB Contenedor 1 */}
                        <div className='card_8-banner-tilte'>
                            ¡Contáctanos hoy para obtener más información y dar el primer paso hacia un futuro más brillante para todos!
                        </div>

                        {/* SUB Contenedor 2 */}
                        <div className='card_8-sub-container-contactos'>
                                
                    
                                        {/* SUB Contenedor 2.1 contacto 1 */}
                                        <div className='card_8-sub-container-contacto'>
                                        
                        
                                                        <div className='card_8-sub-container-contacto-info'>
                                                                                        
                                                                <img className='card_8-contacto-logo Alfredo' />
                                    
                                                                <div className='card_8_logo-web-container'>
                                                                        <div className='card_8-nombre-contacto'>
                                                                                Alfredo Rodríguez (AguaINC)
                                                                        </div>
                                                        
                                                                </div>
                                    
                                                        </div>   
                        
                                        </div>
                                
                    
                                        {/* SUB Contenedor 2.2 contacto 2 */}
                                        <div className='card_8-sub-container-contacto'>
                                        
                        
                                                        <div className='card_8-sub-container-contacto-info'>
                                                                
                                                                <img className='card_8-contacto-logo Carlos' />
                            
                                                                <div className='card_8_logo-web-container'>
                                                                
                                                                        <div className='card_8-nombre-contacto'>
                                                                            Carlos Calvo Diez (AguaINC)
                                                                        </div>
                                
                                                                </div>
                                                        </div>   
                        
                                        </div>


                                        {/* SUB Contenedor 2.3 contacto 3 */}
                                        <div className='card_8-sub-container-contacto'>
                                        
                                                        <div className='card_8-sub-container-contacto-info'>

                                                                <img className='card_8-contacto-logo Antonio' />
                                                                
                                                                <div className='card_8_logo-web-container'>
                                                                        
                                                                        <div className='card_8-nombre-contacto'>
                                                                            Antonio Santos (Excellentia) 
                                                                        </div>
                                
                                                                </div>
                                                        </div>   
                        
                                        </div>



                             
                            </div>
                            
                        <a href="http://aguainc.com/" className="enlace-aguainc" target="_blank">
                                    www.aguainc.com
                        </a>
                            
                        <a href="https://www.grupoexcellentia.com/" className="enlace-excellentia" target="_blank">
                                www.grupoexcellentia.com
                        </a>
                            
                        {/* SUB Contenedor 3 */}
                        <div className='card_8-sub-container-whasap' onClick={sendMessage} style={{ cursor: 'pointer' }}>
                                
                                <div className='card_8_sub-container-whasap-texto'>
                                    Mándanos un WhatsApp con la palabra "Ahorro"
                                </div>
                                
                                <WhatsAppIcon sx={{ color: '#26B101', fontSize: isLargeScreen ? 150 : 100 }} />
                        
                        </div>
                

                        {/* SUB Contenedor 4 */}
                        <div className='card_8-imagen1-container'>  
                                <img className='card_8-imagen1' />
                        </div>
                                
                
                        {/* SUB Contenedor 5 */}
                        <div className='card_8-sub-container-parrafo2'>
                    
                                <a href="#form-contact" className="enlace" onClick={onButtonClick}>
                                            
                                        <div>
                                                ¡Tu diagnóstico energético “Gratuito” por tiempo limitado, *CLIK aquí!
                                        </div>
                                                
                                        <AdsClickIcon sx={{ fontSize: { xs: '2.5rem', md: '4rem' } }} />
                                
                                </a>
                    
                        </div>
                
            </div>
        </>
    )
}
