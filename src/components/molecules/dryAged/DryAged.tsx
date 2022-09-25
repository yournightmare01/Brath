import meal1 from '../../../assets/images/meal1.png';
import meal2 from '../../../assets/images/meal2.png';
import meal3 from '../../../assets/images/meal3.png';
import meal4 from '../../../assets/images/meal4.png';

import Button from '../../atoms/button/Button';

const DryAged = () => {
  return (
    <section className='dry-aged fluid'>
      <div className='dry-aged__content text-white'>
        <div className='dry-aged__content__title'>
          <h2>Dry aged</h2>
        </div>
        <div className='dry-aged__content__text'>
          <h4>Alte Wutz, Dry Aged</h4>
          <p className='paragraph'>
            Halt amet, consectetur Handtasche elit, sed do eiusmod tempor
            Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim
            veniam, Turnbeutel nostrud exercitation ullamco laboris nisi
            Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener
            Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim
            Stuttgart. id latine indoctum complectitur HugoClub Mate mea meliore
            denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod
            assentior.
          </p>
          <div className='dry-aged__content__btn-group'>
            <Button className='btn-primary' label='Dry Aged' />
            <Button className='btn-primary' label='Alte Wutz' />
          </div>
        </div>
      </div>
      <div className='dry-aged__gallery'>
        <div className='dry-aged__gallery--high'>
          <img width='27rem' src={meal1} alt='' />
        </div>
        <div className='dry-aged__gallery--low'>
          <img width='8rem' src={meal2} alt='' />
          <img width='8rem' src={meal3} alt='' />
          <img width='8rem' src={meal4} alt='' />
        </div>
      </div>
    </section>
  );
};
export default DryAged;
