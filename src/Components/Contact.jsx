import React, { useRef, useState } from "react";
import Style from "../css/contact.module.css";
import Button from "../css/button.module.css";
import { MdEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import emailjs from '@emailjs/browser';
const Contact = () => {
    const openWhatsApp = () => {
      const phoneNumber = '8697641505';
      const whatsappUrl = `https://wa.me/${phoneNumber}`;
      window.open(whatsappUrl, '_blank');
    };
    const openGmail = () => {
      const emailAddress = 'mailto:animdeep2019@gmail.com';
      window.open(emailAddress, '_blank');
    };

    
    const form = useRef();
    
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d6aywac', 'template_tpavvc7', form.current, 'slmehzitadfedhm1R')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  return (
    <>
      <section className={Style.contactPage} id="contact">
        <div className={Style.subTitle}>Get in Touch</div>
        <div className={Style.title}>Contact Me</div>
        <div className={Style.contactSection}>
          <div className={Style.left}>
            <div className={Style.card} onClick={openGmail}>
              <MdEmail className={Style.cardIcon} />
              <h2 className={Style.cardTitle}>Email Me</h2>
              <p className={Style.cardDescription}>
                animdeep2019@gmail.com
                <br />
              </p>
            </div>
            <div className={Style.card} onClick={openWhatsApp}>
              <PiPhoneCallFill className={Style.cardIcon} />
              <h2 className={Style.cardTitle}>Whatsapp Me</h2>
              <p className={Style.cardDescription}>
                +91 8697641505
                <br />
              </p>
            </div>
          </div>
          <form className={Style.right} ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              className={Style.input}
              placeholder="Your Name"
              name="name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              className={Style.input}
              placeholder="example@email.com"
              name="email"
              onChange={handleChange}
              required
            />
            <textarea
              className={Style.textarea}
              placeholder="Your Message"
              name="message"
              onChange={handleChange}
            ></textarea>
            <div className={Style.buttonSection}>
              <button className={Button.button} type="submit">Send <PiPaperPlaneRightFill className={Button.icon}/></button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
