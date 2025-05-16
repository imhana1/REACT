import logo from "./logo.svg";
import "./App.css";
import Header from "./mini03/Header";
import Nav from "./mini03/Nav";
import TodoList from "./mini03/TodoList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./mini03/Footer";
import TodoWrite from "./mini03/TodoWrite";
import TodoRead from "./mini03/TodoRead";
import Index from "./mini03/Index";

// 우리가 작성 할 react app
function App() {
  return (
    <div id="App">
      {/* 리액트 라우터의 최상위 컴포넌트, 애플리케이션 전체를 감싸야 한다 */}
      <BrowserRouter>
        <Header />
        <Nav />
        <main>
          {/* <Routes> 내부에는 <Route>만 올 수 있다 */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/todo/list" element={<TodoList />} />
            <Route path="/todo/write" element={<TodoWrite />} />
            <Route path="/todo/read" element={<TodoRead />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
