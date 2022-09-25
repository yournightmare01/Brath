import { EffectCoverflow } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import 'swiper/css/bundle';

import TestimonialCard from '../../atoms/testimonialCard/TestimonialCard';
import Button from '../../atoms/button/Button';

const Testimonials = () => {
  const description1 =
    'Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim Stuttgart.';
  const description2 =
    'Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna  Luftballons Ut Turnbeutel nostrud exercitation ullamco.';
  const description3 =
    'Achtung fur atine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior.';

  const author1 = 'Maria Kartofeln';
  const author2 = 'Halling Tobias';
  const author3 = 'Rene Weinstein';

  return (
    <section className='testimonials'>
      <div className='testimonials__container fluid'>
        <div className='testimonials__heading'>
          <p className='paragraph'>Empfehlungs</p>
          <h1 className='title--large'>Was die Leute über uns sagen</h1>
        </div>

        <div style={{ width: '100%', overflow: 'hidden' }}>
          <Swiper
            effect={'coverflow'}
            loop={true}
            speed={800}
            grabCursor={true}
            spaceBetween={55}
            centeredSlides={true}
            initialSlide={1}
            slidesPerView={2}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            navigation={true}
            pagination={false}
            modules={[EffectCoverflow, Navigation]}
            className='mySwiper'
          >
            <SwiperSlide>
              <TestimonialCard description={description1} author={author1} />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard description={description2} author={author2} />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard description={description3} author={author3} />
            </SwiperSlide>
          </Swiper>
        </div>
        <Button className='btn-primary' label='Alle Berichte' />
      </div>
    </section>
  );
};
export default Testimonials;
