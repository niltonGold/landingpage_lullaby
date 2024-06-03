import React from 'react';
import './style.css';

export const Card_2 = () => {
  return (
    <>
      {/* CONTENEDOR PRINCIPAL */}
      <div className='card_2-container'>

                    
            {/* SUB Contenedor 1 */}
            <div className='card_2-banner-tilte'>
                  ¿ALTOS COSTES DE ENERGÍA, FALTA DE ESPACIO, AGUAS CON ALGAS, O ALTA EVAPORACIÓN?  
            </div>

                    
            {/* SUB Contenedor 2 */} 
            <div className='card_2-sub-container'>
      
                  {/* SUB Contenedor 2.1 */}
                  <div className='card_2-sub-container-texto'>

                        Los paneles solares flotantes aumentan su eficiencia hasta un 30%, aprovechan un área en desuso,
                        reducen la evaporación y algas, y gracias al SFS se minimiza el
                        coste de implantación.
            
                  </div>
        
            </div>
        
                    
      </div>
    </>
  )
}
