import Header from './components/Header/';
import Identity from './components/Identity';
import Biodata from './components/Biodata/';
import Higlight from './components/Higlight';
import './styles/app.css';

function App() {
  return (
    <>
      <div className="card">
        <div className="top">
          <Header />
          <Identity />
        </div>
        <div className="bottom">
          <Biodata />
          <Higlight />
        </div>
      </div>
    </>
  );
}

export default App;
