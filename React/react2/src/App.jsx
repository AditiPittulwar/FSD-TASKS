import Message from "../components/Message.jsx";
import Profile from "../components/Profile.jsx";
import Card from "../components/Card.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <Message />

      <h1>My Profile</h1>
      <Profile />

      <Card
        title="My First Card"
        content="This card was created using Card.jsx component."
      />

      <Header />
      <Footer />
    </div>
  );
}

export default App;
