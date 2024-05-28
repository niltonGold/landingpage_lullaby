import React from 'react';
import './style.css';

export const Card_2 = () => {
  return (
    <>
      {/* CONTENEDOR PRINCIPAL */}
      <div className='card_2-container'>

                    
            {/* SUB Contenedor 1 */}
            <div className='card_2-banner-tilte'>
                  ¿Costos altos de energía, falta de espacio, aguas con algas, o alta evaporación?  
            </div>

                    
            {/* SUB Contenedor 2 */} 
            <div className='card_2-sub-container'>
      
                  {/* SUB Contenedor 2.1 */}
                  <div className='card_2-sub-container-texto'>

                        Las Instalaciones flotantes fotovoltaicas aumentan
                        la eficiencia solar hasta un 30%, aprovechan un área en desuso,
                        reducen evaporación y algas, y gracias al SFS se minimiza el
                        coste de implantación"
            
                  </div>
        
            </div>
        
                    
      </div>
    </>
  )
}
