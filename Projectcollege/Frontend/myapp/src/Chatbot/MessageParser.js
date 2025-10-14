class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lower = message.toLowerCase();

    if (lower.includes("course")) {
      this.actionProvider.handleCourses();
    } else if (lower.includes("contact")) {
      this.actionProvider.handleContact();
    } else {
      this.actionProvider.handleDefault();
    }
  }
}

export default MessageParser;