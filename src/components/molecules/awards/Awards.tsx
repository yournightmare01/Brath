import { AwardIcon } from '../../atoms/icons/award/AwardIcon';

const Awards = () => {
  return (
    <section className='awards'>
      <div className='awards__container fluid'>
        <div className='awards__logo-top logo-secondary'></div>
        <div className='awards__content'>
          <h2>Auszeichnungen</h2>
        </div>
        <div className='awards__cards-container'>
          <div className='awards__cards-container__wrapper'>
            <div className='award-card'>
              <AwardIcon name='award1' />
              <p className='award-card__description'>
                Tollit argumentum genau Saepe lobortis
              </p>
            </div>
            <div className='award-card'>
              <AwardIcon name='award2' />
              <p className='award-card__description'>Schneewittchen denique </p>
            </div>
          </div>

          <div className='awards__cards-container__wrapper'>
            <div className='award-card'>
              <AwardIcon name='award3' />
              <p className='award-card__description'>
                Grimms Märchen expetenda
              </p>
            </div>
            <div className='award-card'>
              <AwardIcon name='award4' />
              <p className='award-card__description'>
                Mettwurst mei ullum gloriatur.
              </p>
            </div>
          </div>
        </div>
        <div className='awards__logo-bottom logo-secondary'></div>
      </div>
    </section>
  );
};
export default Awards;
