import React from 'react'
import styled from 'styled-components'
import Logo from './imgs/logo.png'
import Corretora from './imgs/corretora.png'
import Font from './imgs/font.png'


class Publi extends React.Component {

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
            display: flex;
            position: relative;
            background-image: url(${Font});
            background-repeat: no-repeat;
            background-size: cover;
            }

            .ancora{
                margin-top: 250px;
                position: relative;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                padding: 20px 60px;
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
                width: 500px;
                height: 120px;
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
                background: #e8590c;
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
                background: #fff;
            }
            .ancora:hover::after{
                background: #333;
                color: red;
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
                .carta{
             position: relative;
             width: 680px;
             height: 450px;
             left: 31%;
             top: 50%;
             transform: translateY(-60%);
              box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
              border-radius: 15px;
              background: rgba(255,255,255,0.1);
              overflow: hidden;
              display: flex;
              justify-content: center;
              align-items: center;
              border-topo 1px solid rgba(255,255,255,0.5);
              border-lef: 1px solid rgba(255,255,255,0.5);
              backdrop-filter: blur(5px;)
            }
            .chatcontent{
             padding: 20px;
             text-align: center;
             transition: 0.5s;
            }

            .titulo{
                width: 600px;
                color: white;
                text-shadow: 
                -.5px -.5px 0px #fff, 
                -.5px .5px 0px #111,                    
                .5px -.5px 0px #111,                  
                .5px 0px 0px #fff;
                font-weight: 600;
            }
            .tituloDestaque{
                 text-shadow: 
                -.5px -.5px 0px #e8590c, 
                -.5px .5px 0px #333,                    
                .5px -.5px 0px #333,                  
                .5px 0px 0px #e8590c;
                color: rgb(323,89,12);
                font-weight: 800;
                font-size: 55px;
            }
            .subtitulo{
                width: 560px;
                color: white;
                text-shadow: 
                -.5px -.5px 0px #fff, 
                -.5px .5px 0px #111,                    
                .5px -.5px 0px #111,                  
                .5px 0px 0px #fff;
                margin-top: 30px;
                font-size: 30px;
                text-align: center;
                
                span{
                    font-size: 30px;
                    font-weight: 800;
                }
            }

            .titLogo{
                width: 150px;
                margin-bottom: 10px;
            }
        `

        const Overlay = styled.div`
            width: 100%;
            justify-content: center;
            align-items: center;
            background: rgba(232,89,12,0.45);
            
            
          
        `

           const Separator = styled.div`
           position: relative;
           display: flex;
           justify-self: center;
           align-self: center;
           margin-top: 25px;
           height: 5px;
           width: 1200px;
           background-color: #e8590c;
           `

        
        

        return (
            
                <Section id="CONTRATAR">
                    <Overlay style={{height: `${this.state.width > 500 ? this.state.height : 350}px`}}>
                                <div className='carta'>
                                    <div className='chatcontent'>
                                        <img className='titLogo' src={Logo} />
                                        <h1 className='tituloDestaque'>
                                            Delfhi Corretora
                                        </h1>
                                        <h3 className='subtitulo'>
                                            <span>O plano ideal para você,<br/> </span> sua família e sua empresa.
                                        </h3>
                                    </div>
                                </div>
                                <a className='ancora' href='#'><span className='spanBotao'>FALAR COM NOSSA CORRETORA</span></a>
                                
                    </Overlay>
                </Section>
        )
    }
}
export default Publi