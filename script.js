// fill year
    document.getElementById('year').textContent = new Date().getFullYear();

    // modal logic
    const modal = document.getElementById('modal');
    const frame = document.getElementById('previewFrame');
    const modalTitle = document.getElementById('modalTitle');
    let currentUrl = '';

    function openPreview(url, title){
      currentUrl = url;
      modalTitle.textContent = title || 'Project Preview';
      frame.src = url;
      modal.classList.add('show');
    }

    function closePreview(){
      frame.src = 'about:blank';
      modal.classList.remove('show');
      currentUrl = '';
    }

    document.querySelectorAll('.project').forEach(p => {
      p.addEventListener('click', ()=> openPreview(p.dataset.url, p.querySelector('.proj-title').innerText));
      p.addEventListener('keydown', (e)=>{ if(e.key === 'Enter') openPreview(p.dataset.url, p.querySelector('.proj-title').innerText) });
    });

    document.getElementById('closeModal').addEventListener('click', closePreview);
    document.getElementById('openNew').addEventListener('click', ()=>{ if(currentUrl) window.open(currentUrl,'_blank') });

    function openLink(e,url){ e.stopPropagation(); window.open(url,'_blank') }

    // contact form -> open mailto (simple, no backend required)
    function sendMail(e){
      e.preventDefault();
      const fm = e.target;
      const name = encodeURIComponent(fm.name.value.trim());
      const email = encodeURIComponent(fm.email.value.trim());
      const message = encodeURIComponent(fm.message.value.trim());
      const subject = encodeURIComponent('Opportunity / Internship from ' + name);
      const body = encodeURIComponent('Name: '+name+'%0AEmail: '+email+'%0A%0A'+decodeURIComponent(message));
      window.location.href = `mailto:anilkumarusansi99@gmail.com?subject=${subject}&body=${body}`;
    }

    // quick contact button
    document.getElementById('contactBtn').addEventListener('click', ()=>{
      document.getElementById('contact').scrollIntoView({behavior:'smooth'});
      document.querySelector('#contactForm [name=name]').focus();
    });

    // small accessibility improvement: close modal on escape
    window.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closePreview(); });