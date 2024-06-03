import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './style.css';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import { useMediaQuery } from '@mui/material';

const initialFormData = {
        nombre: '',
        telefono: '',
        email: '',
        mensaje: '',
        area: '',
        localidad: ''
    };


const Card_9_formContac = ({Volver}) => {

      const isLargeScreen = useMediaQuery( '(min-width:769px)' );
      
      const [formData, setFormData] = useState( initialFormData );

      const [formVisible, setFormVisible] = useState(false);

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                  ...formData,
                  [name]: value
            });
      };

      const handleBannerClick = () => {
        setFormVisible(!formVisible); // Cambia la visibilidad del formulario
      };
      
      const handleSubmit = (e) => {
            e.preventDefault();
                  sendEmail( formData );
            console.log( formData );
            setFormData( initialFormData );
                  setFormVisible(false); 
      };

      const sendEmail = (data) => {
            emailjs.send('service_aiddyaw', 'template_xyhrz9u', data, 'r_-18lB31SJkvZzPx')
                  .then((response) => {
                  console.log('Correo enviado exitosamente!', response.status, response.text);
                  alert('Mensaje enviado exitosamente!');
                  }, (error) => {
                  console.error('Error al enviar el correo:', error);
                  alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
                  });
      };

      const onButtonClickVolver = () => {
            console.log( 'hola desde card9' );
}


  return (
    <>
      <div className='form-container'>
            
                  <div className='contactForm-banner-title' onClick={handleBannerClick}>
                        CONTACTA CON NOSOTROS
                  </div>

                  <div className='contactForm-principal-container'>
                              
                              <form className='form-div' onSubmit={handleSubmit}>
                                    
                                                            <div className='form-div-titulo'>
                                                                  RELLENA EL FORMULARIO Y OBTÉN "GRATIS" UN DIAGNÓSTICO ENERGÉTCO POR TIEMPO LIMITADO 
                                                                  PARA OPTIMIZAR Y AHORRAR EN SU FACTURA ELÉCTRICA

                                                               
                                                            </div>
                                                            
                                                            
                                                            <div className='escribir-datos-container camposObligatorios'>
                                                                  (*) Campos obligatorios
                                                            </div>
                                

                                                            <div className='escribir-datos-container camposOpcionales'>
                                                                  (o) Campos opcionales
                                                            </div>
                                                            
                                
                                                            <div className='escribir-datos-container'>
                                                                  <div className='titulo-input'>Nombre :</div>
                                                                  <div className='input-obligatorio-container'>
                                                                        <input type="text" className='obligatorio' name="nombre" value={formData.nombre} onChange={handleChange} required />
                                                                        <div className='camposObligatorios'> (*) </div>
                                                                  </div>
                                                            </div>
                                                            
                                                            
                                                            <div className='escribir-datos-container'>
                                                                  <div className='titulo-input'>Teléfono :</div>
                                                                  <div className='input-obligatorio-container'>
                                                                        <input type="tel" className='obligatorio' name="telefono" value={formData.telefono} onChange={handleChange} required />
                                                                        <div className='camposObligatorios'> (*) </div>
                                                                  </div>
                                                            </div>
                                                            
                                                      
                                                            <div className='escribir-datos-container'>
                                                                  <div className='titulo-input'>Email :</div>
                                                                  <div className='input-obligatorio-container'>
                                                                        <input type="email" className='obligatorio' name="email" value={formData.email} onChange={handleChange} required />
                                                                        <div className='camposObligatorios'> (*) </div>
                                                                  </div>
                                                            </div>
                                                            
                                                      
                                                            <div className='escribir-datos-container'>
                                                                  <div className='titulo-input'>Mensaje :</div>
                                                                  <div className='input-obligatorio-container'>                            
                                                                        <textarea name="mensaje" className='opcional' value={formData.mensaje} onChange={handleChange} />
                                                                        <div className='camposOpcionales'> (o) </div>
                                                                  </div>
                                                            </div>
                                                
                                                            
                                                            <div className='escribir-datos-container'>
                                                                  <div className='titulo-input'>Area de tu embalse (m<sup>2</sup>) :</div>
                                                                  <div className='input-obligatorio-container'>
                                                                        <input type="number" className='opcional' name="area" value={formData.area} onChange={handleChange} />
                                                                        <div className='camposOpcionales'> (o) </div>
                                                                  </div>
                                                            </div>
                                                
                                                            
                                                            <div className='escribir-datos-container'>
                                                                  <div className='titulo-input'>Localidad :</div>
                                                                  <div className='input-obligatorio-container'>
                                                                        <input type='text'  className='opcional' name="localidad" value={formData.localidad} onChange={handleChange} />
                                                                        <div className='camposOpcionales'> (o) </div>
                                                                  </div>
                                                            </div>
                                                
                                                
                                                <button className='btn-submit' type="submit">Enviar</button>
                                                
                                                      
                                    
                                    
                              </form>
                        
                          <div className='btn-card9' onClick={Volver}>
                                <ReplyAllIcon sx={{ color: '#ffffff', fontSize: isLargeScreen ? 100 : 40 }}/>
                                <div className='volver'>Volver</div>
                          </div>
                 
                  </div>
                    
      </div>
    </>
  );
};

export default Card_9_formContac;