const login = document.querySelector("#login");
let Token;
 
var dat='{ "password": "admin", "username": "admin@gmail.com"}';
async function TokenReq() 
{
    const response= await fetch('https://indipl2020.herokuapp.com/authenticate', {
		method: 'POST',
		headers: {
            'Content-Type': 'application/json'
        },
		body: dat
    });
        const data = await response.json();
        console.log(data);
        Token = data['token'];
 
        console.log(Token);
}
TokenReq();
 
function OnClick()
{
    event.preventDefault();
    localStorage.clear();
    localStorage.setItem('Authorization', Token);
    window.location.href = "iplstats.html";
    
}