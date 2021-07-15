const form = document.getElementById('form')

form.addEventListener ('submit', (e) => {
    e.preventDefault();/*não deixa a página ser recarregada*/
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let content = document.getElementById('content');

    let carregando = `<p>Carregando...</p>`

    let finalizado = `<p>Seu email foi cadastrado!</p>`


    content.innerHTML = carregando

    setTimeout(() => {
        content.innerHTML = finalizado
    }, 1000)

})