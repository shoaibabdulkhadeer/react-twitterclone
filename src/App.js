import './App.css';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Trending from './components/Trending';

function App() {
  return (
    <div className="App">
         
          <div className='HomePage'>
            <Sidebar />
            <Home />
            <Trending />
          </div>
          
    </div>
  );
}

export default App;
