document.addEventListener('click', function (e) {
  if (e.target.closest('.message__close-button')) {
    const message = e.target.closest('.message');
    if (message) {
      message.remove();
    }
  }
});
