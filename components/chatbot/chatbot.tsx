import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const configScript = document.createElement("script");
    configScript.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "LEqAO8OtI7sDhegxRR1J5",
        domain: "www.chatbase.co"
      };
    `;
    document.body.appendChild(configScript);

    const embedScript = document.createElement("script");
    embedScript.src = "https://www.chatbase.co/embed.min.js";
    embedScript.defer = true;
    document.body.appendChild(embedScript);

    return () => {
      document.body.removeChild(configScript);
      document.body.removeChild(embedScript);
    };
  }, []);

  return null; // No UI rendering required
};

export default Chatbot;
