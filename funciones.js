const modal = document.getElementById('stepsModal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');

// abrir/cerrar modal
openBtn.onclick = () => modal.style.display = 'block';
closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

// scroll suave al seleccionar paso
document.querySelectorAll('.modal-content li[data-target]').forEach(item => {
  item.addEventListener('click', () => {
    const target = document.getElementById(item.getAttribute('data-target'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      modal.style.display = 'none'; // cierra modal
    }
  });
});