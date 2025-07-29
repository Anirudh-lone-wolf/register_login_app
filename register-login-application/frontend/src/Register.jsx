import { useState } from 'react';
import axios from 'axios';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/register', form);
      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.error || 'Error occurred');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required
               onChange={e => setForm({ ...form, name: e.target.value })} />
        <input type="email" placeholder="Email" required
               onChange={e => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" required
               onChange={e => setForm({ ...form, password: e.target.value })} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
