import './App.css';
import Header from './fragment/Header';
import Aside from './fragment/Aside';
import Footer from './fragment/Footer';
import Nav from './fragment/Nav';
import { Route, Routes } from 'react-router-dom';
import ContactList from './view/ContactList';
import ContactWrite from './view/ContactWrite';
import ContactRead from './view/ContactRead';
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
            <Route path='/' element={<ContactList />} />
            <Route path='/write' element={<ContactWrite />} />
            <Route path='/read' element={<ContactRead />} />
            <Route path='/update' element={<ContactUpdate />} />
          </Routes>
        </section>
        <Aside />
      </main>
      <Footer />
    </div>
  );
}

export default App;