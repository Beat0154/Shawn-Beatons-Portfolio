function switchTheme() {
  var check = document
  .getElementById('theme_css')
  .classList[0] === 'styles';

  var element = document.getElementById('theme_css');


  if (check) {
   element.href = 'css/better-styles.css';
   element.classList.remove('styles')
   element.classList.add('better-styles');
  } else {
   element.href = 'css/styles.css';
   element.classList.remove('better-styles')
   element.classList.add('styles');
  }

}