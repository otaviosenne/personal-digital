function mostrarIframe(id) {
    document.getElementById(id).classList.remove('invisible');
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).classList.add('visible');
    document.getElementById(id).classList.add('block');
  }

  function esconderIframe(id) {
    document.getElementById(id).classList.remove('block');
    document.getElementById(id).classList.add('hidden');
  }