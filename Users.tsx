import React, { useEffect, useState } from 'react'; 
import axios from 'axios';

interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  password: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [formData, setFormData] = useState<Partial<User>>({
    username: '',
    email: '',
    role: '',
    password: ''
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('http://localhost:8080/api/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation (optional)
    if (!formData.username || !formData.email || !formData.password) {
      alert('Please fill required fields');
      return;
    }

    axios.post('http://localhost:8080/api/users', formData)
      .then(() => {
        fetchUsers();
        setFormData({ username: '', email: '', role: '', password: '' });
      })
      .catch(err => console.error(err));
  };

  const handleDelete = (id: number) => {
    axios.delete(`http://localhost:8080/api/users/${id}`)
      .then(fetchUsers)
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>User Management</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Add User</button>
      </form>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username} - {user.email} - {user.role}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
