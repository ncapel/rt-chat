const socket = new WebSocket("ws://localhost:8080/ws");

function connect() {
  console.log("Attempting to connect to server...");

  socket.onopen = () => {
    console.log("Successfully connected.");
  };

  socket.onmessage = (msg) => {
    console.log(msg);
  };

  socket.onclose = (event) => {
    console.log(`Socket closed connection: ${event}`);
  };

  socket.onerror = (error) => {
    console.log(`Socket error: ${error}`);
  };
}

const sendMsg = (msg: string) => {
  console.log(`sending message: ${msg}`);
  socket.send(msg);
};

export { connect, sendMsg };
