let userName = null
let userAge = 0

function mainPage(){
    const root = document.getElementById("root")
    root.innerHTML=`    
    
    <h1>Login</h1>
    <form>
        <input id="name" type="text" autofocus placeholder="Digite seu nome"/>
        <input id="age" type="number" placeholder="Digite sua idade"/>
        <button type="button" onclick="verify()">Verificar</button>
    </form>
    `
}
mainPage()

function verify(){
    userName = document.getElementById("name").value;
    userAge = document.getElementById("age").value;

    if(userAge >= 18){
        alert(userName + " é maior de idade")
    } else{
        alert(userName + " é menor de idade")
    }

}