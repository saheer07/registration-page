import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={handleLogin} className="w-50 mx-auto">
        <input className="form-control mb-3" type="email" placeholder="Email" required />
        <input className="form-control mb-3" type="password" placeholder="Password" required />
        <button className="btn btn-success w-100" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
