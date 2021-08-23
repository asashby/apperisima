import './default.scss';
import Header from './components/header';
import Homepage from './pages/homepage'

function App() {
  return (
    <div className="App">
      <Header />
      <div
        className="main-wrapper">
        <Homepage/>
      </div>
    </div>
  );
}

export default App;
