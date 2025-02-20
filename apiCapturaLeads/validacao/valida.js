export function validaNome(nome) {
    const regex = /^[A-Za-zÀ-ÿ\s]+$/; 
    const isvalid= nome.length >= 2 && regex.test(nome);
    return isvalid;
}

    
export function validaEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isvalid= regexEmail.test(email)
    return isvalid;
}

export function validaTelefone(telefone) {
    const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
    return typeof telefone === 'string' && regex.test(telefone);
}

export function validaUsuario(nome, email, ){
 const nomeValido= validaNome(nome)
 const validaEmail= validaEmail(email)

 const usuarioValido= nomeValido && validaEmail;
 if (usuarioValido) {
    return {status:true, mensagem: ''}
 } else {
    return{status:false, mensagem: 'Nome e ou email inválido'}
 }
}




