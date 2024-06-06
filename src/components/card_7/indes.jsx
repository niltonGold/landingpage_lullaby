import React from 'react';
import './style.css';

export const Card_7 = () => {
  return (
      <>
        {/* CONTENEDOR PRINCIPAL */}
        <div className='card_7-container'>
              

                {/* SUB Contenedor 1 */}
                <div className='card_7-banner-tilte'>
                    "DOS DÉCADAS DE LIDERAZGO EN ENERGÍA Y TRTAMIENTO DE AGUA NOS RESPALDAN"
                </div>

                                            
                {/* SUB Contenedor 2 */}
                <div className='card_7_certificaciones'>
                          
                            <div className='card_7-certificaciones-texto-informacion-container'>
                                
                                    <div className='card_7-certificaciones-texto-informacion'>
                                            <div>ISO 9001 :</div>
                                            <div>Calidad</div>
                                    </div>
            
                                    <div className='card_7-certificaciones-icono1' />
                            
                            </div>
                            
                            <div className='card_7-certificaciones-texto-informacion-container'>
                                    
                                    <div className='card_7-certificaciones-texto-informacion'>
                                            <div>ISO 14001 :</div>
                                            <div>Medio Ambiente</div>
                                    </div>                  
                                    
                                    <div className='card_7-certificaciones-icono2' />
                            
                            </div>
                            
                            <div className='card_7-certificaciones-texto-informacion-container'>
                                
                                    <div className='card_7-certificaciones-texto-informacion'>
                                            <div>ISO 50001 :</div>
                                            <div>Eficiencia Energética</div>
                                    </div>
                                    
                                    <div className='card_7-certificaciones-icono3' />
                            
                            </div>
                          
                </div>
        </div>
      </>
  )
}
