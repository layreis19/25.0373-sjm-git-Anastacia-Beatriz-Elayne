// Menu mobile toggle
function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('open');
}

// Fechar menu ao clicar num link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// Formulário de contacto
function enviarFormulario() {
  const nome = document.getElementById('nome')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const mensagem = document.getElementById('mensagem')?.value.trim();
  const success = document.getElementById('form-success');

  if (!nome || !email || !mensagem) {
    alert('Por favor preencha pelo menos o nome, email e descrição do problema inútil.');
    return;
  }

  if (success) {
    success.style.display = 'block';
    setTimeout(() => { success.style.display = 'none'; }, 5000);
  }

  ['nome', 'email', 'tipo', 'urgencia', 'mensagem'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}