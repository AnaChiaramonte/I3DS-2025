import "./App.css";
import Perfil from "./components/perfil/perfil";
import Switch from "./components/switch/Switch";
import foto from "./img/eu.png";

import Links from "./components/links/Links";
import SocialLinks from "./components/social.links/SocialLinks";
import Rodape from "./components/rodape/Rodape";
import { useState } from "react";

const App = () => {
  const [isLight, setIsLight] = useState(true);
  const troca = () => {
    setIsLight((anterior) => !anterior)
    
  }

  return (
    <div id="App" className={isLight ? "light" : ""}>
      <Perfil fotoPerfil={foto}>@AneLeure</Perfil>
      <Switch troca={troca} isLight={isLight} />

      <ul>
        <Links link={"https://github.com/AnaChiaramonte"}>Git Hub </Links>
        <Links link={"https://Insagram.com/anaaalopeess"}>Instagram </Links>
        <Links link={"https://Youtube.com/"}>Portifólio </Links>
        <Links link={"https://linkedin.com/"}>Projetos </Links>
      </ul>
      <div id="socialLinks">
        <SocialLinks
          link={"https://github.com/AnaChiaramonte"}
          icon={"logo-github"}
        />
        <SocialLinks
          link={"https://Insagram.com/anaaalopeess"}
          icon={"logo-Instagram"}
        />
        <SocialLinks link={"https://Youtube.com/"} icon={"logo-youtube"} />
        <SocialLinks link={"https://linkedin.com/"} icon={"logo-linkedin"} />
      </div>
      <Rodape>Ane Leure</Rodape>
    </div>
  );
};

export default App;
