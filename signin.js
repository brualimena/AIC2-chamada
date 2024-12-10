const backendUrl = 'http://localhost:3000'; // URL do backend NestJS

document.getElementById('signinAlunoForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  const data = {
    email: document.getElementById('alunoEmailLogin').value,
    password: document.getElementById('alunoPasswordLogin').value,
  };
  try {
    const response = await fetch(`${backendUrl}/signin-aluno`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (response.ok) {
      document.getElementById('signinAlunoMessage').innerText = 'Login de aluno realizado com sucesso!';
      document.getElementById('signinAlunoMessage').classList.add('text-success');
    } else {
      document.getElementById('signinAlunoMessage').innerText = `Erro ao fazer login de aluno: ${result.message}`;
      document.getElementById('signinAlunoMessage').classList.add('text-danger');
    }
  } catch (error) {
    document.getElementById('signinAlunoMessage').innerText = 'Erro ao conectar com o servidor.';
    document.getElementById('signinAlunoMessage').classList.add('text-danger');
  }
});

document.getElementById('signinProfessorForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  const data = {
    email: document.getElementById('professorEmailLogin').value,
    password: document.getElementById('professorPasswordLogin').value,
  };
  try {
    const response = await fetch(`${backendUrl}/signin-professor`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (response.ok) {
      // Armazenar o nome do professor no localStorage
      localStorage.setItem('professorNome', result.nome);
      // Redirecionar para a página de boas-vindas do professor
      window.location.href = 'professor.html';
    } else {
      document.getElementById('signinProfessorMessage').innerText = `Erro ao fazer login de professor: ${result.message}`;
      document.getElementById('signinProfessorMessage').classList.add('text-danger');
    }
  } catch (error) {
    document.getElementById('signinProfessorMessage').innerText = 'Erro ao conectar com o servidor.';
    document.getElementById('signinProfessorMessage').classList.add('text-danger');
  }
});