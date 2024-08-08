function setTheme(){
  const getTheme =localStorage.getItem("darkMode")
  if(getTheme === "true"){
    document.body.classList.add('dark-mode');
  }else{
    document.body.classList.remove('dark-mode');
  }
}

document.getElementById('mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const getModeTheme = document.body.classList.contains("dark-mode")

    console.log(getModeTheme)
    localStorage.setItem("darkMode", getModeTheme)
    this.textContent = document.body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
  });
  
  document.getElementById('back-button').addEventListener('click', function() {
    window.location.href = 'index.html';
  });


  setTheme();
