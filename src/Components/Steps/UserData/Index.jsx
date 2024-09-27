import Button from '../../Button/Index';
import Form from 'react-bootstrap/Form';
import "./userdata.css";

const UserData = ({ next }) => {
  return (
    <div className="user-data">
      <p>Para comenzar necesitamos que nos proporciones tus datos</p>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="password" placeholder="Ingresa tu correo" />
        </Form.Group>
        <Button text="Siguiente" onClick={next} />
      </Form>
    </div>
  )
}

export default UserData;
