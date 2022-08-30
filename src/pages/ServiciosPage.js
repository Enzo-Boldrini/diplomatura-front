import React from 'react'; 
import '../styles/ServiciosPage.css';


const ServiciosPage = (props) => {
    return (
        <main className="holder">
        <h2>Servicios</h2>
        <div className="servicio">
            <img src="./img/servicios/img01.jpg" alt="Analisis de datos"/>
            <div className="info">
                <h4>Análisis de datos</h4>
                <p>El análisis de datos en el marketing digital implica varias actividades de investigación que revelan
                    información clave sobre lo que es más importante para el público al que se intenta llegar, de la
                    misma manera que lo hace Google.
                </p>
            </div>

        </div>
        <div className="servicio">
            <img src="./img/servicios/img02.jpg" alt="Redes sociales"/>
            <div className="info">
                <h4>Redes Sociales</h4>
                <p>Estar presente en las redes sociales es una de las mejores formas de entrar en contacto con
                    potenciales y actuales clientes, y cuidar asi su reputación on line.
                    Lo ayudamos a diseñar y planificar una estrategia de Redes Sociales y a ejecutar acciones en los
                    medios sociales más importantes acordes a su industria y modelo de negocio.</p>
            </div>

        </div>
        <div className="servicio">
            <img src="./img/servicios/img03.jpg" alt="Diseño web"/>
            <div className="info">
                <h4>Diseño Web</h4>
                <p>La combinación adecuada entre estética, funcionalidad, usabilidad y visibilidad en buscadores es lo
                    que nos diferencia. Por lo tanto, sabemos como hacer un diseño web atractivo, fácil de usar e
                    intuitivo para sus clientes. Asimismo, que se adapte a los dispositivos móviles, que genere buenos
                    resultados y que a la vez este optimizado para los motores de búsqueda. También ofrecemos servicios
                    de diseño de piezas gráficas de todo tipo.
                </p>
            </div>

        </div>
        <div className="servicio">
            <img src="./img/servicios/img04.jpg" alt="Estrategia digital"/>
            <div className="info">
                <h4>Estrategia Digital</h4>
                <p>Analizamos su empresa, clientes, mercado y competidores para definir en conjunto un plan estratégico
                    integral de acciones que nos permita alcanzar los objetivos planteados. Ya sea potenciar su
                    presencia de marca en Internet, desarrollar aún más su negocio incorporando servicios de marketing
                    digital o incorporar las nuevas tendencias del mundo digital.</p>
            </div>

        </div>


    </main>
    );
}
export default ServiciosPage;