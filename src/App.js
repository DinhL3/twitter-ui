import './App.css';

import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-mid">
        <div className="page-heading">
          <h2>Home</h2>
        </div>
        <form className="tweet-form">
          <div className="tweet-left">
            <img src="dinh.jpg" />
          </div>
          <div className="tweet-right">
            <textarea placeholder="What's happening?" />
            <div className="tweet-right-bot">
              <span class="material-icons nav-link">image</span>
              <button>Tweet</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
