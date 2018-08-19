import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import './index.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header>
          <nav className="navi">
             <Link className="linkapp" to='/'><span className="land">Home</span></Link>
             <Link className="linkapp" to='/library'><span className="lib">Library</span></Link>
           </nav>
           <h1 className="bloc-jams">Bloc Jams</h1>
         </header>
         <main>
         <Route exact path="/" component={Landing} />
         <Route path="/library" component={Library} />
         <Route path="/album/:slug" component={Album} />         
         </main>
      </div>
    );
  }
}

export default App;
