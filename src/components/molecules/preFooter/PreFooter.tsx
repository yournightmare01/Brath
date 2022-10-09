import Logo from '../../atoms/logo/Logo';
import SocialMediaIcon from '../../atoms/socialMediaIcon/SocialMediaIcon';

import location from '../../../assets/images/location.png';
import phone from '../../../assets/images/phone.png';
import mail from '../../../assets/images/mail.png';

const PreFooter = () => {
  return (
    <section className='pre-footer'>
      <div className='pre-footer__container fluid fluid--large'>
        <div className='pre-footer__info'>
          <div className='pre-footer__info__location'>
            <img
              alt='locationImg'
              src={location}
              className='pre-footer__location__icon'
            />
            <p className='pre-footer__info__text paragraph'>
              Klauprechtstraße 25 76137 Karlsruhe, Germany
            </p>
          </div>
          <div className='pre-footer__info__phone'>
            <img
              alt='phoneImg'
              src={phone}
              className='pre-footer__phone__icon'
            />
            <p className='pre-footer__info__text paragraph'>+49 721 358060</p>
          </div>
          <div className='pre-footer__info__mail'>
            <img src={mail} alt='mailImg' className='pre-footer__mail__icon' />
            <p className='pre-footer__info__text paragraph'>
              info@partyservice-brath.de
            </p>
          </div>
        </div>
        <Logo
          className='logo-primary'
          containerClassName='pre-footer__logo-container'
        />
        <div className='pre-footer__social-media'>
          <p className='paragraph'>Besuchen Sie uns auf:</p>
          <div className='pre-footer__social-media__icons'>
            <SocialMediaIcon name='twitter' className='social-media-icon' />
            <SocialMediaIcon name='facebook' className='social-media-icon' />
            <SocialMediaIcon name='instagram' className='social-media-icon' />
            <SocialMediaIcon name='youtube' className='social-media-icon' />
          </div>
        </div>
      </div>
    </section>
  );
};
export default PreFooter;
