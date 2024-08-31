function openBottomSheet() {
    const bottomSheet = document.getElementById('bottomSheet');
    bottomSheet.style.bottom = '30px';
    document.querySelector('.fake-div').classList.add('blur-background');
    document.querySelector('.fake-div2').classList.add('blur-background');
}

function closeBottomSheet() {
    const bottomSheet = document.getElementById('bottomSheet');
    bottomSheet.style.bottom = '-100%';
    document.querySelector('.fake-div').classList.remove('blur-background');
    document.querySelector('.fake-div2').classList.remove('blur-background');
}

document.getElementById('avatar').addEventListener('click', function() {
    openBottomSheet();
});

document.getElementById('closeBottomSheet').addEventListener('click', function() {
    closeBottomSheet();
});

document.addEventListener('click', function(event) {
    const bottomSheet = document.getElementById('bottomSheet');
    const avatar = document.getElementById('avatar');

    if (!bottomSheet.contains(event.target) && !avatar.contains(event.target)) {
        closeBottomSheet();
    }
});
