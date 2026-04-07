const links = document.querySelectorAll(".header-menu a");

links.forEach((link) => {
  let url = location.href;
  let href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
});

// ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

parametros.forEach((p) => {
  const elemento = document.getElementById(p);
  elemento.checked = true;
  console.log(p);
});
