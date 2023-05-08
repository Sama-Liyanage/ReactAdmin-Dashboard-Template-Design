import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import MainDash from './Components/MainDash/MainDash';


function App() {
  return (
    <div className="App">
      <div className='AppGlass'>
        <Sidebar />
        <MainDash/>
      </div>
    </div>
  );
}

export default App;
