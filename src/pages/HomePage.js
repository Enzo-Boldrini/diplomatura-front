import React from 'react'; 
import '../styles/HomePage.css';


const HomePage = (props) => {
    return (
        <main className='holder'>
            <div className='homeimg'>
                <img src='./img/home/home1.png' alt='marketing digital'/>                
            </div>

            <div className='columnas'>
                <div className='bienvenidos'>
                    <h2>Bienvenidos</h2>
                    <p>Somos una empresa enfocada en el posicionamiento web de negocios, mediante la implementación de
                    técnicas avanzadas de marketing digital.</p>
                    <p>La base para un sitio Web exitoso son principalmente los buenos contenidos y una usabilidad Web
                    adecuada, que es en esencia lo que desean los visitantes y, por consiguiente, los buscadores. Tratar
                    de engañar a los buscadores es algo que se debe evitar, ya que va a llevar a nuestro sitio Web al
                    fracaso y a la eliminación del mismo de los resultados de búsqueda. Por otra parte, el diseño Web es
                    muy importante, dado que se encuentra directamente relacionado con la primera impresión que tendrán
                    tus visitantes sobre tu empresa.</p>
                </div>
                <div className='testimonios'>
                    <h2>Testimonios</h2>
                    <div className='testimonio'>
                        <span className="cita">Excelente servicio</span>
                        <span className="autor"> Rubén Sanchez</span>

                    </div>

                </div>

            </div>

        </main>

    )
}
export default HomePage;