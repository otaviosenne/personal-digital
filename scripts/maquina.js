function alternarIframe(id, idsParaEsconder) {
  const element = document.getElementById(id);
  
  if (element.classList.contains('hidden') || element.classList.contains('invisible')) {
      // Se o elemento está escondido, mostra ele
      mostrarIframe(id);
      esconderIframe(...idsParaEsconder);
  } else {
      // Se o elemento está visível, esconde ele
      esconderIframe(id);
  }
}

function mostrarIframe(id) {
    document.getElementById(id).classList.remove('invisible');
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).classList.add('visible');
    document.getElementById(id).classList.add('flex');
  }

  function esconderIframe(...ids) {
    ids.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.remove('visible');
            element.classList.remove('flex');
            element.classList.add('invisible');
            element.classList.add('hidden');
        }
    });
}
