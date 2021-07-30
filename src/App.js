import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function createRoom() {
  print('Room Created');
}

function joinRoom(id) {
  print('you have joined the room');
}

function playerJoined(doc) {
  if (doc.userids.length == 4) {
    startGame();
  }
}

function startGame(){

}

export default App;
