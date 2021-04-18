import './css/login.css';
import {useState, useEffect} from "react";

const jsonData = [{
  key:"1",
  name:"Ari"
},{
  key:"2",
  name:"Jon"
},{
  key:"3",
  name:"Andy"
}]

const App=()=> {
  const [email,setEmail] = useState();
  const [password,setPassw] = useState();
  const [isLogged,setIsLogged] = useState(false);

  const handleEmailEvent = evt=>setEmail(evt.target.value)
  const handlePasswordEvent = ({target:{value}}) =>setPassw(value)//desestructuracion
  const handleFormSubmit = (event) =>{
    event.preventDefault();//por default el boton al hacer submit refresca la pagina, con esta linea d codigo resteamos esa accion por default e impedimos que lo haga
    setIsLogged(true)
    console.log(`Correo: ${email} password: ${password}`);
  }

  //componentDidUpdate cuando el componente se actualiza
  useEffect(()=>{
    //excelente para hacer llamadas de API y otros servicios
    console.log("Se actualizó el componente")

    return() =>{
      //cuando se hace un return es para que se ejecuté el codigo cuando se vaya a desmontar el componente
      //excelente para limpiar listeners, intervals y otras cosas mas que puedan afectar el rendimiento de la app
      console.log("will unmount")
    }
  });

  //componentDidMount se ejcuta cuando el componente se inicializa. Como el contructor
  useEffect(()=>{
    console.log("se montó el componente")
  },[]);

  //cuando un estado(state) cambia se ejecuta:
  useEffect(()=>{
    //se pueden pasar varios estados
    console.log("se actualizó email")
  },[email]);

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
        {/*{isLogged ? <h2>Is logged</h2>:undefined}*/}{/*One way*/}
        {isLogged&& <div>
        {
          jsonData.map(value=>( 
            <p key={value.key}> {value.name} </p>/*retornar todos los nombres que estan en el array de objetos*/
          ))
        }</div>} {/*renderizado condicional, si es true muestra el h2*/}
      </form>
    </div>
  );
}

export default App; 
