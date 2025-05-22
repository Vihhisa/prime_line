// Scroll suave para as seções do menu
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Modal de projetos (abre a imagem com título e descrição)
const projetos = document.querySelectorAll('.projeto');
if (projetos.length > 0) {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  document.body.appendChild(modal);

  projetos.forEach(projeto => {
    projeto.addEventListener('click', () => {
      const imgSrc = projeto.querySelector('img').src;
      const title = projeto.querySelector('h3').textContent;
      const desc = projeto.querySelector('p').textContent;

      modal.innerHTML = `
        <div class="modal-content">
          <button class="close-btn">&times;</button>
          <img src="${imgSrc}" alt="${title}">
          <h3>${title}</h3>
          <p>${desc}</p>
        </div>
      `;
      modal.style.display = 'flex';

      modal.querySelector('.close-btn').addEventListener('click', () => {
        modal.style.display = 'none';
      });

      modal.addEventListener('click', e => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    });
  });
}

// Botão "Saber mais" dos pacotes
const botoes = document.querySelectorAll('.toggle-btn');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const descricao = botao.nextElementSibling;
    const estiloAtual = window.getComputedStyle(descricao).display;

    if (estiloAtual === 'none') {
      descricao.style.display = 'block';
    } else {
      descricao.style.display = 'none';
    }
  });
});

document.getElementById('form-whatsapp').addEventListener('submit', function(e) {
  e.preventDefault(); // Impede o envio padrão do formulário

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  const texto = `Olá! Meu nome é ${nome}. Meu e-mail é ${email}. Mensagem: ${mensagem}`;

  const numero = '55017988300165'; // 🔥

  const url = `https://wa.me/${55017988300165}?text=${encodeURIComponent(texto)}`;

  window.open(url, '_blank'); // Abre no WhatsApp
});
