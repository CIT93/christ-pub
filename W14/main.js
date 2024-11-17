function renderPhotos(photos) {
photos.forEach((ing) => {
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", img.thumbnailUrl);
    document.getElementsById("output").appendChild(imgEl);
    })
}

async function getPhotos() {
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/photos")
        const photos = await data.json();
        if(!photos.length) {
            console.log('error on return value')
        } else {
            onSuccess(photos)
        }
    } catch (error) {
        onerror(error);
    }
}

function onSuccess(photos) {
    renderPhotos(photos);
}
function onError(err) {
    console.log(`Error ${err}`)
}
function start() {
    getPhotos();
}

start();