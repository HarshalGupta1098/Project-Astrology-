import TalkToAstrologer from './TalkToAstrologer';
import './App.css'
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/talk">
          <TalkToAstrologer />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
    </Router>
    
  );
}

export default App;
