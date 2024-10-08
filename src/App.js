
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import CandyContainer from './components/CandyContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <HooksCakeContainer/>
    <HooksIceCreamContainer/>
    <CandyContainer/>
    <CakeContainer/> */}
    < UserContainer />
    </div>
    </Provider>
  );
}

export default App;
