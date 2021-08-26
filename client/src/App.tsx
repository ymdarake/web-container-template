import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/">Home</Link>
          <Link to="/otherpage">OtherPage</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib}></Route>
          <Route path="/otherpage" component={OtherPage}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
