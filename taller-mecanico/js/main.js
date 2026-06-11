/* ─────────────────────────────────────────────
   AutoTaller García — Scripts principales
───────────────────────────────────────────── */

// ── Navbar: sombra al hacer scroll ──────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ── Menú hamburguesa ─────────────────────────
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen.toString());
});

// Cerrar menú al hacer clic en un enlace
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ── Active nav link por sección visible ──────
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${id}`
          ? 'var(--blanco)'
          : '';
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

// ── Scroll reveal de tarjetas ─────────────────
const revealItems = document.querySelectorAll(
  '.service-card, .gallery-item, .contacto-datos li, .nosotros-valores li'
);

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
  revealObserver.observe(el);
});

// Respeta prefers-reduced-motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  revealItems.forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
    el.style.transition = 'none';
  });
}

// ── Formulario de contacto ───────────────────
const contactForm   = document.getElementById('contact-form');
const formSuccess   = document.getElementById('form-success');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre   = contactForm.nombre.value.trim();
    const telefono = contactForm.telefono.value.trim();
    const mensaje  = contactForm.mensaje.value.trim();

    if (!nombre || !telefono || !mensaje) {
      shakeForm();
      return;
    }

    // Simulación de envío (reemplazar con fetch a tu backend / EmailJS)
    const btn = contactForm.querySelector('[type="submit"]');
    btn.textContent = 'Enviando…';
    btn.disabled = true;

    setTimeout(() => {
      contactForm.hidden = true;
      formSuccess.hidden = false;
      formSuccess.removeAttribute('hidden');
    }, 1000);
  });
}

function shakeForm() {
  const form = document.getElementById('contact-form');
  form.style.animation = 'shake 0.4s ease';
  form.addEventListener('animationend', () => {
    form.style.animation = '';
  }, { once: true });
}

// Inyectar keyframe shake si no existe
if (!document.getElementById('kf-shake')) {
  const style = document.createElement('style');
  style.id = 'kf-shake';
  style.textContent = `
    @keyframes shake {
      0%,100%{ transform: translateX(0); }
      20%    { transform: translateX(-8px); }
      40%    { transform: translateX(8px); }
      60%    { transform: translateX(-5px); }
      80%    { transform: translateX(5px); }
    }
  `;
  document.head.appendChild(style);
}
