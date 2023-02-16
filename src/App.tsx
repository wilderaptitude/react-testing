import './App.css';
import { Application } from './components/application/application';
import { Skills } from './components/skills/skills';

function App() {
  return (
    <div className="App">
      <p>learn react</p>
      <Application />
      <Skills skills={["dev", "test", "ops"]}/>
    </div>
  );
}

export default App;
