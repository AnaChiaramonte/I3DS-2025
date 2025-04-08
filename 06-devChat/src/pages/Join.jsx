import React, {useRef} from 'react'
import io from 'socket.io-client';

const Join = (props) => {
    //hooks
    const usernameRef = useRef ();
    const handleSubmit = async () => {
 
    const username = usernameRef.current.value;
    if (!username.trim() || username.length < 3) {
   alert('Digite um nome de usuário');
   return;
    }
    //criando a conexão com o sevidor socket
    //vai, espera retorno de alguma coisa e envia
const servidorSoket= await io.connect("http://192.168.10.123:3001")
servidorSoket.emit("set_username", username);
    //abrindo a pagina de chat
    props.setSocket(servidorSoket);
    props.visibility(true);
}
  return  <div>
  <div className="text-center">
      <h1>devChat</h1>


      <div
        id="join-box"
        className="mt-4 bg-secondary rounded-4 py-4 px-5  d-flex flex-column justify-content-center align-items-center gap-3"
      >
        <h3>Bem-vindo ao devChat!</h3>
        <div className="form-floating mb-3">
          <input
            ref= {usernameRef}
            type="text"
            className="form-control"
            id="Nome de usuário"
            placeholder="Nome de usuário"
            onKeyDown={(e) => e.key == "Enter" && handleSubmit()}
          />
          <label htmlFor="floatingInput" className="">
            Nome de usuário
          </label>
        </div>
        <button
          className="btn btn-light px-5 py-2"
          //cuida do envio do submit
          onClick={() =>handleSubmit()}
        >
          Entrar
        </button>
      </div>
    </div>
    </div>
};

export default Join