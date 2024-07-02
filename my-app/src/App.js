import './App.css';
import AllRoutes from './components/AllRoutes';
import MainNav from './components/MainNav';
import SearchNav from './components/SearchNav';

function App() {
  return (
    <div className="App">
      <SearchNav />
      <MainNav />
      <AllRoutes />
    </div>
  );
}

export default App;
