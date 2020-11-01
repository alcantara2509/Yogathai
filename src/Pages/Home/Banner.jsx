import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

export default class Banner extends React.Component {
  render() {
    return (
      <>
        <section className='content-banner'>
          <section className='container-one'>
            <section className='inner-container-one'>
              <h1>Yogathai</h1>
              <h3>por ciani marques</h3>
              <p>
                Nas dualidades da vida (bem e mal, luz e <br />
                escuridão, amor e ódio, céu e terra), existe algo <br />
                que une os dois extremos, tornando-os <br />
                complementares. <br /><br />
                Neste sentido, surgiu o Yogathai. Um estilo de vida <br />
                que te proporciona ferramentas para cuidar do seu <br />
                corpo, mente e espirito. <br />
              </p>
              <button><Link className='saiba-mais' to='/about'>Saber Mais</Link></button>
            </section>
          </section>
          <section className='container-two'>
            <h2 className='h2 h2-banner'>Bem vindos ao meu <br /> Universo particular!</h2>
          </section>
        </section>
      </>
    )
  }
}