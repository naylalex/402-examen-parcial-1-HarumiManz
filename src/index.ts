import './styles.css';
import tiempo from './checker';
import pa from './checker';

console.log("index.ts/start");

let button = <HTMLElement>document.getElementById('buttonSubmit');
button.addEventListener("click",() => buttonSubmitClick());

function buttonSubmitClick(){
    const inputText = <HTMLInputElement>document.getElementById('inputText');
    if(inputText){
        parseFloat = pa(input);
        console.log(pa);
    }

    const divResult = <HTMLDivElement>document.getElementById('divResult');

    if(divResult){
            divResult.innerText = 'dB';
    }
}
