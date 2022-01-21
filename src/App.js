import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./component/header/header";
import About from "./pages/About";
import Posts from "./pages/Posts";
import { Comment } from "./component/comments/Comments";

function App() {
  return (
    <div className="App text-center">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<Comment />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
