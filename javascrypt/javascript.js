function validacao() {
    event.preventDefault();
    var formulario = document.forms[0];

    var nome = document.getElementsByName("nome")[0].value;
    var matricula = document.getElementsByName("matricula")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var data = document.getElementsByName("dataNascimento")[0].value;
    var senha1 = document.getElementsByName("senha1")[0].value;
    var senha2 = document.getElementsByName("senha2")[0].value;

    var erro = false;

    dataAtual = new Date();

    data = new Date(data);

    if (data > dataAtual) {
        alert("Data inválida, você não pode ter nascido hoje ou no futuro!");
         erro = true;
    } 


    if (email.indexOf("@") < 0) {
        alert("O e-mail precisa conter pelo menos um @!");
        erro = true;
    }

    if (email.indexOf(".") < 0) {
        alert("O e-mail precisa conter pelo menos um .!");
        erro = true;
    }


    if (email.indexOf("@") == 0) {
        alert("O e-mail não pode começar com @!");
        erro = true;
    }


    //raiz quadrada de um número elevado a 2 nos dá o número sempre positivo, mais conhecido como módulo. Eu sei que eles tão juntos porque a distância dos caracteres é 1. Não funciona se ter mais de um @. Ou se @ estiver no começo.  Porém o HTML5 segura a validação de e-mail.
    if (Math.sqrt(Math.pow(email.indexOf("@") - email.indexOf("."), 2)) == 1) {
        alert("O e-mail não pode ter . junto de @ !");
        erro = true;
    }


    if (email.indexOf("@") == email.length) {
        alert("O e-mail não pode terminar com @!");
        erro = true;
    }

    if (senha1 != senha2) {
        alert("As senhas não conferem!");
        erro = true;
    }


    if (senha1.length < 6 || senha1.length > 8) {
        alert("As senhas tem que ter no mínimo 6 caracteres e no máximo 8 caracteres");
        erro = true;
    }

    var boolLetraMaiuscula = false;
    var boolLetraMinuscula = false;
    var boolNumero = false;
    var boolEspecial = false;

    for (k = 0; k <= senha1.length; k++) {

        //Tabela ASCII Decimal
        if (senha1.charCodeAt(k) >= 33 && senha1.charCodeAt(k) <= 47) {
            boolEspecial = true;
        }

        if (senha1.charCodeAt(k) >= 48 && senha1.charCodeAt(k) <= 57) {
            boolNumero = true;
        }

        if (senha1.charCodeAt(k) >= 58 && senha1.charCodeAt(k) <= 64) {
            boolEspecial = true;
        }

        if (senha1.charCodeAt(k) >= 65 && senha1.charCodeAt(k) <= 90) {
            boolLetraMaiuscula = true;
        }

        if (senha1.charCodeAt(k) >= 91 && senha1.charCodeAt(k) <= 96) {
            boolEspecial = true;
        }

        if (senha1.charCodeAt(k) >= 97 && senha1.charCodeAt(k) <= 122) {
            boolLetraMinuscula = true;
        }

        if (senha1.charCodeAt(k) >= 123) {
            boolEspecial = true;
        }

    }

    if (boolLetraMaiuscula == false) {
        alert("As senhas tem que ter no mínimo 1 letra maiúscula!");
        erro = true;
    }

    if (boolLetraMinuscula == false) {
        alert("As senhas tem que ter no mínimo 1 letra minúscula!");
        erro = true;
    }

    if (boolNumero == false) {
        alert("As senhas tem que ter no mínimo 1 caracter númerico!");
        erro = true;
    }

    if (boolEspecial == false) {
        alert("As senhas tem que ter no mínimo 1 caracter especial!");
        erro = true;
    }

    if (matricula.length != 20) {
        alert("A matrícula possui 20 digitos, verifique sua matrícula por favor!");
        erro = true;
    }
    if (nome.length < 4) {
        alert("Digite pelo menos 3 caracteres no nome!");

        erro = true;
    }

    if (erro) {
        return false;

    } else {


        alert("Cadastro feito com sucesso!!!");
        formulario.submit();
        return true;
    }


}