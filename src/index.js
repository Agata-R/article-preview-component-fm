document.addEventListener('DOMContentLoaded', function () {
  let btnShare = document.getElementById('btn-share');
  let share = document.getElementById('share');

  function toggleShare() {
    share.classList.toggle('visible');
    btnShare.classList.toggle('active');
  }

  btnShare.addEventListener('click', toggleShare, false);

});
