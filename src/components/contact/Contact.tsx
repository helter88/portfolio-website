import React from "react";
import styles from "./Contact.module.css";
import ContactCard from "./contact-card/ContactCard";
import ContactForm from "./contact-form/ContactForm";
import { Element } from "react-scroll";

const Contact = () => {
  const onEmailClick = () => {
    window.open("mailto:arturhelta@onet.pl", "_blank", "noopener,noreferrer");
  };
  const onLinkedInClick = () => {
    window.location.href = "https://pl.linkedin.com/in/arturhelta";
  };
  const onGitHubClick = () => {
    window.location.href = "https://github.com/helter88";
  };

  return (
    <section className={styles.contact} id="contact">
      <Element name="contact">
        <div className={styles["text-box"]}>
          <h2 className={styles["heading-secondary"]}>CONTACT</h2>
        </div>
        <div className={styles["contact-container"]}>
          <div className={styles["first-column"]}>
            <ContactCard
              title="Phone"
              description="+48 729 614 129"
              icon="Phone"
            />
            <ContactCard
              title="Email"
              description="arturhelta@onet.pl"
              icon="Email"
              clickHandler={onEmailClick}
            />
            <ContactCard
              title="LinkedIn"
              description="Artur Helta"
              icon="LinkedIn"
              clickHandler={onLinkedInClick}
            />
            <ContactCard
              title="GitHub"
              description="helter88"
              icon="Github"
              clickHandler={onGitHubClick}
            />
          </div>
          <div className={styles["second-column"]}>
            <ContactForm />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Contact;
