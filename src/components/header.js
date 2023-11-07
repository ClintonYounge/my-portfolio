import logo from '../images/icons/My-logo.png';

const Header = () => {
  return (
    <>
      <img src={logo} alt='logo' />
      <ul>
        <li>Portfolio</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </>
    
  )
}

export default Header;