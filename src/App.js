import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Navbar } from './components/navbar/Navbar';
import { Home } from './routes/home/Home';
import { Posts } from './routes/posts/Posts';
import { Authors } from './routes/authors/Authors';
import { PostView } from './routes/postview/PostView';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='posts' element={<Posts />} />
          <Route path='posts/:id' element={<PostView />} />
          <Route path='authors' element={<Authors />} />
        
        </Routes>
      
      </BrowserRouter>
    </>
  );
};

export default App;
