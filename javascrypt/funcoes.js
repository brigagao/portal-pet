//Função Inserir1 2 3 4 5 6 7 8 9 0  = teclas (1 2 3 4 5 6 7 8 9 0)
function Inserir1(){
    document.getElementById("visor").value += 1;
}

function Inserir2(){
    document.getElementById("visor").value += 2;
}

function Inserir3(){
    document.getElementById("visor").value += 3;
}

function Inserir4(){
    document.getElementById("visor").value += 4;
}

function Inserir5(){
    document.getElementById("visor").value += 5;
}

function Inserir6(){
    document.getElementById("visor").value += 6;
}

function Inserir7(){
    document.getElementById("visor").value += 7;
}

function Inserir8(){
    document.getElementById("visor").value += 8;
}

function Inserir9(){
    document.getElementById("visor").value += 9;
}

function Inserir0(){
    document.getElementById("visor").value += 0;
}

function Inserir0(){
    document.getElementById("visor").value += 0;
}

//Função InserirMais = teclado (+), efetua a operação de adição
function InserirMais(){
    document.getElementById("visor").value += "+";
}

//Função InserirBarra = teclado (/), efetua a operação de divisão
function InserirBarra(){
    document.getElementById("visor").value += "/";
}

//Função InserirVezes = teclado (*), efetua a operação de multiplicação
function InserirVezes(){
    document.getElementById("visor").value += "*";
}

//Função InserirMenos = teclado (-), efetua a operação de subtração
function InserirMenos(){
    document.getElementById("visor").value += "-";
}

//Função InserirPonto = teclado (.), separa por ponto.
function InserirPonto(){
    document.getElementById("visor").value += ".";
}

//Função InserirMais = teclado ( ).
function LimparVisor(){
    document.getElementById("visor").value = "";
}

//Função RaizQuadrada = teclado (√), efetua a operação de de Raiz Quadrada com a função "Math.sqrt(numero)" 
//que retorna a raiz quadrada de um número.
function RaizQuadrada(){
    let numero = document.getElementById("visor").value;
    document.getElementById("visor").value = Math.sqrt(numero);
}

function Calcular(){
    //pegar o texto do visor
    let expressao = document.getElementById("visor").value;

    //converter em expressão numérica e calcular
    let resultado = eval(expressao) || '';

    //mostrar o resultado do cálculo no visor
    document.getElementById("visor").value = resultado;
   
}

//substring() retorna o trecho de uma string e junto com length que indica argumento da função esperada.
function Apagar(){
    let counteudo = document.getElementById("visor").value;
    document.getElementById("visor").value = conteudo.substring(0, conteudo.length -1);
}