const marvel = {
    render: () => {
        const urlApi = 'https://gateway.marvel.com:/v1/public/characters?ts=1&apikey=cc25a8d815b08a07d1f66b16e2079cff&hash=9e25f1c95eb74bd5d42f42216b82ded3';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlApi)
            .then(res => res.json())
            .then((json) => {
                console.log(json, 'RES.JSON')
            })
    }
};
marvel.render();

