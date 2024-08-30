document.getElementById('avatar').addEventListener('click', function() {
    document.getElementById('bottomSheet').style.bottom = '30px';
    document.querySelector('.fake-div').classList.add('blur-background');
    document.querySelector('.fake-div2').classList.add('blur-background');
});

document.getElementById('closeBottomSheet').addEventListener('click', function() {
    document.getElementById('bottomSheet').style.bottom = '-100%';
    document.querySelector('.fake-div').classList.remove('blur-background');
    document.querySelector('.fake-div2').classList.remove('blur-background');
});
