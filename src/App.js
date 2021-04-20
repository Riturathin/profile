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
          <div className="container">
            <RouteManager />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;