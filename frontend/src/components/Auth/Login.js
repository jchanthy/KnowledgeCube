import React, { useState } from 'react';
import { Button, Card, Form, Input } from 'shadcn/ui';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login failed:', error.response.data);
    }
  };

  return (
    <Card>
      <Form onSubmit={handleLogin}>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" placeholder="Email" />
        <Input value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" placeholder="Password" />
        <Button type="submit">Login</Button>
      </Form>
    </Card>
  );
}

export default Login;
