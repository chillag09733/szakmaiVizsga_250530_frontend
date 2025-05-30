import logo from './logo.svg';
import './App.css';
import Legordulo from './components/Legordulo';
import Tesztkerdesek from './components/Tesztkerdesek';

function App() {
  return (
   <div className='container'>
    <header>
      <h1>Szótár</h1>
    </header>
    <article>
      <Legordulo/>
      <Tesztkerdesek/>
    </article>
    <footer>
      <p>@massanyicsilla</p>
    </footer>
   </div>
  );
}

export default App;
