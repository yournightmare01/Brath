import hero from '../../../assets/images/hero.jpg';
import hero2 from '../../../assets/images/slika.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Parallax, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Hero = () => {
  return (
    <section className='hero-section'>
      <>
        <Swiper
          speed={800}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className='mySwiper2'
        >
          <div
            slot='container-start'
            className='parallax-bg'
            data-swiper-parallax='-23%'
          ></div>
          <SwiperSlide>
            <img src={hero} alt='hero1'></img>
            <div className='title' data-swiper-parallax='-300'>
              <div className='hero-section__about'>
                <h1>Heiko Brath Metzgermeister</h1>
                <p className='paragraph'>
                  Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et.
                  Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per
                  ne, nam Aperol Spritz probatus pertinax.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero2} alt='hero2'></img>
            <div className='title' data-swiper-parallax='-300'>
              <div className='hero-section__about'>
                <h1>Heiko Brath Metzgermeister</h1>
                <p className='paragraph'>
                  Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et.
                  Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per
                  ne, nam Aperol Spritz probatus pertinax.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </section>
  );
};
export default Hero;
