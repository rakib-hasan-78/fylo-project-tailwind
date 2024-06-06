import emailRegex from "./emailregex";

 const input = document.getElementById('email-input');
 const btn = document.getElementById('btn-subscription');
 const result = document.getElementById('result-box');

const afterEffect = (inputClassNames, btnClasses, btnValue, Boolean, resultClasses, textElement) => {

    inputClassNames.forEach((className) => {
        input.classList.add(className)
    });

    btnClasses.forEach((className) => {

        btn.classList.add(className)
    });

    btn.textContent= btnValue;
    btn.disabled = Boolean;

    resultClasses.forEach((className) => {
        result.classList.add(className);
    });
    result.innerHTML = textElement;
}


// style for  email vali

const validMailEffect = (inputClassNames, btnClasses, btnValue, Boolean, resultClasses, textElement) => {

    inputClassNames.forEach((className) => {
        input.classList.remove(className)
    });

    btnClasses.forEach((className) => {

        btn.classList.remove(className)
    });

    btn.textContent= btnValue;
    btn.disabled = Boolean;

    resultClasses.forEach((className) => {
        result.classList.remove(className);
    });
    result.innerHTML = textElement;
}
// mail validation
const emailvalidation = () => {

    btn.addEventListener('click', (e) => {
        e.preventDefault();

        if (input.value.trim() ==='') {
            afterEffect(['border-2','border-rose-600'],['bg-rose-50', 'text-slate-700','font-semibold','cursor-not-allowed'],'Type Email', true ,['text-center','capitalize', 'text-rose-800', 'font-black','italic'],'sorry! You did not enter any mail address');

            const validEmailStyle = ['text-emerald-500','font-bold','text-center'];
            validEmailStyle.forEach((value) => {
                result.classList.remove(value);
            })

        } else if (!emailRegex(input.value.trim())){

            afterEffect(['border-2','border-rose-600'],['bg-rose-50', 'text-slate-700','font-semibold','cursor-not-allowed','text-xs'],'Type A Valid Email', true ,['text-center','capitalize', 'text-rose-800', 'font-black','italic','text-xs'],'Only yahoo, gmail,icloud, hotmail & outlook mail acceptable');

            const validEmailStyle = ['text-emerald-500','font-bold','text-center'];
            validEmailStyle.forEach((value) => {
                result.classList.remove(value);
            })

        } else{
            
            validMailEffect(['border-2','border-rose-600'],['bg-rose-50', 'text-slate-700','font-semibold','cursor-not-allowed','text-xs'],'Subscribed', false ,['text-center','capitalize', 'text-rose-800', 'font-black','italic'],`You Signed Up SuccessFully With ${input.value}`);

            result.classList.add('text-emerald-500','font-bold','text-center');
            input.value='';
        }

        input.addEventListener('input', () => {
            // Check if input is empty
            if (input.value.trim() === '') {
                // Apply default styles to result box
                afterEffect([], [], 'Get Started For Free', false, [], '');
            } else {
                // Define styles to remove from input and btn
                const invalidInputBtnStyles = ['border-2', 'border-rose-600', 'bg-rose-50', 'text-slate-700', 'font-semibold', 'cursor-not-allowed', 'text-xs'];
                // Remove styles from input and btn
                invalidInputBtnStyles.forEach((style) => {
                    input.classList.remove(style);
                    btn.classList.remove(style);
                });
                btn.classList.add('cursor-pointer');
        
                // Remove styles from result
                const invalidResultStyles = ['text-center', 'capitalize', 'text-rose-800', 'font-black', 'italic', 'text-xs'];
                invalidResultStyles.forEach((style) => {
                    result.classList.remove(style);
                });
        
                result.innerHTML = '';
            }
        });
        
    })
}

emailvalidation();




