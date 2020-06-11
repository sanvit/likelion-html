var mm, pf = false;
function mobilemenu() {
    if (mm == false) {
        document.getElementById('mobilemenu').classList.remove('hidden');
        document.getElementById('mobilemenu').classList.add('block');
        document.getElementById('mb-closed').classList.add('hidden');
        document.getElementById('mb-closed').classList.remove('block');
        document.getElementById('mb-open').classList.remove('hidden');
        document.getElementById('mb-open').classList.add('block');
        mm = true;
    }
    else {
        document.getElementById('mobilemenu').classList.add('hidden');
        document.getElementById('mobilemenu').classList.remove('block');
        document.getElementById('mb-closed').classList.remove('hidden');
        document.getElementById('mb-closed').classList.add('block');
        document.getElementById('mb-open').classList.add('hidden');
        document.getElementById('mb-open').classList.remove('block');
        mm = false;
    }
}
function profile() {
    if (pf == false) {
        document.getElementById('profile').classList.remove('hidden');
        pf = true;
    }
    else {
        document.getElementById('profile').classList.add('hidden');
        pf = false;
    }
}