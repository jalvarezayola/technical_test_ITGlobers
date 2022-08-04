import blackLogo from '../../assets/images/logo-black.svg';
import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import twiter from '../../assets/images/twiter.svg';
import brandlive from '../../assets/images/brandlive.png';

import { products } from '../../constants/products';

import './footer.scss';

const Footer = () => (
  <footer>
    <section className="top">
      <div>
        <img className="logo" src={blackLogo} alt="logo" />
      </div>

      <div>
        {products.map((product) => (
          <span key={product.id}>{product.name?.toUpperCase()}</span>
        ))}
      </div>

      <div>
        <span>CONTACTO</span>
        <span>AYUDA</span>
        <span>CÓMO COMPRAR</span>
        <span>TÉRMINOS {'&'} CONDICIONES</span>
      </div>

      <div>
        <span>COMPRA 100% SEGURA</span>
      </div>

      <div>
        <span>
          SÍGUENOS EN
          <img src={facebook} alt="facebook" />
          <img src={twiter} alt="instagram" />
          <img src={instagram} alt="twiter" />
        </span>
      </div>
    </section>

    <section className="bottom">
      <span>PUFI Copyright 2017 - Todos los derechos reservados</span>
      <img src={brandlive} alt="BrandLive" />
    </section>
  </footer>
);

export default Footer;
