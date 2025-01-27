export class Articles extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = `
        <div class="publish-section">
        <h1>Publicaciones recientes</h1>
        <div class="card-container">
            <div class="card">
                <img src="./assets/fun.JPG" alt="Origami on colored paper">
                <div class="card-content">
                    <h2><a href="#">BODAS</a></h2> 
                    <p>Las bodas son momentos únicos que merecen ser capturados con la mayor delicadeza y arte. En ESTUDIO D, nos especializamos en inmortalizar cada detalle y emoción de tu día especial, asegurando que cada recuerdo sea eterno y perfecto.</p> 
                </div>
            </div>
            <div class="card">
                <img src="./assets/flower.jpg" alt="Origami on colored paper" id="ia">
                <div class="card-content">
                    <h2><a href="#">SESIONES FOTOGRÁFICAS</a></h2> 
                    <p>Las sesiones fotográficas personalizadas de <strong>ESTUDIO D</strong> están diseñadas para capturar la esencia y la belleza de cada momento. Ya sea para individuos, parejas, familias o equipos de trabajo, nuestras sesiones se adaptan a tus necesidades específicas, asegurando resultados únicos y memorables.</p> 
                </div>
            </div>
            <div class="card">
                <img src="./assets/articleinter.jpg" alt="Robot and technology visualization">
                <div class="card-content">
                    <h2><a href="#">FOTOGRAFÍA PUBLICITARIA</a></h2> 
                    <p>La fotografía publicitaria de <strong>ESTUDIO D</strong> está diseñada para resaltar las características únicas y atractivas de tus productos y servicios. Nuestro objetivo es crear imágenes impactantes que capturen la atención de tu audiencia y potencien tu estrategia de marketing.</p> 
                </div>
            </div>
        </div>

    </div>
        `;
        this.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('app-articles', Articles);