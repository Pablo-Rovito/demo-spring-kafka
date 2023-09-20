import './App.css';
import DisplayConnectionStatus from './components/DisplayConnectionStatus';
import DisplayTopicMessage from './components/DisplayTopicMessage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DisplayConnectionStatus />
        <DisplayTopicMessage />
      </header>
    </div>
  );
}

export default App;