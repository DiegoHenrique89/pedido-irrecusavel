function sim(){
    alert("Eu Sabia kkkkk");
}

function desvia(btn){
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    
    console.log('opa, nao adianta disfarcar eu sei que você esta mentindo kk');
    alert("Opa, não adianta disfarçar eu sei que você esta mentindo kk");
}

function geraPosicao(min, max){
    return (Math.random() * (max - min) + min) + "%";
}