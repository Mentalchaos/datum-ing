import Button from '../../Button/Index';
import Form from 'react-bootstrap/Form';
import "./userdata.css";

const UserData = ({ next, userInformation, setUserInformation }) => {

  const { email, username, company, phoneNumber } = userInformation;

  const handleChange = e => {
    const { name, value } = e.target;
    setUserInformation({
      ...userInformation,
      [name]: value
    });
  };

  console.log('userInformation', userInformation);

  return (
    <div className="user-data">
      <p><strong>Ingrese la siguiente información para poder contactarlo</strong></p>
      <Form>
        <Form.Group className="mb-3" controlId="username">
          <Form.Control 
            className="inputs" 
            onChange={handleChange} 
            value={username} 
            name="username"
            type="text" 
            placeholder="Nombre completo" 
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="company">
          <Form.Control 
            className="inputs" 
            onChange={handleChange} 
            value={company} 
            name="company"
            type="text" 
            placeholder="Empresa de la cual nos contacta" 
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control 
            className="inputs" 
            onChange={handleChange} 
            value={email} 
            name="email"
            type="email" 
            placeholder="Ingresa tu correo" 
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phoneNumber">
          <Form.Control 
            className="inputs" 
            onChange={handleChange} 
            value={phoneNumber} 
            name="phoneNumber"
            type="text"
            placeholder="Número telefonico" 
          />
        </Form.Group>
        <Button text="Siguiente" onClick={next} />
      </Form>
    </div>
  )
}

UserData.displayName = 'UserData';

export default UserData;
