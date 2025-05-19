import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./fragment/Nav";
import Header from "./fragment/Header";
import Footer from "./fragment/Footer";
import { Route, Routes } from "react-router-dom";
import ContactList from "./view/ContactList";
import ContactWrite from "./view/ContactWrite";
import ContactRead from "./view/ContactRead";
import ContactUpdate from "./view/ContactUpdate";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/write" element={<ContactWrite />} />
          <Route path="/read" element={<ContactRead />} />
          <Route path="/update" element={<ContactUpdate />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
