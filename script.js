function formularAbsenden(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const telefon = document.getElementById("telefon").value;
  const datum = document.getElementById("datum").value;
  const nachricht = document.getElementById("nachricht").value;

  const mailto = `mailto:ementruempelung@web.de?subject=Anfrage%20von%20${encodeURIComponent(name)}&body=Name:%20${encodeURIComponent(name)}%0ATelefon:%20${encodeURIComponent(telefon)}%0AWunschtermin:%20${encodeURIComponent(datum)}%0ANachricht:%0A${encodeURIComponent(nachricht)}`;
  
  window.location.href = mailto;
}
