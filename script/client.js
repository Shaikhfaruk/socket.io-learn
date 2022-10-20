const socket = io("http://localhost:8000");

const form = document.getElementById("sendContainer");
const messageInput = document.getElementById("messageInput");
const messageContainer = document.getElementById("chats");

const append = (message, position) => {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageElement.classList.add("message");
  messageElement.classList.add(position);
  messageContainer.append(messageElement);
};

let name = prompt("Enter your name to join");

socket.emit("new-user-joined", name);

socket.on("user-joined", (name) => {
  append(`${name} joined the chat`, "right");
});
