import React, { useState, FormEvent } from 'react';
import axios from 'axios';

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5100/api/user/login', {
                username, 
                password 
            });

            if (response.status === 200) {
                setMessage('Login successful!');
                // Save the token in local storage for future authenticated requests
                localStorage.setItem('token', response.data);
            } else {
                setMessage(`Error: ${response.data}`);
            }
        } catch (error: any) {
            setMessage(`Error: ${error.response?.data || error.message}`);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default LoginForm;
