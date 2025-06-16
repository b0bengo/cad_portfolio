import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Process from './components/Portfolio/Process';
import Mechanical from './components/Portfolio/Mechanical';
import HVAC from './components/Portfolio/HVAC';
import Electronics from './components/Portfolio/Electronics';
import ThreeD from './components/Portfolio/ThreeD';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio/process" component={Process} />
          <Route path="/portfolio/mechanical" component={Mechanical} />
          <Route path="/portfolio/hvac" component={HVAC} />
          <Route path="/portfolio/electronics" component={Electronics} />
          <Route path="/portfolio/3d" component={ThreeD} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;