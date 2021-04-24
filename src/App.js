import './App.css';

import Navbar from "./components/Navbar"
import TweetForm from "./components/TweetForm"
import Tweet from "./components/Tweet"


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-mid">
        <div className="page-header">
          <h2>Home</h2>
          <form className="search-form">
            <button><span class="material-icons">search</span></button>
            <input type="text" placeholder="Search" />
          </form>
        </div>
        <TweetForm />
        <div className="spacer"></div>
        <Tweet />
      </div>
    </div>
  );
}

export default App;
