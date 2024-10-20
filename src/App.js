import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import ThankYouPage from './components/ThankYouPage';

const App = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/thank-you/:id" component={ThankYouPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
