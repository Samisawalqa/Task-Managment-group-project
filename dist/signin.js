const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
let users = [{ email: 'abdallah.awaysheh@taskbuddy.com', password: '123', name: 'AbdallahAwaysheh' }];
            // localStorage.clear()
            document.getElementById('signupForm').addEventListener('submit', function(event) {
                event.preventDefault();
                let id = Math.floor(Math.random() * 99);
                    localStorage.getItem('users');
                    users.push({
                        id: id,
                        activeStatus: false,
                        name: firstName.value,
                        email: email.value,
                        password: password.value
                    });
                    localStorage.setItem('users', JSON.stringify(users));
            });
            document.getElementById('signinForm').addEventListener('submit', function(event) {
                event.preventDefault(); 
                const email = document.getElementById('signinEmail').value;
                const password = document.getElementById('signinPassword').value;
                const users = JSON.parse(localStorage.getItem('users'));
                const user = users.find(user => user.email === email && user.password === password);
                if (user) {
                    localStorage.setItem('activeStatus', true);
                    localStorage.setItem('signedInUser', JSON.stringify({ name: user.name, email: user.email }));
                    // alert('Sign in successful !');
                    window.location.href = 'dashboard.html';
                } else {
                    alert('Incorrect email or password.');
                }
            });