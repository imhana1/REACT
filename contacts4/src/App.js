import logo from "./logo.svg";
import "./App.css";
import Header from "./fragments/Header";
import Nav from "./fragments/Nav";
import Footer from "./fragments/Footer";
import Aside from "./fragments/Aside";
import { Route, Routes } from "react-router-dom";
import ContactList from "./views/ContactList";
import ContactWrite from "./views/ContactWrite";
import ContactRead from "./views/ContactRead";
import ContactUpdate from "./views/ContactUpdate";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <main>
        <Aside />
        <section>
          <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/write" element={<ContactWrite />} />
            <Route path="/read" element={<ContactRead />} />
            <Route path="/update" element={<ContactUpdate />} />
          </Routes>
        </section>
        <Aside />
      </main>
      <Footer />
    </div>
  );
}

export default App;
