const input = document.getElementById('email-input');
const btn = document.getElementById('btn-subscription');
const result = document.getElementById('result-box');


// email regex 

const emailRegex = (str)=>{
    let pattern = `^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|icloud\.com)$`;
    return !!pattern.text(str);
}
// style for  email validation

const afterEffect = () => {}

// mail validation
const emailvalidation = () => {

    btn.addEventListener('click', (e) => {
        e.preventDefault();

        if (input.value==='') {
            
        }
    })
}

