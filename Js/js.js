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

// Animação de entrada nos cards ao fazer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.team-card, .project-card, .about-card, .service-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Marcar link ativo na navbar com base na página atual
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  link.classList.remove('active');
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});