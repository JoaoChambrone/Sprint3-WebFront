import {} from 'react'
import imgh from './assets/Imagem1.png'
import imgh2 from './assets/Imagem2.png'
import imgcp from './assets/Imagem10.png'
import imgcp2 from './assets/Imagem11.png'
import imgcd from './assets/Imagem13.jpg'
import imglo from './assets/Imagem12.jpg'


function ECommerce(){
  return(
    <>
    <main>
     <h1 id="ecomti">Conheça o nosso E-Commerce!</h1>
     <section className='secec'>
        <div className='divse'>
           <h2>Seção Home</h2>
           <img src={imgh} alt="img1" width={400}/>
           <img src={imgh2} alt="img2" width={400}/>
        </div>
        <div className="divse">
          <h2>Seção Categorias e Produtos</h2>
          <img src={imgcp} alt="img3" width={450} height={100}/>
          <img src={imgcp2} alt="img4" width={450}/>
        </div>
     </section>
     <section className='secec'>
        <div className='divse'>
           <h2>Seção Cadastro</h2>
           <img id='imgsolo' src={imgcd} alt="img5" width={480}/>
        </div>
        <div className="divse">
          <h2>Seção Login</h2>
          <img id='imgsolo' src={imglo} alt="img6" width={480}/>
        </div>
     </section>
     <aside>
        <h1>Ficou muito mais fácil ser sustentável! venha para a <a href="#">ELEKSELL E-COMMERCE</a></h1>
     </aside>
    </main>
    </>
  )
}
export default ECommerce