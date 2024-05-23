document.getElementById('loginBtn').addEventListener('click', function() {
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

if (username === 'Geimod' && password === 'Yagei') {
document.querySelector('.login-container').style.display = 'none';
document.querySelector('.container').style.display = 'block';
} else {
document.getElementById('loginError').style.display = 'block';
}
});

document.getElementById('generateBtn').addEventListener('click', function() {
const key = generateKey(50);
document.getElementById('keyOutput').value = key;
});

function generateKey(length) {
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let key = '';
for (let i = 0; i < length; i++) {
const randomIndex = Math.floor(Math.random() * chars.length);
key += chars[randomIndex];
}
return key;
}