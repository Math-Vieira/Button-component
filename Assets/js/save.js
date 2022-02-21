const defaultButton = document.querySelector('.default');
const outlineButton = document. querySelector('.outline');
const textButton = document.querySelector('.text');

const divColor = document.querySelector('.conteiner__color');

const disabledInput = document.querySelector('#disable');
const boxshadowInput = document.querySelector('#boxshadow')

const icons = document.querySelectorAll('.figure');
const removeButton = document.querySelectorAll('.remove');

const colors = document.querySelectorAll('.color')

const sizes = document.querySelectorAll('.size')

const mainButton = document.querySelector('#button');
const iconLeft = document.querySelector('.icon-left');
const iconRight = document.querySelector('.icon-right');



function removeInputs () {
    mainButton.removeAttribute('class');
    disabledInput.checked = false;
    boxshadowInput.checked = false;
}


defaultButton.addEventListener('click', e => {
    removeInputs()
    mainButton.setAttribute('class', 'default');
    divColor.style.display = 'flex';
});

outlineButton.addEventListener('click', e => {
    removeInputs()
    mainButton.setAttribute('class', 'outline');
    divColor.style.display = 'none';
});

textButton.addEventListener('click', e => {
    removeInputs()
    mainButton.setAttribute('class', 'text');
    divColor.style.display = 'none';
});

disabledInput.addEventListener('click', e => {
    if (e.target.checked) {
        mainButton.removeAttribute('class');
        mainButton.setAttribute('class', 'disabled');
        mainButton.setAttribute('disabled', 'disabled');
    } else {
        mainButton.removeAttribute('class');
        mainButton.setAttribute('class', 'default');
        mainButton.removeAttribute('disabled')
    }
});

boxshadowInput.addEventListener('click', e => {
    if (e.target.checked) {
        mainButton.style.boxShadow = '1px 1px 2px black';
    } else {
        mainButton.style.boxShadow = 'none';
    }
});

icons.forEach( (element, index) => {
    const idx = index;
    const right = iconRight;
    const left = iconLeft;
    element.addEventListener ( 'click',  (e) => {
        if (idx < 5) iconLeft.innerHTML = element.outerHTML;
        else iconRight.innerHTML = element.outerHTML;
    } )
})

removeButton.forEach ( (element, index) => {
    element.addEventListener ('click', e => {
        if (index === 0) iconLeft.innerHTML = '';
        else iconRight.innerHTML = '';
    })
})

colors.forEach ((element, index) =>{
    element.addEventListener('click', e => {
        removeInputs()
        mainButton.setAttribute('class', 'default');
        let classe = 'color' + (index+1);
        mainButton.classList.add(classe);
    })
})

sizes.forEach ((element, index) =>{
    element.addEventListener('click', e => {
        let size = 'size' + (index+1);
        mainButton.classList.remove('size1', 'size2', 'size3')
        mainButton.classList.add(size);
    })
})









