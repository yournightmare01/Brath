import pdf from '../../../assets/images/pdf.png';

const NavBar = () => {
  return (
    <nav className='nav space-between'>
      <div className='nav__link'>Die Metzgerei</div>
      <div className='nav__link'>Dry Aged</div>
      <div className='nav__link'>Partyservice</div>
      <div className='nav__link'>Fleischversand</div>
      <div className='nav__link'>Events/Kurse</div>
      <div className='nav__link'>Tagesessen</div>
      <div className='nav__link'>Impressum</div>
      <div className='nav__link'>Kontakt</div>
      <div className='nav__link'>
        <img alt='downloadPDFIcon' src={pdf} className='nav__link__pdf' />
        <p>Download</p>
      </div>
      <div className='nav__hamburger'>
        <div className='nav__hamburger__line' />
        <div className='nav__hamburger__line' />
        <div className='nav__hamburger__line' />
      </div>
    </nav>
  );
};
export default NavBar;
