import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../App.css';

const Register = () => {
  return (
    <main className="form-container">
      <Form className="form-box w-100 m-auto">
        <h1 className="h3 mb-3 fw-normal">Register</h1>
        <p>Sudah Registrasi? <Link to="/Login">Login</Link></p>

        <Form.Group controlId="formNama">
          <Form.Label>Nama</Form.Label>
          <Form.Control className="atas" type="text" placeholder="jhondoe" />
        </Form.Group>

        <Form.Group controlId="formUserID">
          <Form.Label>User ID</Form.Label>
          <Form.Control className="tengah" type="text" placeholder="jhondoe" />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className="tengah" type="password" placeholder="password" />
        </Form.Group>

        <Form.Group controlId="formUlangiPassword">
          <Form.Label>Verifikasi Password</Form.Label>
          <Form.Control className="bawah" type="password" placeholder="password" />
        </Form.Group>

        <Button className="w-100 mt-3">Registrasi</Button>
      </Form>
    </main>
  );
}

export default Register;
