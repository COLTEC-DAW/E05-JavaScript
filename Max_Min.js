var document = Document;

function max(a, b){
    if (a == b){
        return;
    }
    return a > b ? a : b;
}

function min(a, b){
    if (a == b){
        return;
    }
    return b > a ? b : a;
}


function maxPag(){

    let containerMax = document.getElementById("max");
    containerMax.innerHTML = '';
    let a = document.getElementById("input_amax").value;
    let b = document.getElementById("input_bmax").value;

    if(a > b){
        containerMax.innerHTML += `${a}`;
        return a;
    }
    else if(b > a){
        containerMax.innerHTML += `${b}`;
        return b;
    }
    else containerMax.innerHTML += 'Eles sao iguais';
    return;
}

function minPag(){
    
    let containerMin = document.getElementById("min");
    containerMin.innerHTML = '';
    let a = document.getElementById("input_amin").value;
    let b = document.getElementById("input_bmin").value;

    if(a < b) containerMin.innerHTML += `${a}`;
    else if(b < a) containerMin.innerHTML += `${b}`;
    else containerMin.innerHTML += 'Eles sao iguais';
}