import { useState } from 'react';

export interface LoginProps {
  onSubmit: (formData: { username: string, password: string }) => void;
}

function Login ({ onSubmit }: LoginProps) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit({ username, password });
    }

    return (
        <form onSubmit={handleSubmit}>
        <label>
            Username:
            <input data-testid="email" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
            Password:
            <input data-testid="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
        </form>
    );
}

export default Login;
