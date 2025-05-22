import './App.css';
import Header from './fragments/Header'
import Nav from './fragments/Nav'
import Aside from './fragments/Aside'
import Footer from './fragments/Footer'
import { Route, Routes } from 'react-router-dom';
import ContactList from './view/ContactList';
import ContactRead from './view/ContactRead';
import ContactWrite from './view/ContactWrite';
import ContactUpdate from './view/ContactUpdate';

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
            <Route path="/read" element={<ContactRead />} />
            <Route path="/write" element={<ContactWrite />} />
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
