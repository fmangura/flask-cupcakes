$('.cupcakes-list').ready(getCupcakes);

$('.cupcake-form').on('submit', addCupcake);

async function getCupcakes() {
    let data = await axios.get('/api/cupcakes')
    let cupcakesList = data.data.cupcakes
    for (let cupcake of cupcakesList){
        $('.cupcakes-list').append(`<li>${cupcake.flavor}</li>`)
    }
    return data
}

async function addCupcake(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    let jsonObj = value

    let resp = await axios.post('/api/cupcakes', jsonObj)
    let flavor = resp.data.cupcake.flavor
    $('.cupcakes-list').append(`<li>${flavor}</li>`)
    alert("Submitted!")
    document.querySelector('.cupcake-form').reset()
}



