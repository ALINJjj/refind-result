import emailjs from "@emailjs/browser";
import { APP_ID, SERVICE_ID } from "../links";

export const sendEmail = (templateId, ref) => {
    try {
        emailjs
          .sendForm(
            SERVICE_ID,
            templateId,
            ref,
            APP_ID
          )
          .then(
            (result) => {},
            (error) => {
              console.log(error.text);
            }
          );
      } catch (error) {
        console.log(error.message);
      }
}