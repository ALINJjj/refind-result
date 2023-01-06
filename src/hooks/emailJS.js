import emailjs from "@emailjs/browser";

export const sendEmail = (templateId, ref) => {
    try {
        emailjs
          .sendForm(
            "service_vrmp10w",
            templateId,
            ref,
            "Lp6zHOUyDd3S17ht-"
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