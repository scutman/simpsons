import React, {Component} from 'react';
import Navbar from './component/Navbar';
import QuoteCard from './component/QuoteCard';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <QuoteCard/>
      </div>
    );
  }
}

export default App;
