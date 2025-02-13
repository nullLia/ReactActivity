import Calculator from './Calculator';
import Value from './value';
import './App.css';

function App() {
  
  return (
    <main>
      <div className="val">
        <Value />
      </div>
      <div className="cal">
        <Calculator />
      </div>
    </main>
  );

}

export default App;