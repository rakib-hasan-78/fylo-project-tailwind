
import './src/css/style.css';

// // local storage 

const themeBtn = document.getElementById('toggle-btn');
const darkTheme = document.getElementById('theme-toggle-dark-icon');
const lightTheme = document.getElementById('theme-toggle-light-icon');

if(localStorage.getItem('color-theme')==='dark'||(!('color-theme' in localStorage) && window.matchMedia('(preferes-color-scheme:dark)').matches)){
    document.documentElement.classList.add('dark');
    lightTheme.classList.remove('hidden');
    
} else{
    document.documentElement.classList.remove('dark');
    darkTheme.classList.remove('hidden'); 
}


themeBtn.addEventListener('click', (e)=>{

    e.preventDefault()

    // toggle icon 

    darkTheme.classList.toggle('hidden')
    lightTheme.classList.toggle('hidden')

    // setting theme selection to local storage ---->

    if (localStorage.getItem('color-theme')) {
        
        // if theme is light --->

        if (localStorage.getItem('color-theme')==='light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark')
        } else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem('color-theme','light')
        }
    } else{
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('color-theme','light')
        } else{
            document.documentElement.classList.add('dark')
            localStorage.setItem('color-theme','dark')
        }
    }

});


// footer 

document.getElementById('copy-right').textContent = `
\u00A9 ${new Date().getFullYear()} all the rights reserved.
`
document.getElementById('credit').textContent = `
designed by md rakibul hasan.
`