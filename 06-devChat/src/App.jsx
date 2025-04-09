import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css'
import { useState } from 'react';
import Join from "./pages/join";
import Chat from "./pages/chat";

function App() {
 const [chatVisibility, setChatVisibility] = useState(false);
 const [socket, setSocket] = useState(null);
  return (
 
   <div id="App" className="vh-100 d-flex justify-content-center align-items-center text-light">
{chatVisibility ? ( <Chat socket={socket}/> ) : ( <Join setSocket={setSocket} visibility={setChatVisibility}/>)}
    </div>
   
  )
}

export default App
