import React from 'react'
import styled from 'styled-components'
import Hospitais from './imgs/hospital.png'
import Clinicas from './imgs/clinicas.png'
import Laboratorios from './imgs/laboratorios.png'
import Amil from './imgs/amil.png'
import Bradesco from './imgs/bradesco.png'
import Delfhi from './imgs/delfhi.png'
import Humana from './imgs/humana.png'
import Sulamerica from  './imgs/sulamerica.png'
import Unimed from './imgs/unimed.png'
import Hapvida from './imgs/hapvida.png'



class Descricao extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            width: 0
        }
    }

    updateDimensions = () => {
        if (this.state.height !== window.innerHeight) {
            this.setState({height: window.innerHeight})
        }
        if (this.state.width !== window.innerWidth) {
            this.setState({width: window.innerWidth})
        }
    }

    
    componentDidMount() {
        this.setState({height: window.innerHeight, width: window.innerWidth})
        window.addEventListener('resize', this.updateDimensions)
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }

    render() {

        const Section = styled.section`
        
            position: relative;
            .particles {
                position: absolute;
                width: 100%;
                height: 100%;
            }
            }
        `

        const Overlay = styled.div`
            width: 100%;
            display: flex;
            flex-direction: column;
            .superior{
                display: flex;
                flex-direction: column;
                position: relative;
                background: #FEF0E1;
                width: 100%;
                height: 50%;
                align-items: center;
                h1{
                    margin-top: 25px;
                    text-align: center;
                }
            }
            .superior .titulo{
                color: #fff;
                text-shadow: 
                -.5px -.5px 0px #999, 
                -.5px .5px 0px #777,                    
                .5px -.5px 0px #777,                  
                .5px 0px 0px #999;
                font-weight: 600;
            }
            .superior .tituloDestaque{
                color: #e8590c;
                text-shadow: 
                -.5px -.5px 0px #e8590c, 
                -.5px .5px 0px #fff,                    
                .5px -.5px 0px #fff,                  
                .5px 0px 0px #e8590c;
                font-weight: 800;
            }
             .inferior{
              width: 100%;
              height: 50%;
                 background: #FF8D30;
;
             }
             .top{
                 display: flex;
                 align-self: center;
                 justify-content: center;
                 align-items: center;
                 gap: 30px;
                 
             }
            .servicoInfo{
                margin-top: 30px;
                height:100%;
                margin-left: 30px;
                margin-right: 30px;
                text-align: center;
                font-size: 25px;
            }
            .icon{
                width: 100px;
            }




            .inferior{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                h1{
                    color: #fff;
                    font-weight: 600;
                    font-size: 50px
                }
                
                p{
                    color: #333;
                    font-weight: 600;
                    font-size: 35px;
                }
            .todosPlanos{
                display: flex;
                margin-right: 30px;
                margin-left: 30px;
                align-items: center;
                justify-content: center;
                gap: 30px;
                align-items: center;
            }
            .ancora{
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                background: rgba(0,0,0,0.5);
                overflow: hidden;
                text-decoration: none;
                letter-spacing: 1px;
                color: white;
                text-align: center;
                font-weight: 400;
                width: 200px;
                height: 200px;
                transition: 1s;
                -webkit-box-reflect: below 1px linear-gradient(tranparent, #0004);
            }
            .ancora:hover{
                background: #e8590c;
                box-shadow: 0 0 10px #e8590c;
                0 0 30px #e8590c;
                0 0 60px #e8590c;
                0 0 100px #e8590c;
            }
            .ancora::before{
                content: '';
                position: absolute;
                width: 40px;
                height: 500%;
                background: #e8590c;;
                transition: 1s;
                animation: animate 2s linear infinite;
            }
            .ancora:hover::before{
                width: 100%;
            }

            .ancora::after{
                content: '';
                position: absolute;
                inset: 4px;
                background-position: center;
                background-size: cover;
            }

            .ancora:nth-child(1)::after{
                background-image: url(${Unimed});
            }

            .ancora:nth-child(2)::after{
                background-image: url(${Humana});
            }
            
            .ancora:nth-child(3)::after{
                background-image: url(${Sulamerica});
            }

            .ancora:nth-child(4)::after{
                background-image: url(${Amil});
            }

            .ancora:nth-child(5)::after{
                background-image: url(${Delfhi});
            }

            .ancora:nth-child(6)::after{
                background-image: url(${Hapvida});
            }

            .ancora:nth-child(7)::after{
                background-image: url(${Bradesco});
                animation-delay: 0.2s;
            }

            .spanBotao{
                position: relative;
                z-index: 1;
                font-size: 1.5em;
                opacity: 0.8;
                text-transform: uppercase;
                letter-spacing: 4px;
                transition: 0.5s;
                color: #e8590c;
            }


            .ancora:hover .spanBotao{
                z-index: 1;
                font-size: 1.5em;
                opacity: 1;
                color: #e8590c;
            }

            

            @keyframes animate {
                0%{
                    transform: rotate(0deg);
                }
                100%{transform rotate(360deg);}
            }
        }

            .plano{
                width: 200px;
                height: 200px;
            }



            .conteiner{
                margin-top: -40px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                padding: 40px 0;
            }

            .conteiner .box{
                position: relative;
                width: 320px;
                height: 250px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 40px 30px;
                transition: 0.5s;
            }

            .conteiner .box::before{
                content: '';
                position: absolute;
                top: 0;
                left: 50px;
                width: 50%;
                height: 100%;
                background: red;
                border-radius: 9px;
                transform: skeW(15deg);
                transition: 0.5s;
            }

            .conteiner .box::after{
                content: '';
                position: absolute;
                top: 0;
                left: 50px;
                width: 50%;
                height: 100%;
                background: red;
                border-radius: 9px;
                transform: skeW(15deg);
                transition: 0.5s;
                filter: blur(30px);
                transition: 0.5s;
            }

            .conteiner .box:hover:before,
            .conteiner .box:hover:after{
                transform: skeW(0deg);
                left: 20px;
                width: calc(100% - 90px);
            }

            .conteiner .box:nth-child(1):before,
            .conteiner .box:nth-child(1):after{
                background: linear-gradient(315deg, #e8590c, #ffbc00)
            }
            .conteiner .box:nth-child(2):before,
            .conteiner .box:nth-child(2):after{
                background: linear-gradient(315deg, #e8590c, blue)
            }
            .conteiner .box:nth-child(3):before,
            .conteiner .box:nth-child(3):after{
                background: linear-gradient(315deg, #e8590c, #09EBAB)
            }

            .conteiner .box span{
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 50;
                pointer-events: none;
            }

            .conteiner .box span::before{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: 8px;
                background: rgba(255,255,255,0.1);
                backdrop-filter: blur(10px);
                opacity: 0;
                transition: 0.5s;
                animation: animated 2s ease-in-out infinite;
                box-shadow: 0 5px 15px rgba(0,0,0,0.5);
            }

            .conteiner .box:hover span::before{
                top: -50px;
                left: 10px;
                width: 70px;
                height: 70px;
                opacity: 1;
            }

            .conteiner .box span::after{
                content: '';
                position: absolute;
                bottom: 0;
                right: 0;
                width: 100%;
                height: 100%;
                border-radius: 8px;
                background: rgba(255,255,255,0.1);
                backdrop-filter: blur(10px);
                opacity: 0;
                transition: 0.5s;
                animation: animated 2s ease-in-out infinite;
                box-shadow: 0 5px 15px rgba(0,0,0,0.5);
                animation-delay: -1s;
            }

            .conteiner .box:hover span::after{
                bottom: -50px;
                right: 50px;
                width: 70px;
                height: 70px;
                opacity: 1;
            }


            .conteiner .box .content{
                display: flex;
                height: 90%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                position: relative;
                left: 0;
                padding: 20px 40px;
                background: rgba(255,255,255,0.05);
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                border-radius: 8px;
                backgdrop-filter: blur(10px);
                z-index: 1;
                transition: 0.5s;
                color: #fff;
            }

            .conteiner .box:hover .content{
                left: -25px;
                padding: 60px 40px;
            }

            .conteiner .box .content h2{
                font-size: 2em;
                font-weight: 600;
                color: #fff;
                text-shadow: 
                -.5px -.5px 0px #999, 
                -.5px .5px 0px #777,                    
                .5px -.5px 0px #777,                  
                .5px 0px 0px #999;
                margin-bottom: 10px;
            }


            .conteiner .box .content p{
                text-align: center;
                font-size: 1.1em;
                color: #fff;
                text-shadow: 
                -.5px -.5px 0px #fff, 
                -.5px .5px 0px #111,                    
                .5px -.5px 0px #111,                  
                .5px 0px 0px #fff;
                font-weight: 600;
                margin-bottom: 10px;
                line-height: 1.4em;
            }

            .top{
                display: flex;
            }

            @keyframes animated
            {
                0%{
                    transform: translateY(10px);
                }
                50%{
                    transform: translateY(-10px);
                }
            }

            .imgContent{
                width: 70px;
                margin-top: 5px;
            }
           
        `

           const Separator = styled.div`
           position: relative;
           left: 50%;
           transform: translateX(-50%);
           margin-top: 25px;
           height: 5px;
           width: 800px;
           background-color: #e8590c;
           `

        
        

        return (
            
                <Section id="PLANOS">
                    <Overlay style={{height: `${this.state.width > 500 ? this.state.height : 350}px`}}>
                        <div  className='superior'>
                            <h1 className='titulo'>Os
                                <span className='tituloDestaque'> melhores Planos de Saúde </span>
                            do Rio Grande<br/> do Norte você encontra na 
                                <span className='tituloDestaque'> Delfhi Corretora</span>
                                <Separator/>
                             </h1>
                             <div className='conteiner'>
                                <div className='box'>
                                    <span></span>
                                    <div className='content'>
                                            <img className='imgContent' src={Hospitais} />
                                            <h2>Hospitais</h2>
                                        <p>Os principais hospitais da região e nacional,
                                             com infraestrutura moderna e qualificada.
                                        </p>
                                    </div>
                                </div>
                                <div className='box'>
                                    <span></span>
                                    <div className='content'>
                                        <img className='imgContent' src={Laboratorios}/>
                                        <h2>Laboratórios</h2>
                                        <p>As maiores redes de laboratórios, 
                                            com tecnologia moderna e agilidade nos resultados.
                                        </p>
                                    </div>
                                </div>
                                <div className='box'>
                                    <span></span>
                                    <div className='content'>
                                        <img className='imgContent' src={Clinicas} />
                                        <h2>Clínicas</h2>
                                        <p>Redes de clínicas especializadas com
                                            atendimento focado em excelência.
                                        </p>
                                    </div>
                                </div>
                             </div>
                        </div>


                        <div className='inferior'>
                            <h1> Os melhores planos estão aqui </h1>
                            <p>Compare e contrate </p>
                            <div className='todosPlanos'>
                            <a className='ancora' href='#'><span className='spanBotao'></span></a>
                            <a className='ancora' href='#'><span className='spanBotao'></span></a>
                            <a className='ancora' href='#'><span className='spanBotao'></span></a>
                            <a className='ancora' href='#'><span className='spanBotao'></span></a>
                            <a className='ancora' href='#'><span className='spanBotao'></span></a>
                            <a className='ancora' href='#'><span className='spanBotao'></span></a>
                            <a className='ancora' href='#'><span className='spanBotao'></span></a>
                            </div>
                        </div>
                    </Overlay>
                </Section>
        )
    }
}
export default Descricao