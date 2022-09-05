import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import useForm from '../../hooks/useForm';
import { types } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { Button, Form } from 'react-bootstrap';
import logo from '../../assets/imgs/pokemon-logo.png';

const Login = () => {

  const { authState, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch({
      type: types.LOGIN,
      payload: {
        name: values.email
      }
    });
    navigate('/', {
      replace: true   //elimina el registro de navegación (para q el usuario no pueda volver atras en el historial)
    });

    console.log(values)
  }

  const [values, handleChange, handleSubmit] = useForm({
    email: '',
    password: ''
  }, handleLogin);

  return (
    <>
    <section className={styles.login}>
      <div className={styles.left}>
        <div className={`${styles.one} rounded`}>
          <div className="container text-center">
            <img className={styles.pokemonLogo} src={logo} alt=""/>
          </div>
        </div>
      </div>
      <div className={`${styles.right} rounded`}>
        <div className={`${styles.two} rounded`}>
          <div className="container">
            <div className={`${styles.needHelp}`}>
              <a href="#">Need help?</a>
            </div>
            <h3 className="fw-bold text-center py-4">Log in</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className={styles.bold}>Email</Form.Label>
                <Form.Control className={styles.formControl} type="email" name="email" value={values.email} onChange={handleChange} placeholder="joe@email.com" required/>
              </Form.Group>
              <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Label className={styles.bold}>Password</Form.Label>
                <Form.Control className={styles.formControl} type="password" name="password" value={values.password} onChange={handleChange} placeholder="Enter your Password" required/>
                <Form.Text className={`${styles.forgotPassword}`}>
                  <p className="text-end"><a href="#">forgot password?</a></p>
                </Form.Text>
              </Form.Group>

              <div className="d-grid">
                <Button className={styles.btnLogin} type="submit">
                  Login
                </Button>
              </div>
            </Form>
          </div>        
        </div>
      </div>
    </section>
    </>
  )

}

export default Login