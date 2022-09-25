import Awards from '../../molecules/awards/Awards';
import DryAged from '../../molecules/dryAged/DryAged';
import GrillCourse from '../../molecules/grillCourse/GrillCourse';
import Hero from '../../molecules/hero/Hero';
import JreNetwork from '../../molecules/jreNetwork/JreNetwork';
import MealAssortment from '../../molecules/mealAssortment/MealAssortment';
import OrderNow from '../../molecules/orderNow/orderNow';
import PreFooter from '../../molecules/preFooter/PreFooter';
import Spices from '../../molecules/spices/Spices';
import Testimonials from '../../molecules/testimonials/Testimonials';
import WorkTime from '../../molecules/workTime/WorkTime';

const Body = () => {
  return (
    <main>
      <WorkTime />
      <Hero />
      <DryAged />
      <GrillCourse />
      <MealAssortment />
      <Spices />
      <OrderNow />
      <JreNetwork />
      <Awards />
      <Testimonials />
      <PreFooter />
    </main>
  );
};

export default Body;
