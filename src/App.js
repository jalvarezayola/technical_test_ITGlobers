import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';

import { products } from './constants/products';
import { UpdateEmailAction } from './store/actions/email.actions';

import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import Collage from './components/collage';
import ProductSection from "./components/productSection";
import AditionalSection from './components/aditionalSection';

import ArrowRigth from './assets/images/arrow-right.svg';

import './app.scss';

const validateEmail = (email) => {
  const regValidateEmail = /^(([^<>()[\]\\#*¨?.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email || !regValidateEmail.test(email)) return false;
  return true;
};

const App = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.email);
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    if (emailError && validateEmail(email)) {
      setEmailError(false);
    }
  }, [email, emailError]);

  const subscriptionEmail = () => {
    const correctEmail = validateEmail(email);

    if (correctEmail) {
      axios.post('https://formspree.io/f/xpznakwr', { email })
        .then(() => {
          swal('Genial', 'Ahora podrás estar enterado de todas las novedades.', 'success', {
            button: 'Bien',
            timer: 3000,
          });
        })
        .catch(() => {
          swal('Ups', 'Ha ocurrido un error al intentar suscribirte.', 'error', {
            button: 'Intentar de nuevo',
            timer: 3000,
          });
        });
    } else setEmailError(true);
  }

  return (
    <div className="App">
      <Header />

      <Home />

      {products.map((product, index) => (
        <ProductSection
          key={product.id}
          image={product.image}
          name={product.name}
          description={product.description}
          handleClickShowMore={() => null}
          textPosition={index % 2 ? 'left' : 'right'}
          backgroundImage={product.backgroundImage}
          callToActionText={index === 0 && 'SHOP'}
          handleClickcallToAction={() => null}
        />
      ))}

      <AditionalSection
        name="INSTAGRAM"
        title="#ESPUFI"
      >
        <Collage />
      </AditionalSection>

      <AditionalSection
        className="lastSection"
        name="NEWSLETTER"
        title="SUSCRIBETE"
        helperText="Y entérate de todas las novedades"
      >
        <div className="containerEmailInput">
          <input
            className={`inputEmail ${emailError ? 'error' : ''}`}
            value={email}
            onChange={(e) => dispatch(UpdateEmailAction(e.target.value))}
            placeholder="Ingresa tu email"
          />
          {emailError && <span>Ups, parece que este email no es válido</span>}
          <button onClick={subscriptionEmail}>
            <img src={ArrowRigth} alt="arrow back" />
          </button>
        </div>
      </AditionalSection>

      <Footer />
    </div>
  );
};

export default App;
