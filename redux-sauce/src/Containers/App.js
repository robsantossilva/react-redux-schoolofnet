import logo from '../logo.svg';
import '../App.css';
import { Provider } from 'react-redux';
import store from '../store';
import Counter from '../Components/Counter';

function App() {
  return (
    <Provider store={store()}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
        </header>
      </div>
    </Provider>
  );
}

export default App;
