const inpText = document.querySelector('.inp');

function onBtnClick(ev){
    inpText.value += ev.target.innerText;
}

(() => {
    const btns = document.querySelectorAll('.btn-num');
    btns.forEach(btn => btn.addEventListener('click', onBtnClick));
})();
