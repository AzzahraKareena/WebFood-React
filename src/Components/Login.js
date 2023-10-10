import { Button, FloatingLabel, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import '../App.css';

const Login = () => {

  return (
    <>
    
      <main className="form-container">
      <div className="bg-login">
      <Form className="form-box w-100 m-auto">
      <h1 className="h3 mb-3 fw-normal">Login</h1>
      <p>Belum Registrasi? <Link to="/Register">Register</Link></p>
      <Form.Group controlId="formUserID">
      <Form.Label>User ID</Form.Label>
      <Form.Control type="text" placeholder="jhondoe" />
      </Form.Group>
      <Form.Group controlId="formPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="password" />
      </Form.Group>
      <Button className="w-100 mt-3">Login</Button>
      </Form>
      </div>
      </main>
    </>
  )
}

export default Login