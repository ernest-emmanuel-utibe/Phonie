let url = 'https://dummyjson.com/products';

function fetchCall() {
    fetch(url)
    .then(response => {
        if (response.ok) {
            response.json
        }
    })
    .then(data => dataConverter(data))
    .catch(err => controlError(err))
}

function dataConverter(param) {
    for(data of param) {
        console.log(data)
    }
}

function controlError(params) {
    console.log(params)
}