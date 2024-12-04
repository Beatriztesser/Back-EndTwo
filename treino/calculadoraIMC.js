function efetuarCalculo(peso,altura){
    let imc= peso/ (altura*altura);
    return imc
}


function retornaStatus(imc){
    let status=0 ;
    return status;

}


function validaParametro(parametro)
{
    if (isNaN(parametro))
    {
        return false
    }
    else{
        return true
    }
}


exports.retornaStatus= retornaStatus;
exports.efetuarCalculo= efetuarCalculo;