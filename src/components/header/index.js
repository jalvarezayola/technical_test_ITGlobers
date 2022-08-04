import { useState } from 'react';

import whiteLogo from '../../assets/images/logo-white.svg';
import arrowDown from '../../assets/images/arrow-down.svg';
import { products } from '../../constants/products';

import './header.scss';

const Header = () => {
  const [visibilityOptionsAccount, setVisibilityOptionsAccount] = useState(false);
  
  return (
    <header>
      <div className="logo">
        <img src={whiteLogo} alt="logo" />
      </div>

      <div className="products">
        {products.map((product) => (
          <div>
            <img src={product.icon} alt="" />
            <span>{product.name.toUpperCase()}</span>
          </div>
        ))}
      </div>

      <div className="userOptions">
        <span onClick={() => setVisibilityOptionsAccount(!visibilityOptionsAccount)}>
          MI CUENTA
          <img src={arrowDown} alt="" />
          <ul className={visibilityOptionsAccount ? 'visible' : 'hidden'}>
            <li>Iniciar sesión</li>
            <li>Crear cuenta</li>
          </ul>
        </span>
        <span>MI COMPRA</span>
      </div>
    </header>
  );
};

export default Header;
