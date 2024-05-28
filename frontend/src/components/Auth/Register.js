import React, { useState } from 'react';
import { Button, Card, Form, Input } from 'shadcn/ui';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/register', { username, email, password });
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Registration failed:', error.response.data);
    }
  };

  return (
    <Card>
      <Form onSubmit={handleRegister}>
        <Input value={username} onChange={(e) => setUsername(e.target.value)} name="username" placeholder="Username" />
        <Input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" placeholder="Email" />
        <Input value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" placeholder="Password" />
        <Button type="submit">Register</Button>
      </Form>
    </Card>
  );
}

export default Register;
