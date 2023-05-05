let submit = document.getElementById('submit').addEventListener('click', function run(e) {
    e.preventDefault();
    let uname = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let textinput = document.getElementById('text').value;

    localStorage.setItem('name', uname)
    localStorage.setItem('email', email)
    localStorage.setItem('text', textinput)

})