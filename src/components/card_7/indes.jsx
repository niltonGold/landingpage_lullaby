import React from 'react';
import './style.css';

export const Card_7 = () => {
  return (
      <>
        {/* CONTENEDOR PRINCIPAL */}
        <div className='card_7-container'>
              

                {/* SUB Contenedor 1 */}
                <div className='card_7-banner-tilte'>
                    "Dos décadas de liderazgo en energía y tratamiento de agua nos respaldan."
                </div>

              
                {/* SUB Contenedor 2 */}
                <div className='card_7-sub-container'>
                    
                        <div className='card_7-certificaciones-logos-container'>
                            
                                    <div className='card_7_certificaciones'>
                          
                                            <div className='card_7-certificaciones-texto'>
                                                        <div className='card_7-certificaciones-texto-informacion1'>
                                                        Certificaciones :
                                                        </div>
                                                        <div className='card_7-certificaciones-texto-informacion2'>
                                                            ISO 9001 : Calidad
                                                        </div>
                                                        <div className='card_7-certificaciones-texto-informacion3'>
                                                            ISO 14001 : Medio Ambiente
                                                        </div>
                                                        <div className='card_7-certificaciones-texto-informacion4'>
                                                            ISO 50001 : Eficiencia Energética.
                                                        </div>
                                            </div>
                                            
                                            <div className='card_7-certificaciones-logos'>
                                
                                                        <div className='card_7-certificaciones-icono1' />

                                                        <div className='card_7-certificaciones-icono2' />

                                                        <div className='card_7-certificaciones-icono3' />
                                            </div>
                          
                                    </div>

                        </div>
                  
                </div>
        </div>
      </>
  )
}
