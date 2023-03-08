import './App.css';
import { Application } from './components/application/application';
import { Counter } from './components/counter/counter';
import { Skills } from './components/skills/skills';

function App() {
  return (
    <div className="App">
      <p>learn react</p>
      <Application />
      <Skills skills={["dev", "test", "ops"]}/>
      <Counter />
    </div>
  );
}

export default App;
