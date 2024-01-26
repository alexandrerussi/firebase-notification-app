// src/MeuComponente.js
import React, { useState } from 'react';

function MeuComponente() {
  const [mensagem, setMensagem] = useState('Notificação com Firebase');

  return (
    <div>
      <h1>{mensagem}</h1>
      {/* <button onClick={() => setMensagem('Mensagem alterada!')}>Mudar Mensagem</button> */}
    </div>
  );
}

export default MeuComponente;
