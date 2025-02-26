import Perfil from "./components/perfil/perfil"
import Switch from "./components/switch/Switch"


import "./App.css"
import Links from "./components/links/Links";
import SocialLinks from "./components/social.links/SocialLinks";
import Rodape from "./components/rodape/Rodape";

const App = () => {
  return (
<div id="App" className="dark">
<Perfil/>
<Switch />

<ul>
<Links />
<Links />
<Links />
<Links />
</ul>
<div id="socialLinks">
  <SocialLinks />
  <SocialLinks />
  <SocialLinks />
  <SocialLinks />
</div>
<Rodape />
</div>
  );
};

export default App