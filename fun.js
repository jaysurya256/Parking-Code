let countEl = document.getElementById('count-el');
let count = 0;

function inc(){
        count += 1; // increasing the number
        countEl.innerText = count;
}

function dec(){
        count -= 1;
        countEl.innerText = count;
}


let TvpEl = document.getElementById('tvp') //tptal vechical praked
function save(){
        let totalParkings = ` ${count} - `
        TvpEl.textContent += totalParkings; 
        //to make number start from 0
        countEl.textContent = 0;
        count = 0; 
}