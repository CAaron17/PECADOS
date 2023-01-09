function agregarImagenes(personaje) {

    const cont_personajes = document.getElementById('cont_personajes');

    const div = document.createElement('div');
    div.classList.add('card');

    const img = document.createElement('img');
    img.setAttribute('src', `media/${personaje}.jpg`);

    const h2 = document.createElement('h2');
    
    if(personaje === 'morgan')   h2.innerHTML = 'CHRISTOPHER MORGAN';
    if(personaje === 'rachel')   h2.innerHTML = 'RACHEL JAMES';
    if(personaje === 'bratt')    h2.innerHTML = 'BRATT LEWIS';
    if(personaje === 'anthony')  h2.innerHTML = 'ANTHONY MASCHERANO';
    if(personaje === 'gema')     h2.innerHTML = 'GEMA LANCASTER ';
    if(personaje === 'emma')     h2.innerHTML = 'EMMA JAMES';
    if(personaje === 'ilenko')   h2.innerHTML = 'ILENKO ROMANOV';
    if(personaje === 'meredith') h2.innerHTML = 'MEREDITH LYONS';

    div.appendChild(img);
    div.appendChild(h2);
    cont_personajes.appendChild(div);
}

agregarImagenes('morgan');
agregarImagenes('rachel');
agregarImagenes('bratt');
agregarImagenes('anthony');
agregarImagenes('gema');
agregarImagenes('emma');
agregarImagenes('ilenko');
agregarImagenes('meredith');