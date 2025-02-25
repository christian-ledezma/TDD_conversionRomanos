function generador(num){
    let resultado = '';
    while(num > 0){
        if (num == 1){
            resultado += 'I';
            num -= 1;
        }
        else if (num == 2){
            resultado += 'II';
            num -= 2;
        }
        else if (num == 3){
            resultado += 'III';
            num -= 3;
        }
        else if (num == 4){
            resultado += 'IV';
            num -= 4;
        }
        else if (num == 5){
            resultado += 'V';
            num -= 5;
        }
        else if (num == 9){
            resultado += 'IX';
            num -= 9;
        }
        else if (num == 10){
            resultado += 'X';
            num -= 10;
        }
        else if (num == 40){
            resultado += 'XL';
            num -= 40;
        }
        else{
            if(num > 40){
                resultado += 'XL';
                num -= 40;
            }
            else if (num > 10){
                resultado += 'X';
                num -= 10;
            }
            else{
                resultado += 'V';
                num -= 5;
            }
        }
    }    
    return resultado;
}

export default generador;