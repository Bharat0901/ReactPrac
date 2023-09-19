import styles from './style';
import { Navbar, Stats, Business, Billing ,CardDeal, Testimonials, Clients, CTA, Footer, Hero} from './components';
import {BrowserRouter, Routes, Route} from "react-router-dom";
const Helo = () => (
  <div  className="bg-primary w-full overflow-hidden" >
    {/* <Navbar/> */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats /> 
        <Business /> 
        <Billing /> 
        <CardDeal />
        <Testimonials /> 
        <Clients /> 
        <CTA /> 
        {/* <Footer />  */}
      </div>
    </div>
  </div>
);

export default Helo;