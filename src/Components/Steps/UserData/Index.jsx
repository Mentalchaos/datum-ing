import Button from '../../Button/Index';
import Form from 'react-bootstrap/Form';
import "./userdata.css";

const UserData = ({ next, userInformation, setUserInformation }) => {

  return (
    <div className="user-data">
      <p>Para comenzar necesitamos que nos proporciones tus datos</p>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control onChange={e => setUserInformation({ email: userInformation.email, name: e.target.value })} value={userInformation?.name} type="text" placeholder="Ingresa tu nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={e => setUserInformation({ name: userInformation.name, email: e.target.value })} value={userInformation?.email} type="email" placeholder="Ingresa tu correo" />
        </Form.Group>
        <Button text="Siguiente" onClick={next} />
      </Form>
    </div>
  )
}

UserData.displayName = 'UserData';

export default UserData;
