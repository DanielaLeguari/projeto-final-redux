import React from 'react';

const CardColecionavel = ({id, titulo, descricao, valor, imagemUrl}) => {
  return (
    <div>
      <p>{titulo}</p>
      <img src={imagemUrl} alt=""></img>
      <p>Descrição: {descricao}</p>
      <p>R${valor}</p>
    </div>
  );
}

export default CardColecionavel;
