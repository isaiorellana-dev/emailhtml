// import './App.css';
import logo from './assets/isotipo.png'

function App() {
  return (
    <div className="applicant">
      <h1>Aplicacion de Trabajo</h1>
      <div className="container-1" >
        <div className="dato-container" >
          <h2>Puesto al que aplica:</h2>
          <p>Desarrollador Frontend</p>
        </div>
        <div className="dato-container" >
          <h2>Portafolio</h2>
          <p><a href="link.com">link al portafolio</a></p>
        </div>
      </div>
      <div className="container-2">
        <div className="dato-container" >
          <h2>Nombre:</h2>
          <p>Isai Orellana</p>
        </div>
        <div className="dato-container" >
          <h2>Telefono:</h2>
          <p>12345678</p>
        </div>
        <div className="dato-container" >
          <h2>Email:</h2>
          <p>isai@gmail.com</p>
        </div>
      </div>
      <div className="dato-container msg" >
        <h2>Comentario:</h2>
        <p>Vero diam erat eirmod dolor vel nobis clita facilisi sed aliquyam sea takimata sanctus. Tempor dolore vel at accusam clita odio dolore et dolore ipsum erat. Ipsum takimata sit diam labore facilisis. Elit invidunt gubergren consetetur sed erat feugiat dolore tempor dolor lorem et. Amet ea duis facer dolor magna et takimata sea. Sanctus elit invidunt kasd rebum vel dolore lorem ut ex volutpat takimata sit. Vulputate ipsum quis amet tation consetetur magna diam accusam. No et at at. Iusto gubergren dolor et nostrud est. Voluptua justo et feugiat est ipsum dolores commodo gubergren tempor rebum ipsum ipsum molestie.</p>
      </div>
      <div className="container-2">
        <p>
          Correo enviado desde <a href="https://signscloud.com">signscloud.com</a>
        </p>
        <img
          src={logo}
        >
        </img>
      </div>
    </div>
  )
}

export default App
