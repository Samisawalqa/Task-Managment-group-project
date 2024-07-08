document.addEventListener('DOMContentLoaded', (event) => {
    const signupForm = document.getElementById('signupForm');
    const signinForm = document.getElementById('signinForm');

    // دالة لعرض الـSweetAlert
    function showAlert(message, type = 'info') {
        Swal.fire({
            text: message,
            icon: type
        });
    }

    // إضافة event listener لنموذج sign up
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // شرط للتحقق من صحة كلمة المرور
            const passwordPattern = /^(?=.[a-z])(?=.[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
            if (firstName && lastName && email && passwordPattern.test(password)) {
                showAlert('Sign Up successful!', 'success');
                document.getElementById('signup-container').classList.add('hidden');
                document.getElementById('signin-container').classList.remove('hidden');
            } else {
                showAlert('Please fill out all fields correctly.\nPassword must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.', 'error');
            }
        });

        // إظهار نموذج sign in عند النقر على الرابط
        const signinLink = document.getElementById('signinLink');
        signinLink.addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('signup-container').classList.add('hidden');
            document.getElementById('signin-container').classList.remove('hidden');
        });
    }

    // إضافة event listener لنموذج sign in
    if (signinForm) {
        signinForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('signinEmail').value;
            const password = document.getElementById('signinPassword').value;

            if (email && password) {
                // هنا يمكنك إضافة تعليمات للتحقق من تسجيل الدخول
            } else {
                showAlert('Please fill out all fields.', 'error');
            }
        });

        // إظهار نموذج sign up عند النقر على الرابط
        const signupLink = document.getElementById('signupLink');
        signupLink.addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('signin-container').classList.add('hidden');
            document.getElementById('signup-container').classList.remove('hidden');
        });
    }
});