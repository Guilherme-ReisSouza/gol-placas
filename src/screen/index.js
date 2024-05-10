import { useEffect, useState } from 'react';
import { ChatBox } from '../component/chat';
import HeaderSlider from '../component/header-slider';
import Footer from '../component/footer'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, } from 'mdb-react-ui-kit';
import '../index.css';

import { FaThumbsUp, FaUserShield, FaCar, FaBus, FaStar, FaCarSide, FaTruckMonster, FaMoneyBill, FaMedal } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import { FiCheckCircle } from "react-icons/fi";
import { BiSolidCarGarage, BiMessageSquareDetail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

import { useResponsiveMode } from '../controller/utils';
import NavBar from '../component/navbar';
import PlacasMercosul from '../img/placasMercosul.png';
import InitialBkg from '../img/initial-bkg.png';
import BkgBike from '../img/bkg-hero1.png';
import BkgCar from '../img/bkg-hero2.png';
import BkgTruck from '../img/bkg-hero3.png';
import { FaCircleInfo } from 'react-icons/fa6';


function Index() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const goToElement = (elementId) => {
        const element = document.getElementById(elementId);
        element.scrollIntoView();
    };

    const slides = [
        {
            bg: InitialBkg, title: `Placas padrão
mercosul!`, cta_text: '', cta_url: '', cta_url_class: ''
        }, {
            bg: BkgBike, title: `Nova tecnologia
de QR Code`, cta_text: '', cta_url: '', cta_url_class: ''
        }, {
            bg: BkgCar, title: `Todas 
as cores e 
significados!`, cta_text: '', cta_url: '', cta_url_class: ''
        }, {
            bg: BkgTruck, title: `Qualidade 
e a segurança 
que você merece.`, cta_text: '', cta_url: '', cta_url_class: ''
        },
    ];


    const isMobile = useResponsiveMode();
    const [view, setView] = useState('home');

    return (
        <>
            {view === 'home' ?
                <div>
                    <NavBar />
                    <MDBContainer id='home' fluid className="headerContainer">
                        <HeaderSlider slides={slides} id='slider' />
                        {!isMobile && (<div id='ia-assist' className='chatbox-container'> <ChatBox setView={setView} /> </div>)}
                    </MDBContainer>
                    <MDBContainer fluid className='bg-default'>
                        <MDBRow className='justify-content-center align-items-center'>
                            <MDBCol md={8} className='container-about-section'>
                                <p>A <span>Gol Placas ABC</span> é especializados na fabricação e personalização de 
                                placas do Mercosul com alta qualidade e precisão. Aqui estão alguns serviços de placas que realizamos:</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <MDBContainer>
                        <div className='circles-holder'>
                            <MDBRow style={{ textAlign: 'center' }} className='justify-content-center align-items-center'>
                                <MDBCol>
                                    <span className='icon-span mt-3 mb-3'>
                                        <FaCar size={'3rem'} color='#f5f5f5' />
                                    </span>
                                    <h4>Particulares</h4>
                                </MDBCol>
                                <MDBCol>
                                    <span className='icon-span mt-3 mb-3'>
                                        <FaBus size={'3rem'} color='#f5f5f5' />
                                    </span>
                                    <h4>Comerciais</h4>
                                </MDBCol>
                                <MDBCol>
                                    <span className='icon-span mt-3 mb-3'>
                                        <FaStar size={'3rem'} color='#f5f5f5' />
                                    </span>
                                    <h4>Especiais</h4>
                                </MDBCol>
                                <MDBCol>
                                    <span className='icon-span mt-3 mb-3'>
                                        <FaCarSide size={'3rem'} color='#f5f5f5' />
                                    </span>
                                    <h4>Oficiais</h4>
                                </MDBCol>
                                <MDBCol>
                                    <span className='icon-span mt-3 mb-3'>
                                        <BiSolidCarGarage size={'3rem'} color='#f5f5f5' />
                                    </span>
                                    <h4>Diplomaticas</h4>
                                </MDBCol>
                                <MDBCol>
                                    <span className='icon-span mt-3 mb-3'>
                                        <GiCarWheel size={'3rem'} color='#f5f5f5' />
                                    </span>
                                    <h4>Colecionador</h4>
                                </MDBCol>
                                <MDBCol>
                                    <span className='icon-span mt-3 mb-3'>
                                        <FaTruckMonster size={'3rem'} color='#f5f5f5' />
                                    </span>
                                    <h4>Pretas</h4>
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </MDBContainer>
                    <MDBContainer id='vantagens' fluid className='vantagens-container'>
                        <MDBRow className='justify-content-center align-items-center'>
                            <MDBCol md={6}>
                                <h1 className='vantagens-title'>
                                    <span>Vantagens</span> da <span>Gol Placas ABC</span>
                                </h1>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className='cardsHolder justify-content-center align-items-center'>
                            <MDBCol md='6'>
                                <MDBCard className='cardsProtec'>
                                    <MDBCardBody>
                                        <div className='icon-services-container'><FaMedal style={{ width: '100%', height: '100%', padding: '10px', color: '#ff6900' }} /></div>
                                        <h3>
                                            Qualidade superior
                                        </h3>
                                        <p>
                                            Utilizamos materiais de alta qualidade e tecnologia de ponta para garantir
                                             que nossas placas sejam duráveis, legíveis e estejam em conformidade com 
                                             todas as regulamentações locais.
                                        </p>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBCard className='cardsProtec'>
                                    <MDBCardBody>
                                        <div className='icon-services-container'><FiCheckCircle style={{ width: '100%', height: '100%', padding: '10px', color: '#ff6900' }} /></div>
                                        <h3>
                                            Personalização
                                        </h3>
                                        <p>
                                            Oferecemos uma ampla gama de opções de personalização para atender 
                                            às suas necessidades e preferências. Seja uma placa personalizada 
                                            para uso particular ou para uma frota de veículos comerciais, podemos 
                                            atender às suas especificações.
                                        </p>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBCard className='cardsProtec'>
                                    <MDBCardBody>
                                        <div className='icon-services-container'><FaThumbsUp style={{ width: '100%', height: '100%', padding: '10px', color: '#ff6900' }} /></div>
                                        <h3>
                                            Atendimento ao cliente excepcional
                                        </h3>
                                        <p>
                                            Nosso compromisso com a satisfação do cliente é incomparável. 
                                            Estamos sempre disponíveis para responder a perguntas, 
                                            fornecer assistência e garantir que você tenha uma experiência 
                                            tranquila ao adquirir suas placas conosco.
                                        </p>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBCard className='cardsProtec'>
                                    <MDBCardBody>
                                        <div className='icon-services-container'><FaMoneyBill style={{ width: '100%', height: '100%', padding: '10px', color: '#ff6900' }} /></div>
                                        <h3>
                                            Preços competitivos
                                        </h3>
                                        <p>
                                            Apesar da nossa qualidade superior e serviços personalizados, mantemos preços
                                             competitivos em relação ao mercado. Valorizamos a transparência em nossas 
                                             transações e buscamos oferecer a melhor relação custo-benefício para nossos 
                                             clientes.
                                        </p>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBCard className='cardsProtec'>
                                    <MDBCardBody>
                                        <div className='icon-services-container'><FaUserShield style={{ width: '100%', height: '100%', padding: '10px', color: '#ff6900' }} /></div>
                                        <h3>
                                            Confiabilidade e pontualidade
                                        </h3>
                                        <p>
                                            Cumprimos rigorosamente prazos de entrega e garantimos a confiabilidade
                                             de nossos produtos. Você pode confiar na Gol Placas ABC para fornecer 
                                             suas placas do Mercosul dentro do prazo e conforme o combinado.
                                        </p>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md='7' className='justify-content-center align-items-center py-4 d-flex'>
                                <button id='btn-cta-cotacao_vantagens' onClick={() => goToElement('contato')} className='contactBtn vantagens'>Solicite sua cotação</button>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <MDBContainer>
                        <MDBRow className='placas-mercosul justify-content-center align-items-center'>
                            <MDBCol md={6}>
                                <img src={PlacasMercosul} alt='Placas Mercosul' id='img_reclame_aqui' />
                            </MDBCol>
                            <MDBCol md={5}>
                                <h4>Transformando Identidade em Estilo</h4>
                                <p>Na Gol Placas, nossa missão vai além de simplesmente fabricar placas Mercosul. 
                                Somos os guardiões da identidade veicular, a ponte entre o carro e sua história. 
                                Desde nossa fundação, buscamos não apenas cumprir as regulamentações exigidas, 
                                mas também elevar o padrão estético e funcional das placas automotivas!</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <MDBContainer fluid className='contato-container' id='contato'>
                        <MDBRow className='justify-content-center align-items-center'>
                            <MDBCol md={4} className='text-center contact-col'>
                                <div className='contact-container'>
                                    <span className='contact-icon'><BiMessageSquareDetail /></span>
                                    <h4>Entre em contato agora mesmo!</h4>

                                    <a href='https://wa.me/5511963117696?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Gol%20Placas%20ABC'>
                                        <button className="contactBtn whatsapp">
                                            <span>Entre em contato!</span>
                                            (11) 9 6311-7696
                                        </button>
                                    </a>
                                    <button id='btn-cta-cotacao' onClick={() => goToElement('contato')} className='contactBtn'>Clique aqui e faça sua cotação!</button>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                    <Footer />
                    <a id='whatsappFloat' href="https://wa.me/5511963117696?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Gol%20Placas%20ABC" rel="noreferrer" class="whatsapp-float hover-shadow" target="_blank">
                        <FaWhatsapp />
                    </a>
                    {isMobile && (
                        <span id='upflow-float' onClick={() => setView('chat')} rel="noreferrer" class="upflow-float hover-shadow" target="_blank">
                            <FaCircleInfo size={'3rem'} color='#ff6900' />
                        </span>)
                    }
                </div>
                :
                <div>
                    <ChatBox setView={setView} />
                </div>
            }
        </>
    )
}

export default Index;