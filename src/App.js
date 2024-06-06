
import './App.css';
import React, { useState, useEffect } from 'react';
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
import CookieConsent from 'react-cookie-consent';
import Cookies from 'js-cookie';

function App() {

  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get('cookieConsent');
    if (!cookieConsent) {
      setShowCookieConsent(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    Cookies.set('cookieConsent', 'accepted', { expires: 150 });
    setShowCookieConsent(false);
  };

  const handleDeclineCookies = () => {
    Cookies.set('cookieConsent', 'declined', { expires: 150 });
    setShowCookieConsent(false);
  };

  const handleDocumentClickPoliticaDeCookies = () => {
    window.open('/PoliticaDeCookies.pdf', '_blank');
  };

  const [paginaVisible, setPaginaVisible] = useState(true);

  const handleButtonClick = () => {
    setPaginaVisible(false);
  };

  const handleButtonClickVolver = () => {
    setPaginaVisible(true);
    const formContactElement = document.getElementById('app-head');
    if (formContactElement) {
      formContactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };



  
  return (
    <div className="App-header" id="app-head">
      {showCookieConsent && (
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
              fontSize: "18px",
              width: "100%",
              height: "40%",
              display: "flex",
              alignItems: "center",
              justifyContent: 'center',
              paddingBottom: '5rem'
            }}
            buttonStyle={{
              fontSize: "18px",
              padding: "10px 20px",
            }}
            declineButtonStyle={{
              fontSize: "18px",
              padding: "10px 20px",
            }}
          >
            <div className="cookie-texto-enlace-container">
              <div className="cookie-texto">
                Esta página web utiliza cookies propias y de terceros para fines técnicos y analíticos, así como para elaborar perfiles en base a tus hábitos de navegación y mostrarte publicidad relacionada con tus preferencias.{" "}
                <a
                  className="cookie-enlace"
                  style={{ color: "#4e503b", textDecoration: "underline" }}
                  onClick={handleDocumentClickPoliticaDeCookies}
                >
                  Leer más
                </a>
              </div>
            </div>
          </CookieConsent>
        </div>
      )}

      <div className={paginaVisible ? 'main-container' : 'main-container-hide'}>
        <Header />

        <div id="Inicio" className="App-card">
          <Card_1_Inicio />
        </div>

        <div id="Por_que" className="App-card">
          <Card_2 />
        </div>

        <div id="QuienesSomos" className="App-card">
          <Card_3 />
        </div>

        <div id="Innovacion" className="App-card">
          <Card_4 />
        </div>

        <div id="Sfs" className="App-card">
          <Card_5 />
        </div>

        <div id="Ahorro" className="App-card">
          <Card_6 />
        </div>

        <div id="Experiencia" className="App-card">
          <Card_7 />
        </div>

        <div id="Contacto" className="App-card">
          <Card_8 onButtonClick={handleButtonClick} />
        </div>

        <Footer />
        <Footer_flotante onsendMessage={handleButtonClick} />
      </div>

      <div id="form-contact" className={paginaVisible ? 'App-card9-hide' : 'App-card9'}>
        <Card_9_formContac Volver={handleButtonClickVolver} />
      </div>
    </div>
  );
}

export default App;















