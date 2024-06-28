const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const toggleDiv = document.getElementById('toggleDiv');

openBtn.addEventListener('click', function () {
  toggleDiv.style.display = 'block';
});
closeBtn.addEventListener('click', function () {
  toggleDiv.style.display = 'none';
});
