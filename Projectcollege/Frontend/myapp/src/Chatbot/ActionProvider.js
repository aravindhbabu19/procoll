import { createChatBotMessage } from "react-chatbot-kit";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleCourses = () => {
    const msg = this.createChatBotMessage(
      "We currently offer a Diploma in Ophthalmic Assistant (DOA), and upcoming B.Sc. and M.Sc. Optometry courses."
    );
    this.addMessage(msg);
  };

  handleContact = () => {
    const msg = this.createChatBotMessage(
      "You can contact us at 📞 9876543210 or visit our campus in Kurnool."
    );
    this.addMessage(msg);
  };

  handleDefault = () => {
    const msg = this.createChatBotMessage(
      "I'm not sure I understood that. You can ask me about our courses or contact info."
    );
    this.addMessage(msg);
  };

  addMessage = (message) => {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
}

export default ActionProvider;