import {} from 'react'
import Image from './assets/Logo-CH.png'
import Image2 from './assets/contexto-urbano-da-cidade-para-videoconferencia_23-2148654413.avif'

function Home(){
  return(
    <>
    <main>
    <section className='sech2'>
        <div className="imggradient">
            <img className="image2" src={Image2} alt="Imagem"/>
            <div className="gradient-mask"></div>
            <h1>Em busca de uma cidade mais sustentável.</h1>
        </div>
      </section>
      <section className='sech1'>
        <h1>SEJA BEM-VINDO À ELEKSELL, UM NOVO PASSO PARA A SUSTENTABILIDADE.</h1>
        <div className="imageelek">
            <img src={Image} alt="logo" />
        </div>
      </section>

    </main>
    </>
  )
}

export default Home