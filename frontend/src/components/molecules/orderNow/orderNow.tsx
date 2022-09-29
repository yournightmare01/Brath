import Button from '../../atoms/button/Button';
import steak from '../../../assets/images/steak.png';

const OrderNow = () => {
  return (
    <section className='order-now'>
      <img className='order-now__image' src={steak} alt='' />
      <div className='order-now__container'>
        <div className='order-now__content'>
          <h1>Fleischversand</h1>
          <Button
            className='btn-primary btn-large btn-white'
            label='Jetzt bestellen'
          />
        </div>
      </div>
    </section>
  );
};
export default OrderNow;
