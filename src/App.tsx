import './App.css';
import { Application } from './components/application/application';
import { Counter } from './components/counter/counter';
import { Skills } from './components/skills/skills';
import Login from './components/login-form/login'

function App() {

  const handleSubmit = ({ username, password }: { username: string, password: string }) => {
    alert(`Submitted login form with username: ${username} and password: ${password}`);
  };

  return (
    <div className="App">
      <p>learn react</p>
      <Application />
      <Skills skills={["dev", "test", "ops"]}/>
      <Counter />

      <div>
        <h1>Login Component Example</h1>
        <Login onSubmit={handleSubmit} />
      </div>

    </div>
  );
}

export default App;
