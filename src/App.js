import './App.css';
import Header from './components/Header';
import RouteManager from './routes/RouteManager';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="profile container-fluid"> 
          <Header />
          <RouteManager />
        </div>
      </div>
    </Router>
  );
}

export default App;