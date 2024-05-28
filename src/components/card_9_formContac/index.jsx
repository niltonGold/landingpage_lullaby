import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './style.css';

const initialFormData = {
        nombre: '',
        telefono: '',
        email: '',
        mensaje: ''
    };


const Card_9_formContac = () => {


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




  return (
    <>
      <div className='form-container'>
            
                  <div className='contactForm-banner-title' onClick={handleBannerClick}>
                        Contacta con nosotros
                  </div>

                  <form className='form-div' onSubmit={handleSubmit}>
                          
                              <div className='contactForm-sub-container'>
                                    
                                    <div className='contactForm-datos-contacto-container'>
                                          
                                                <div className='escribir-datos-container'>
                                                      <div className='subtitulo'>Nombre <div className='dospuntos0'>:</div></div>
                                                      <div className='dospuntos'>:</div>
                                                      <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                                                </div>
                                                
                                                
                                                <div className='escribir-datos-container'>
                                                      <div className='subtitulo'>Teléfono <div className='dospuntos0'>:</div></div>
                                                      <div className='dospuntos'>:</div>
                                                      <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
                                                </div>
                                                
                                          
                                                <div className='escribir-datos-container'>
                                                      <div className='subtitulo'>Email <div className='dospuntos0'>:</div></div>
                                                      <div className='dospuntos'>:</div>
                                                      <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                                                </div>
                                                
                                          
                                                <div className='escribir-datos-container'>
                                                      <div className='subtitulo'>Mensaje <div className='dospuntos0'>:</div></div>
                                                      <div className='dospuntos'>:</div>
                                                      <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required />
                                                </div>
                                    
                                                <button className='btn-submit' type="submit">Enviar</button>
                                          
                                    </div>

                              </div>
                          
                  </form>
                    
      </div>
    </>
  );
};

export default Card_9_formContac;