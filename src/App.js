import './App.css';
import React, { useState } from 'react';
import { Header } from './components/header';
import { Card_1_Inicio } from './components/card_1_Inicio';
import { Card_2 } from './components/card_2';
import { Card_3 } from './components/card_3';
import { Card_4 } from './components/card_4';
import { Card_5 } from './components/card_5';
import { Card_6 } from './components/card_6';
import { Card_7 } from './components/card_7/indes';
import Card_9_formContac from './components/card_9_formContac';
import { Card_8 } from './components/card_8';
import { Footer } from './components/footer';
import { Footer_flotante } from './components/footer_flotante';
// import CookieConsent from 'react-cookie-consent';



function App() {




  const [showCookieConsent, setShowCookieConsent] = useState(true); // Estado para controlar la visibilidad de CookieConsent

  const handleAcceptCookies = () => {
    // Función para manejar la aceptación de cookies
    setShowCookieConsent(false); // Ocultar CookieConsent
    // Aquí puedes agregar cualquier otra lógica relacionada con la aceptación de cookies
  };

  const handleDeclineCookies = () => {
    // Función para manejar el rechazo de cookies
    setShowCookieConsent(false); // Ocultar CookieConsent
    // Aquí puedes agregar cualquier otra lógica relacionada con el rechazo de cookies
  };

  const handleDocumentClickPoliticaDeCookies = () => {
    window.open('/PoliticaDeCookies.pdf', '_blank');
  };

  const [paginaVisible, setPaginaVisible] = useState( true );

  const handleButtonClick = () => {
    // alert( 'Función activada en App!' );
    setPaginaVisible( false );
  };

  const handleButtonClickVolver = () => {
    // alert( 'Función activada en App!' );
    setPaginaVisible( true );
  };
  
  return (
    <div className="App-header">
      

      
        {/* {showCookieConsent && ( 
              <div className="cookie-consent-overlay"> 
                <CookieConsent
                          location="bottom"
                          buttonText="Aceptar"
                          declineButtonText="Rechazar"
                          cookieName="myAwesomeCookieName"
                          expires={150}
                          enableDeclineButton
                          onAccept={handleAcceptCookies}
                          onDecline={handleDeclineCookies}
                          style={{
                            fontSize: "18px", // Ajusta el tamaño del texto
                            Width: "100%", // Ajusta el ancho máximo del componente
                            height: "40%",
                            display: "flex",
                            alignItems: "center",
                            alignSelf: "center"

                          }}
                          buttonStyle={{
                            fontSize: "18px", // Ajusta el tamaño del texto del botón
                            padding: "10px 20px", // Ajusta el espacio dentro del botón
                          }} >
                      Este sitio web utiliza cookies para mejorar la experiencia del usuario.{" "}
                      <a style={{ color: "#4e503b", textDecoration:"underline" }} onClick={handleDocumentClickPoliticaDeCookies}>
                        Leer más
                      </a>
                </CookieConsent>
              </div>
        )} */}


            <div className={ paginaVisible ? 'main-container' : 'main-container-hide' }> 
            
            
                    <Header />

                    {/* <div className='main-sub-container'> */}

                              <div id="Inicio" className='App-card'>
                                  <Card_1_Inicio />
                              </div>
                      
                            {/* ---------------------------------- */}
                      
                              <div id="Por_que" className='App-card'>
                                <Card_2/>
                              </div>

                            {/* ---------------------------------- */}
                      
                              <div id="QuienesSomos" className='App-card'>
                                <Card_3/>
                              </div>

                            {/* ---------------------------------- */}
                            
                              <div id="Innovacion" className='App-card'>
                                <Card_4 />
                              </div>
                      
                            {/* ---------------------------------- */}
                            
                              <div id="Sfs" className='App-card'>
                                  <Card_5 />
                              </div>
                            
                            {/* ---------------------------------- */}
                              
                              <div id="Porque_sfs" className='App-card'>
                                  <Card_6 />
                              </div>
                  
                            {/* ---------------------------------- */}
                          
                              <div id="Certificaciones" className='App-card'>
                                  <Card_7 />          
                              </div>
                          
                            {/* ---------------------------------- */}
                      
                              <div id="Contacto" className='App-card'>
                                  <Card_8 onButtonClick={ handleButtonClick } />
                              </div>
                      
                            {/* ---------------------------------- */}
                          
                          
                          
                    {/* </div> */}
                    
                    <Footer />
                    
                    <Footer_flotante onsendMessage={handleButtonClick} />

                       


          </div>
      
              <div id="form-contact" className={ paginaVisible ? 'App-card9-hide' : 'App-card9' }>
        <Card_9_formContac  Volver={ handleButtonClickVolver }/>
                    {/* <button  className='btn-card9' onClick={ handleButtonClickk }>Volver</button> */}
              </div>

    </div>
  );
}

export default App;
