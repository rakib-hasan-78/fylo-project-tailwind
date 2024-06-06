// email regex 

const emailRegex = (str)=>{

    let pattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|icloud\.com)$/;
    return !!pattern.test(str);
}

export default emailRegex;