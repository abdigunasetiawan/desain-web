const expandButtons = Array.from(document.querySelectorAll('button.expand__trigger'));
const expandBody = Array.from(document.querySelectorAll('.expand .expand__body'));

function resetExpandClass() {
  expandBody.forEach(el => {
    el.classList.remove('expand');
  });
}

expandButtons.forEach((btn, i) => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    if (expandBody[i].classList.contains('expand')) {
      expandBody[i].classList.remove('expand');
      expandButtons[i].textContent = 'Isi Data';
    } else {
      resetExpandClass();
      expandButtons[i].textContent = 'Tutup';
      expandBody[i].classList.add('expand');
    }
  });
});

const simpan = document.querySelector('button#simpan');
const konfirmasi = document.querySelector('input#konfirmasi');

konfirmasi.addEventListener('click', () => {
  if (konfirmasi.checked) {
    simpan.classList.add('enabled');
    simpan.classList.remove('disabled');
    simpan.removeAttribute('disabled');
  } else {
    simpan.classList.remove('enabled');
    simpan.classList.add('disabled');
    simpan.setAttribute('disabled', true);
  }
});

window.addEventListener('keydown', e => {
  if (e.key == 'a') {
    document.body.classList.toggle('debug');
  }
});
