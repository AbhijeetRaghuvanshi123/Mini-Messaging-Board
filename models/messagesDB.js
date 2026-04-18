const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const getMessages = async () => {
    return messages;
}

const addMessage = ( message) => {
    messages.push({text: message.text, user: message.user, added: new Date()});
}

const getMessage = ( user ) => {
    return messages.find(message => message.user === user);
}

export { getMessages, addMessage, getMessage };