function hideBar(e){
  e.preventDefault();
  var sidebar=document.querySelector(".sidebar");
 sidebar.style.display="none"
}
function showBar(e){
  e.preventDefault();
  var sidebar=document.querySelector(".sidebar");
  sidebar.style.display="block"
}

function toggleTheme(theme) {
  const body = document.body;
  const themeToggler = document.getElementById('themeToggler');
  const containers = document.querySelectorAll('.container');

  if (theme === 'light') {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
  } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
  }

  containers.forEach(container => {
      container.classList.toggle('dark-theme', theme === 'dark');
      container.classList.toggle('light-theme', theme === 'light');
  });

  themeToggler.children[0].classList.toggle('active', theme === 'light');
  themeToggler.children[1].classList.toggle('active', theme === 'dark');
}