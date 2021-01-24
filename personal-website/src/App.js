import './App.css';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom';
  
import About from './components/About.js'

function App() {
  return (
    <Router>
      <div>
        <nav className="main-navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Home() {
  return <h2>Home</h2>;
}

function Blog() {
  return <h2>Blog</h2>;
}

export default App;
