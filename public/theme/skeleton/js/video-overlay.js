function openNav(el) {
  document.getElementById(el.dataset.target).style.visibility = "visible";
}

function closeNav(el) {
  el.parentNode.style.visibility = "hidden";
}