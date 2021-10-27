import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calculate from './components/calculator/Calculate';
import Home from './components/Home';
import Quote from './components/Quote';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/calculator" component={Calculate} />
            <Route path="/quote" component={Quote} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
export default App;
