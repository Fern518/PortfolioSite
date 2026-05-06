(
  function()
  {
  function ready(fn){ if(document.readyState!=='loading'){ fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }
  ready(function()
  {
    var overlay = document.createElement('div');
    overlay.id = 'lightbox-overlay';
    overlay.setAttribute('role','dialog');
    overlay.setAttribute('aria-modal','true');
    overlay.innerHTML = "<button class='lb-close' aria-label='Close' type='button'>&times;</button><img class='lb-img' alt=''><div class='lb-caption'></div>";
    document.body.appendChild(overlay);

    var imgEl = overlay.querySelector('.lb-img');
    var captionEl = overlay.querySelector('.lb-caption');

    function open(src, alt){
      imgEl.src = src;
      imgEl.alt = alt || '';
      captionEl.textContent = alt || '';
      overlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
    function close(){
      overlay.style.display = 'none';
      imgEl.removeAttribute('src');
      document.body.style.overflow = '';
    }

    overlay.addEventListener('click', function(e){
      if(e.target === overlay || e.target.classList.contains('lb-close')){ close(); }
    });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape') close(); });

    // Delegate clicks on any image element on the page
    document.body.addEventListener('click', function(e){
      var t = e.target;
      if(t && t.tagName === 'IMG' && t.classList.contains('lightbox')) {
        // Ignore tiny UI images like arrows used as backgrounds
        var rect = t.getBoundingClientRect();
        if(rect.width < 40 && rect.height < 40){ return; }
        e.preventDefault();
        open(t.currentSrc || t.src, t.alt);
      }
    }, true);
  });
})();
