import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import { Container } from '../../components/UI';
import Card from '../../components/Card'
import Header from '../../components/Header'
import Slide from '../../components/Slide';
import { CardsContainer, SlideStyled } from './Home.style';

import cards from '../../components/Card/cardsData.json';
import slideData from '../../components/Slide/slideData.json';


function Home() {
  return (
    <Container>
      <Header />

      

      <SlideStyled>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {/* Aqui os slides definidos no slideData.json serão renderizados automaticamente */} 
          {slideData.map(currentSlide => (
            <SwiperSlide key={currentSlide.id}>
              <Slide 
                cause={currentSlide.cause}
                title={currentSlide.title}
                description={currentSlide.description}
                amountRequired={currentSlide.amountRequired}
                amountCollected={currentSlide.amountCollected}
                srcImage={currentSlide.srcImage}
                altImage={currentSlide.altImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SlideStyled>

      {/* Aqui os cards definidos no cardsData.json serão renderizados automaticamente */}
      <CardsContainer>
        {cards.map((item) => (
          <Card
            alt={item.alt}
            src={item.src}
            texto={item.texto}
            titulo={item.titulo}
            key={item.id}
          />
        ))}
      </CardsContainer>
    </Container>
  )
}

export default Home