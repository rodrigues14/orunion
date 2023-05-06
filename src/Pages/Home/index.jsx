import Card from '../../components/Card'
import Header from '../../components/Header'
import cards from '../../components/Card/data.json';
import { CardsContainer, SlideStyled } from './Home.style';
import DogSlide from './Slides/DogSlide';


import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Container } from '../../components/UI';

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
          <SwiperSlide>
            <DogSlide />
          </SwiperSlide>
          <SwiperSlide>
            <DogSlide />
          </SwiperSlide>
        </Swiper>
      </SlideStyled>


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