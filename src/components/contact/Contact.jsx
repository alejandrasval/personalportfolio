import { useRef, useState } from "react";
import "./Contact.css";
import emailjs from 'emailjs-com';

export const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)

  const clickSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_nht1674", "template_3i1qjqh", formRef.current, "user_JfkNX3UNYbtsvNT9Ex3LI")
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <div className="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-center">
          <h1 className="c-title">Contact me</h1>
          <form ref={formRef} onSubmit={clickSubmit}>
              <input type="text" placeholder="Name" name="user_name" />
              <input type="text" placeholder="Subject" name="user_subject" />
              <input type="text" placeholder="Email" name="user_email" />
              <textarea rows="5" placeholder="Message" name="message" />
              <button>Submit</button>
              {done && "Thank you for your message"}
          </form>
        </div>
      </div>
    </div>
  );
};
