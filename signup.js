const backendUrl = 'http://localhost:3000'; // URL do backend NestJS

document.getElementById('signupAlunoForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  const data = {
    id: document.getElementById('alunoId').value,
    nome: document.getElementById('alunoNome').value,
    email: document.getElementById('alunoEmail').value,
    cpf: document.getElementById('alunoCpf').value,
    password: document.getElementById('alunoPassword').value,
  };
  try {
    const response = await fetch(`${backendUrl}/signup-aluno`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (response.ok) {
      document.getElementById('signupAlunoMessage').innerText = 'Aluno cadastrado com sucesso!';
      document.getElementById('signupAlunoMessage').classList.add('text-success');
    } else {
      document.getElementById('signupAlunoMessage').innerText = `Erro ao cadastrar aluno: ${result.message}`;
      document.getElementById('signupAlunoMessage').classList.add('text-danger');
    }
  } catch (error) {
    document.getElementById('signupAlunoMessage').innerText = 'Erro ao conectar com o servidor.';
    document.getElementById('signupAlunoMessage').classList.add('text-danger');
  }
});

document.getElementById('signupProfessorForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  const data = {
    id: document.getElementById('professorId').value,
    nome: document.getElementById('professorNome').value,
    email: document.getElementById('professorEmail').value,
    cpf: document.getElementById('professorCpf').value,
    password: document.getElementById('professorPassword').value,
  };
  try {
    const response = await fetch(`${backendUrl}/signup-professor`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (response.ok) {
      document.getElementById('signupProfessorMessage').innerText = 'Professor cadastrado com sucesso!';
      document.getElementById('signupProfessorMessage').classList.add('text-success');
    } else {
      document.getElementById('signupProfessorMessage').innerText = `Erro ao cadastrar professor: ${result.message}`;
      document.getElementById('signupProfessorMessage').classList.add('text-danger');
    }
  } catch (error) {
    document.getElementById('signupProfessorMessage').innerText = 'Erro ao conectar com o servidor.';
    document.getElementById('signupProfessorMessage').classList.add('text-danger');
  }
});