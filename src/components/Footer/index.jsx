import React from 'react';
import styles from './Footer.module.css';
import { AiFillInstagram, AiFillTwitterCircle, AiOutlineCopyrightCircle } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import logo from '../../assets/funko-logo.png'


const Footer = () => {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.icones}>
        <FaFacebook size={'2.4rem'} color={'white'} />
        <AiFillTwitterCircle size={'2.8rem'} color={'white'} />
        <AiFillInstagram size={'2.8rem'} color={'white'} />
      </div>
      <div>
        <img className={styles.footerImg} src={logo} alt=""></img>
      </div>
      <div className={styles.copyright}>
        <AiOutlineCopyrightCircle size={'2.4rem'} color={'white'} />
        <p>Copyright</p>
      </div>

    </div>
  );
}

export default Footer;
