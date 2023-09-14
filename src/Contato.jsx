import {} from 'react'
import zap from "./assets/5a4e2ef62da5ad73df7efe6e.png"
import insta from "./assets/Instagram-logo-glyph-black-white-large-png.png"
import xtwi from "./assets/logo-black.png.twimg.1920.png"
import telefone from "./assets/0efb5115510a56029156427c31d1c6b5.png"

function Contato(){
  return(
    <>
      <main>
          <h1 id="ecomti">Entre em contato conosco!</h1>
          <section className="container">
            <div className='contato'>
                <h1>Entre em contato conosco via:</h1>
                <h2>Whatsapp</h2>
                <a href="#"><img src={zap} alt="erro" width={200} /></a>
                <h2>Instagram</h2>
                <a href="#"><img src={insta} alt="erro" width={200} /></a>
                <h2>X</h2>
                <a href="#"><img src={xtwi} alt="erro" width={200} /></a>
                <h2>ou nos ligue!</h2>
                <a href="#"><img src={telefone} alt="erro" width={200} /></a>
            </div>
          </section>
      </main>
    </>
  )
}
export default Contato