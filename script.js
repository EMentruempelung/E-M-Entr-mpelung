function submitForm(e){
  e.preventDefault();
  const name = encodeURIComponent(document.getElementById('name').value || '');
  const phone = encodeURIComponent(document.getElementById('phone').value || '');
  const date = encodeURIComponent(document.getElementById('date').value || '');
  const message = encodeURIComponent(document.getElementById('message').value || '');
  const to = 'ementruempelung@web.de';
  const subject = encodeURIComponent('Kontaktanfrage von Website');
  const body = `Name: ${name}%0A%0ATelefon: ${phone}%0A%0AWunschtermin: ${date}%0A%0ANachricht:%0A${message}`;
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
}
