function mostrarIframe(id) {
    document.getElementById(id).classList.remove('invisible');
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).classList.add('visible');
    document.getElementById(id).classList.add('flex');
  }

  function esconderIframe(id) {
    document.getElementById(id).classList.remove('visible');
    document.getElementById(id).classList.remove('flex');
    document.getElementById(id).classList.add('invisible');
    document.getElementById(id).classList.add('hidden');
  }