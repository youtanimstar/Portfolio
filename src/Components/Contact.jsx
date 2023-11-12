import React from "react";
import Style from "../css/contact.module.css";
import Button from "../css/button.module.css";
import { MdEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { PiPaperPlaneRightFill } from "react-icons/pi";
const Contact = () => {
  return (
    <>
      <section className={Style.contactPage} id="contact">
        <div className={Style.subTitle}>Get in Touch</div>
        <div className={Style.title}>Contact Me</div>
        <div className={Style.contactSection}>
          <div className={Style.left}>
            <div className={Style.card}>
              <MdEmail className={Style.cardIcon} />
              <h2 className={Style.cardTitle}>Email Me</h2>
              <p className={Style.cardDescription}>
                animdeep2019@gmail.com
                <br />
              </p>
            </div>
            <div className={Style.card}>
              <PiPhoneCallFill className={Style.cardIcon} />
              <h2 className={Style.cardTitle}>Whatsapp Me</h2>
              <p className={Style.cardDescription}>
                +91 8697641505
                <br />
              </p>
            </div>
          </div>
          <div className={Style.right}>
            <input
              type="text"
              className={Style.input}
              placeholder="Your Name"
              name="name"
              required
            />
            <input
              type="email"
              className={Style.input}
              placeholder="example@email.com"
              name="email"
              required
            />
            <textarea
              className={Style.textarea}
              placeholder="Your Message"
            ></textarea>
            <div className={Style.buttonSection}>
              <button className={Button.button}>Send <PiPaperPlaneRightFill className={Button.icon}/></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
