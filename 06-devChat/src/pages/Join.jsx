import React, { useRef } from "react";

const Join = (props) => {
  const usernameRef = useRef();

  const handleSubmit = () => {
    const username = usernameRef.current.value;
    if (!username.trim() || username.length < 3) {
      alert("Digite um nome de usuário válido");
      return;
    }

    // Cria conexão WebSocket nativa
    const socket = new WebSocket("http://192.168.0.101:3001/ws");
    

    // Quando conectar com sucesso
    socket.onopen = () => {
      console.log("Conectado ao WebSocket!");
      const joinMessage = {
        type: "join",
        author: username,
      };
      
      socket.send(JSON.stringify(joinMessage));
      
      props.setSocket(socket); // Salva o socket no estado
      props.visibility(true); // Vai para a tela do chat
    };

    // Se der erro
    socket.onerror = (err) => {
      console.error("Erro na conexão WebSocket:", err);
      alert("Erro ao conectar com o servidor.");
    };
  };

  return (
    <div className="text-center">
      <h1>devChat</h1>
      <div
        id="join-box"
        className="mt-4 bg-secondary rounded-4 py-4 px-5 d-flex flex-column justify-content-center align-items-center gap-3"
      >
        <h3>Bem-vindo ao devChat!</h3>
        <div className="form-floating mb-3">
          <input
            ref={usernameRef}
            type="text"
            className="form-control"
            id="Nome de usuário"
            placeholder="Nome de usuário"
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <label htmlFor="floatingInput">Nome de usuário</label>
        </div>
        <button className="btn btn-light px-5 py-2" onClick={handleSubmit}>
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Join;
