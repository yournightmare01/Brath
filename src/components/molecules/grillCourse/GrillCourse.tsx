import serving from '../../../assets/images/serving.jpg';

const GrillCourse = () => {
  return (
    <section className='grill-course'>
      <div className='grill-course__container fluid'>
        <div className='grill-course__content'>
          <div className='grill-course__text-container'>
            <div className='grill-course__text-container__title'>
              <h3>Buchen Sie den</h3>
              <h3>Grillkurs jetzt</h3>
            </div>
            <div className='bullet-paragraph'>
              <span className='grill-course__text-container__circle'></span>
              <p className='grill-course__text-container__paragraph'>
                professioneller Lehrer
              </p>
            </div>
            <div className='bullet-paragraph'>
              <span className='grill-course__text-container__circle'></span>
              <p className='grill-course__text-container__paragraph'>
                ausgezeichneter Metzger
              </p>
            </div>
            <div className='bullet-paragraph'>
              <span className='grill-course__text-container__circle'></span>
              <p className='grill-course__text-container__paragraph'>1 Tag</p>
            </div>
            <div className='bullet-paragraph'>
              <span className='grill-course__text-container__circle'></span>
              <p className='grill-course__text-container__paragraph'>
                lernen Sie die Kunst des Grillens
              </p>
            </div>
          </div>
        </div>
      </div>

      <img
        className='grill-course__image-container--image'
        src={serving}
        alt='servingMeal'
      />
    </section>
  );
};
export default GrillCourse;
