const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/
const regexNum = /\d/;

const validation = (userData) => {
    const errors ={}
    
    if(!userData.email) errors.email = 'Debe ingresar un email';
    else if(!regexMail.test(userData.email)) errors.email = 'Ingreso un email invalido';
    
    else if(!userData.password) errors.password = 'Debe ingresar una contraseña';
    else if(!regexNum.test(userData.password)) errors.password= 'La constraseña debe tener al menos 1 numero';
    return errors;
}

export default validation;