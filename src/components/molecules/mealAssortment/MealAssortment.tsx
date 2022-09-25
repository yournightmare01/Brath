import Button from '../../atoms/button/Button';

import meal1 from '../../../assets/images/meal5.png';
import meal2 from '../../../assets/images/meal6.png';
import meal3 from '../../../assets/images/meal7.png';
import meal4 from '../../../assets/images/meal8.png';

const MealAssortment = () => {
  return (
    <section className='meal-assortment'>
      <div className='meal-assortment__content'>
        <div className='meal-assortment__title'>
          <h3>Das Handwerk</h3>
          <h3>alles über unsere Hausgemachte Produkte</h3>
        </div>
        <div className='meal-assortment__description'>
          Halt amet, consectetur Handtasche elit, sed do eiusmod tempor
          Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim
          veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen
          Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute
          irure dolor in Guten Tag mollit anim Stuttgart. id latine indoctum
          complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm
          expetenda nam an, his ei Reise euismod assentior
        </div>
        <Button className='btn-primary' label='Das Handwerk' />
      </div>
      <div className='meal-assortment__gallery fluid'>
        <div className='meal-assortment__logo logo-secondary'></div>
        <img width='24%' src={meal1} alt='meal1' />
        <img width='24%' src={meal2} alt='meal2' />
        <img width='24%' src={meal3} alt='meal3' />
        <img width='24%' src={meal4} alt='meal4' />
      </div>
    </section>
  );
};
export default MealAssortment;
