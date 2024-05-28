import React from 'react';
import './style.css';

export const Footer = () => {


  const handleDocumentClickAvisoLegal = () => {
    window.open('/AvisoLegal.pdf', '_blank');
  };

  const handleDocumentClickPoliticaDeCookies = () => {
    window.open('/PoliticaDeCookies.pdf', '_blank');
  };

  const handleDocumentClickPoliticaDeCalidad = () => {
    window.open('/PoliticaDeCalidad.pdf', '_blank');
  };


  return (
      <>
                <div className='footer'>
              
                    <a className='documentos_legales' onClick={handleDocumentClickAvisoLegal} style={{ cursor: 'pointer' }} >AVISO LEGAL</a>
              
                        <div className='separador' style={{ cursor: 'pointer' }} >|</div>
          
                    <a className='documentos_legales' onClick={handleDocumentClickPoliticaDeCookies} style={{ cursor: 'pointer' }} >POLÍTICA DE COOKIES</a>
                    
                        <div className='separador'>|</div>
          
                    <a className='documentos_legales' onClick={handleDocumentClickPoliticaDeCalidad} style={{ cursor: 'pointer' }} >POLÍTICA DE CALIDAD</a>
                    
              </div>
      </>
  )
}
