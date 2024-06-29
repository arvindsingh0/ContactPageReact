import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useState } from "react";
const ContactForm = () => {
 
   const [name, setName] = useState("Arvin");
   const [email, setEmail] = useState("arvinsingh90277@gmail.com");
   const [text, setText] = useState("Learning React");


  const onSubmit = (event) => {
    event.preventDefault();

    setName (event.target[0].value);
    setEmail (event.target[1].value);
    setText (event.target[2].value);
    }
  return (
  <section
  className={styles.container}>
    <div className={styles.ContactForm}>
      <div className={styles.topButton}>

         <Button               
          text="VIA SUPPORT CHAT" 
          icon ={<MdMessage fontSize="24px"/>}
        />
         <Button 
         
          text="VIA CALL" 
          icon ={<FaPhoneAlt fontSize="24px"/>}
        />
      </div>
          <Button 
          isOutline={true}
          text="VIA EMAIL FORM" 
          icon ={<IoIosMail fontSize="24px"/>}
        />

        <form 
        onSubmit={onSubmit}>

          <div className={styles.FormControl}>

          <label htmlFor="name">Name</label>
          <input type="text" name="name"/>

          </div>

            <div className={styles.FormControl}>

          <label htmlFor="email">Email</label>
          <input type="email" name="email"/>

          </div> 
          
          <div className={styles.FormControl}>

          <label htmlFor="text">Text</label>
          <textarea  name="text" rows="8"/>

          </div> 

          <div 
          style={ {
            display: "flex",
            justifyContent: "end",

          }
          }>
          <Button text="SUBMIT"/>

          </div>
          <div>
          {name + " " + email +" " + text}
          </div>

        </form>
   
    </div>
    <div className={styles.ContactImage}></div>
    <img src="images/contact.svg" alt="contact image"/>
  </section>

  );

};

export default ContactForm;