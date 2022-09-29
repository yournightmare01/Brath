import jreLogo from '../../../assets/images/jre-logo.png';
import Button from '../../atoms/button/Button';

const JreNetwork = () => {
  return (
    <section className='jre-network'>
      <div className='jre-network__container fluid'>
        <div className='jre-network__image-container'>
          <img
            className='jre-network__image-container--image'
            src={jreLogo}
            alt='jre-logo'
          />
        </div>
        <div className='jre-network__content'>
          <div className='jre-network__content__container'>
            <h2 className='jre-network__content__title'>
              Metzgerei Brath ist Mitglied im Genussnetzwerk
            </h2>
            <Button className='btn-primary' label='Gehen zu site' />
          </div>
        </div>
      </div>
    </section>
  );
};
export default JreNetwork;
