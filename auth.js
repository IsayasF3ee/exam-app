// Register form
document.getElementById('register-form')?.addEventListener('submit', function(e){
    e.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const university = document.getElementById('university').value;
    const department = document.getElementById('department').value;

    if(password !== confirmPassword){
        alert("Passwords do not match!");
        return;
    }

    // Simulate saving to localStorage (or send to backend)
    const user = {fullname,email,password,university,department};
    localStorage.setItem('user', JSON.stringify(user));
    alert("Registration successful!");
    window.location.href = "login.html";
});

// Login form
document.getElementById('login-form')?.addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = JSON.parse(localStorage.getItem('user'));
    if(!user){
        alert("No registered user found!");
        return;
    }

    if(email === user.email && password === user.password){
        alert(`Welcome, ${user.fullname}!`);
        window.location.href = "index.html"; // Redirect to main portal
    } else {
        alert("Invalid email or password!");
    }
});
