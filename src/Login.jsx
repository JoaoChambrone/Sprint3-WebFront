import React, { useState, useEffect } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  
  // Recupere a cor de fundo preferida do localStorage durante a inicialização
  useEffect(() => {
    const savedBackgroundColor = localStorage.getItem('backgroundColor');
    if (savedBackgroundColor) {
      setBackgroundColor(savedBackgroundColor);
    }
  }, []);

  const handleLogin = () => {
    // Verifique se o nome de usuário e a senha correspondem (simulação)
    if (username === 'usuario' && password === 'senha') {
      // Armazene o nome de usuário na sessionStorage
      sessionStorage.setItem('username', username);
      alert('Login bem-sucedido!');
    } else {
      alert('Login falhou. Verifique seu nome de usuário e senha.');
    }
  };

  // Função para salvar a cor de fundo preferida no localStorage
  const handleSaveBackgroundColor = () => {
    localStorage.setItem('backgroundColor', backgroundColor);
    alert('Cor de fundo preferida salva com sucesso!');
  };

  return (
    <>
    <div className='login' style={{ backgroundColor }}>
      <h1 id="ecomti" style={{ backgroundColor }}>Login</h1>
      <h1 id="ecomti" style={{ backgroundColor }}>Username:</h1>
      <input
        type="text"
        placeholder="Nome de usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <h1 id="ecomti" style={{ backgroundColor }}>Senha:</h1>
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

        <input
          type="text"
          placeholder="Cor Favorita (Em inglês)"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
        <button onClick={handleSaveBackgroundColor}>Salvar Cor de Fundo</button>
    </div>
    </>
  );
};

export default Login;