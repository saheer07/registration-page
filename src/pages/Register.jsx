import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Register</h2>
      <form onSubmit={handleRegister} className="w-50 mx-auto">
        <input className="form-control mb-3" type="text" placeholder="Username" required />
        <input className="form-control mb-3" type="email" placeholder="Email" required />
        <input className="form-control mb-3" type="password" placeholder="Password" required />
        <button className="btn btn-primary w-100" type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
