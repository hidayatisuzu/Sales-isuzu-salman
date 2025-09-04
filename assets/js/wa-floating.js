// wa-floating.js
// Config: ganti nomor atau pesan default di sini
const WA_NUMBER = '6285864966633';
const WA_PREFILLED_MESSAGE = 'Halo Salman, saya tertarik dengan truk Isuzu.';

// Create floating WA button
(function(){
  function createButton(){
    const a = document.createElement('a');
    a.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_PREFILLED_MESSAGE)}`;
    a.className = 'wa-floating';
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.setAttribute('aria-label','Chat Sales Salman di WhatsApp');
    a.innerHTML = `<span class="wa-icon" aria-hidden="true">💬</span><span class="wa-tooltip">Chat Sales Salman</span>`;
    document.body.appendChild(a);

    // keyboard accessibility
    a.tabIndex = 0;
    a.addEventListener('keydown', (e) => { if(e.key === 'Enter') a.click(); });
  }

  // styles injected to avoid extra CSS file for single component
  function injectStyles(){
    const s = document.createElement('style');
    s.textContent = `
      .wa-floating{position:fixed;right:16px;bottom:16px;background:linear-gradient(180deg,#25d366,#128c7e);color:#fff;padding:12px 14px;border-radius:999px;display:flex;align-items:center;gap:8px;box-shadow:0 6px 20px rgba(37,211,102,0.18);text-decoration:none;z-index:9999}
      .wa-floating .wa-icon{font-size:18px}
      .wa-floating .wa-tooltip{display:none}
      .wa-floating:focus{outline:3px solid rgba(0,0,0,0.12)}
      @media(min-width:480px){ .wa-floating .wa-tooltip{display:inline-block;font-weight:600} }
    `;
    document.head.appendChild(s);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ()=>{ injectStyles(); createButton(); });
  } else { injectStyles(); createButton(); }
})();
