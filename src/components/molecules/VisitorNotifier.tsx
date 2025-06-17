import React, { useEffect } from "react";
import emailjs from "emailjs-com";

const VisitorNotifier = () => {
  useEffect(() => {
    const sendVisitorEmail = async () => {
      const serviceId = "service_76anlkf";
      const templateId = "template_et4c9df";
      const publicKey = "ZtF595dUOnMwagvlX";

      const templateParams = {
        name: "Portfolio Visitor",
        email: "noreply@portfolio.com",
        subject: "New Visitor Notification",
        message: "Someone visited your portfolio page!",
      };

      try {
        const response = await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          publicKey
        );
        console.log(
          "Visitor notification sent!",
          response.status,
          response.text
        );
      } catch (error) {
        console.error("Failed to send visitor notification:", error);
      }
    };

    sendVisitorEmail();
  }, []);

  return null;
};

export default VisitorNotifier;
