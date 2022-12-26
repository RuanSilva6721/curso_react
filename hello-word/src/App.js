import FirstComponent from './components/FirstComponent';

import logo from './logo.svg';
import './App.css';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p> div</p>
      <h2>teste</h2>
      <FirstComponent/>
      <TemplateExpressions/>
      <Events/>
      <Challenge/>
    </div>
  );
}

export default App;
