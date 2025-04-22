import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Promotion from "./components/Promotion";
import { useState } from "react";



function App () {
  //quando clicar adicionar o item ao carrinho
const [carrinhoItem, setCarrinhoItem] = useState([]);
// mostrar o carrinho
const [mostrarCarrinho, setMostrarCarrinho] = useState(false);
const adicionarCarrinho = (produto) => {
  setCarrinhoItem((produtosAnteriores)=>{
    const existing = produtosAnteriores.find((item) => item.id === produto.id);
    if(existing){
      return produtosAnteriores.map((item) => {
        if(item.id === produto.id){
          return {...item, quantidade: item.quantidade + 1}
        }
        : item
      );
      else{
        return [...produtosAnteriores, {...produto, quantidade: 1}];
      });
  };
  return (
    <>
      <Header contadoJogos={2} />
      <Promotion adicionarCarrinho={adicionarCarrinho} />
    </>
  );
};

export default App;
