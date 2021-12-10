import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";

import "./App.css";

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="
      9eb3a5b9-36b1-4685-bcb2-72458d48b238"
      userName="Abaad12345"
      //userName="Hasnain1234"
      // userName={localStorage.getItem("username")}
      userSecret="12345"
      // userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
}

export default App;
