import Logo from '../../atoms/logo/Logo';
import NavBar from '../../molecules/navBar/NavBar';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container fluid fluid--large'>
        <Logo className='header__logo' />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
