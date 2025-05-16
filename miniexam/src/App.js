import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./miniexam/Index";
import TodoList from "./miniexam/TodoList";
import TodoWrite from "./miniexam/TodoWrite";
import TodoRead from "./miniexam/TodoRead";
import Header from "./miniexam/Header";
import Nav from "./miniexam/Nav";
import Footer from "./miniexam/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import SupplyList from "./miniexam/SupplyList";
import SupplyRead from "./miniexam/SupplyRead";

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Header />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/todo/list" element={<TodoList />} />
            <Route path="/todo/write" element={<TodoWrite />} />
            <Route path="/todo/read" element={<TodoRead />} />
            <Route path="/supply/list" element={<SupplyList />} />
            <Route path="/supply/read" element={<SupplyRead />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
