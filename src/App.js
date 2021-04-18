import './css/login.css';
import {useState} from "react";

function App() {
  const [email,setEmail] = useState();
  const [password,setPassw] = useState();

  const handleEmailEvent = evt=>setEmail(evt.target.value)
  const handlePasswordEvent = ({target:{value}}) =>setPassw(value)//desestructuracion
  const handleFormSubmit = (event) =>{
    event.preventDefault();//por default el boton al hacer submit refresca la pagina, con esta linea d codigo resteamos esa accion por default e impedimos que lo haga
    console.log(`Correo: ${email} password: ${password}`)
  }

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit} className="content">
        <h2>Iniciar Sesión</h2>
        <div className="input-field">
          <input value={email} onChange={handleEmailEvent} id="emailInput" type="email" className="validate"/>
          <label className="active" for="emailInput">Email</label>
        </div>
        <div className="input-field">
          <input value={password} onChange={handlePasswordEvent} id="passwordInput" type="password" className="validate"/>
          <label className="active" for="passwordInput">Password</label>
        </div>
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}

export default App;
