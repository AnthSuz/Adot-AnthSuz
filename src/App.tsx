import './App.scss';
import { Provider } from './stores/store';
import { CardContainer } from './components/CardContainer';

function App() { 
  return (
      <Provider>
        <CardContainer />
      </Provider>
  );
}

export default App;
