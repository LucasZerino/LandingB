import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Bg from './imgs/bg.png'


class Hero extends React.Component {

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
            background-image: url(${this.props.background.childImageSharp.fluid.src});
            background-size: cover;
            background-repeat: no-repeat;
            @media (max-width:500px) {
                background-image: url(${Bg})
            }
        `

        const Overlay = styled.div`
            width: 100%;
            display: flex;
            align-items: center;
            background: rgba(232,89,12,0.25);
        `

        const Heading1 = styled.h1`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Teko:wght@300&display=swap');
            margin-top: 750px;
            font-size: 60px;
            font-family: Teko;
            line-height: 70px;
            color: #FFF;
            text-shadow: 
            -1px -1px 0px #e8590c, 
            -1px 1px 0px #e8590c,                    
            1px -1px 0px #e8590c,                  
            1px 0px 0px #e8590c;
            font-weight: 400;
            text-transform: uppercase;
            
            @media (max-width:1700px) { 
                margin-top: 750px;
            }
            @media (max-width:767px) {
                font-size: 30px;
                line-height: 20px;
            }
            @media (max-width:500px) {
                position: relative;
                margin-top: 300px;
                left: 50%;
                transform: translateX(-50%);
                width: 400px;
                font-size: 25px;
            }
        `

        const Heading2 = styled.h2`
            font-size: 40px;
            color: #fff;
            font-weight: 800;
            text-transform: uppercase;
            background: #fff;
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
            @media (max-width:1700px) { 
                font-size: 30px;
            }
            @media (max-width:1400px) {
                font-size: 25px;
            }
            @media (max-width:1250px) {
                font-size: 20px;
            }
            @media (max-width:500px) {
                position: relative;
                margin-top: 10px;
                left: 50%;
                transform: translateX(-50%);
                width: 400px;
                font-size: 15px;
            }
        `

        const Type = styled.div`
            position: relative;
            font-size: 50px;
            line-height: 50px;
            color: black;
            text-transform: uppercase;
            @media (max-width:1600px) { 
                font-size: 40px;
            }
            @media (min-width:768px) and (max-width:1500px) {
        
            }
            @media (max-width:600px) {
                font-size: 20px;
            }
            span {
                font-family: Teko;
            }
        `
        const Content = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: rgba(232,89,12,0.45);
            width: 100%;
            height: 100%;
            .ancora{
                margin-top: 150px;
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
             margin-left: 150px;
             top: 50%;
             transform: translateY(-80%);
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
                font-size: 20px;
                text-align: center;
                
                span{
                    font-size: 24px;
                    font-weight: 800;
                }
            }
            .simular{
                margin-top: 150px;
                position: relative;
                width: 300px;
                height: 100px;
                font-size: 20px;
                justify-self: center;
                align-self: center;
            }
           `

      
        function Simular(){
            var obj = document.getElementById('SIMULAR').scrollIntoView();
        }
        
        

        return (
            
                <Section id="HOME">
                    <Overlay style={{height: `${this.state.width > 500 ? this.state.height : 350}px`}}>
                        
                            <Content>
                                <div className='carta'>
                                    <div className='chatcontent'>
                                        <h1 className='titulo'>
                                            Os planos de Saúde com as<br/>
                                            <span className='tituloDestaque'>melhores coberturas </span>
                                            do 
                                            <span className='tituloDestaque'> Rio <br/> Grande do Norte </span>
                                            e Nacional
                                        </h1>
                                        <h3 className='subtitulo'>
                                            <span>Compare os Planos e contrate agora mesmo. </span> Mantenha sua família assistida pelas
                                            melhores estruturas hospitalares, clínicas e laboratórios do Rio Grande do Norte e em
                                            todo país.
                                        </h3>
                                    </div>
                                </div>
                                <a className='ancora' href='#'><span className='spanBotao'>SOLICITAR COTAÇÃO</span></a>
                                
                            </Content>
                  
                    </Overlay>
                </Section>
        )
    }
}
export default props => (
    <StaticQuery
      query={graphql`
      query {
        background: file(relativePath: {eq: "background-poly.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              src
            }
          }
        }
        webexpertIcon: file(relativePath: {eq: "icons/web.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        mobileIcon: file(relativePath: {eq: "icons/mobile.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        seoIcon: file(relativePath: {eq: "icons/seo.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
      }
      `}
      render={({ 
        background, 
        webexpertIcon, 
        mobileIcon, 
        seoIcon}) => <Hero  
        background={background} 
        webexpertIcon={webexpertIcon} 
        mobileIcon={mobileIcon} 
        seoIcon={seoIcon}
        {...props} />}
    />
  )