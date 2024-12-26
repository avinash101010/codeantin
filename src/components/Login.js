import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '1em', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1em' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '.5em' }}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%', padding: '.5em', boxSizing: 'border-box' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '1em' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '.5em' }}>Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '.5em', boxSizing: 'border-box' }}
                        required
                    />
                </div>
                <button type="submit" style={{ padding: '.5em 1em', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px' }}>Login</button>
            </form>
        </div>
    );
};

export default Login;