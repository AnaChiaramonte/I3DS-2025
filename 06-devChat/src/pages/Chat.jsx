import React, { useEffect, useRef, useState } from "react";

const Chat = ({ socket, username }) => {
  const [messageList, setMessageList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const messageRef = useRef();
  const bottomRef = useRef();

  


  

  useEffect(() => {
    if (!socket) return;

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setMessageList((prev) => [...prev, data]);
      } catch (err) {
        console.error("Erro ao receber:", err);
      }
    };

    return () => {
      socket.onmessage = null;
    };
  }, [socket]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  const handleSubmit = () => {
    const message = messageRef.current.value;

    if (!socket || socket.readyState !== WebSocket.OPEN) {
      setShowModal(true);
      let timer = 5;
      setCountdown(timer);

      const interval = setInterval(() => {
        timer -= 1;
        setCountdown(timer);
        if (timer <= 0) {
          clearInterval(interval);
          window.location.reload();
        }
      }, 1000);

      return;
    }

    if (!message.trim()) return;

    const data = {
      type: "message",
      author: username,
      text: message,
    };

    socket.send(JSON.stringify(data));

    messageRef.current.value = "";
    messageRef.current.focus();
  };

  return (
    <div>
      {showModal && (
        <div
          className="modal show d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Erro de conexão</h5>
              </div>
              <div className="modal-body">
                <p>
                  A conexão caiu. A página vai recarregar em{" "}
                  <strong>{countdown}</strong> segundos.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => window.location.reload()}
                >
                  Recarregar agora
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat */}
      <div
        id="chat-container"
        className="m-4 bg-secondary rounded-4 p-3 d-flex flex-column"
      >
        <div id="chat-body" className="d-flex flex-column gap-3 h-100">
          {messageList.map((message, index) => {
            if (message.type === "join") {
              return (
                <div
                  className="text-center text-white-50 small fst-italic"
                  key={index}
                >
                  {message.author} entrou no chat
                </div>
              );
            }

            const isMine = message.author === username;
            return (
              <div
                key={index}
                className={`${
                  isMine
                    ? "align-self-end ms-5 bg-dark text-white"
                    : "align-self-start me-5 bg-light text-dark"
                } rounded-3 p-2`}
              >
                <div className="fw-bold">{message.author}</div>
                <div>{message.text}</div>
              </div>
            );
          })}
          <div ref={bottomRef} />
        </div>

        <div id="chat-footer" className="input-group mt-3">
          <input
            ref={messageRef}
            type="text"
            className="form-control bg-dark-subtle border-0"
            placeholder="Mensagem"
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <button className="btn btn-dark input-group-text" onClick={handleSubmit}>
            <i className="bi bi-send-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
