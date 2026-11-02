// Mobile menu
const toggle = document.querySelector('.menu-toggle');
const links = document.getElementById('nav-links');

if (toggle && links) {
  const setOpen = (open) => {
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  toggle.addEventListener('click', () => setOpen(!links.classList.contains('open')));
  links.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
}

// Footer year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Contact form: send in the background so visitors stay on the page
const form = document.querySelector('.contact-form');
if (form) {
  const status = form.querySelector('.form-status');
  form.addEventListener('submit', async (e) => {
    if (form.action.includes('YOUR_FORM_ID')) return; // not configured yet: let the browser handle it
    e.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    status.className = 'form-status';
    status.textContent = 'Sending…';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('Request failed');
      form.reset();
      status.classList.add('ok');
      status.textContent = "Thanks, your message is on its way. We'll be in touch soon.";
    } catch {
      status.classList.add('err');
      status.textContent = 'Something went wrong. Please email hello@robopixelstudio.com instead.';
    } finally {
      button.disabled = false;
    }
  });
}
