

document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (username && title && content) {
        const post = {
            username,
            title,
            content
        };

        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));

        window.location.href = 'blog.html';
    } else {
        alert('Please complete the form');
    }
});

document.getElementById('mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const getModeTheme = document.body.classList.contains("dark-mode")

    console.log(getModeTheme)
    localStorage.setItem("darkMode", getModeTheme)

    this.textContent = document.body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
  });

  function setTheme(){
    const getTheme =localStorage.getItem("darkMode")
    if(getTheme === "true"){
      document.body.classList.add('dark-mode');
    }else{
      document.body.classList.remove('dark-mode');
    }
  }

  setTheme()