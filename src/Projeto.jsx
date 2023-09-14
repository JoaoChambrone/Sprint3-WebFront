import {} from 'react'
import Image from './assets/Logo-CH.png'
import imgcity from './assets/2196348.png'
function Projeto(){
  return(
    <>
      <main>
        <section className="secp1">
            <div className="titp">
                <h1>Quem Somos?</h1>
            </div>
            <div className="textp">
                <h3>
                    Somos um projeto que surgiu <br />a partir de um desafio proposto <br />pela IBM junto aos alunos da FIAP. <br />O Projeto tem como principal foco, <br />o tema de "Cidade Sustentável" 
                </h3>
                <img src={Image} alt="Logo" width={200} />
            </div>
        </section>
        <section className="secp1">
            <div className="titp">
                <h1>Qual o nosso projeto?</h1>
            </div>
            <div className="textp">
                <h3>
                    Na ElekSell, nossa missão é simplificar<br /> o processo de lidar com resíduos eletrônicos.<br /> Oferecemos soluções práticas para você:<br /> <br />Venda Seus Resíduos Eletrônicos: Transforme<br /> dispositivos antigos em dinheiro.<br /> Anuncie-os em nossa plataforma online<br /> e encontre compradores interessados.<br /> <br />Descarte Sustentável: Utilize nossos totens<br /> espalhados pela cidade para descartar<br /> corretamente seus dispositivos eletrônicos,<br /> contribuindo para um ambiente mais limpo.<br /><br /> Com a ElekSell, você pode dar um novo<br /> propósito aos seus dispositivos antigos<br /> ou garantir que sejam reciclados de <br />maneira responsável. É fácil, é consciente<br /> e é importante para o nosso planeta.
                </h3><br />
                <h1>Seja sustentável, seja</h1><br />
                <h1 id="titele">ELEKSELL</h1>
            </div>
        </section>
        <section className="secp1">
            <div className="titp">
                <h1>Qual o nosso objetivo?</h1>
            </div>
            <div className="textp">
                <h3>
                    As vezes as pessoas descartam seus<br /> resíduos, sem pensar duas vezes,<br /> e ainda de forma errada.<br /> O nosso maior objetivo, é conscientizar<br /> as pessoas, de que seus resíduos<br /> podem ter ainda algum valor, e podem <br />ser úteis para terceiros. Além disso<br /> temos também como objetivo, conscientizar<br /> as pessoas sobre o descarte<br /> correto desses resíduos. Desta <br />forma, teremos um cidade mais sustentável<br /> e inteligente.
                </h3>
                <img src={imgcity} alt="city" width={130} />
            </div>
        </section>
      </main>
    </>
  )
}
export default Projeto