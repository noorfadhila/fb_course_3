const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=e4acc365862542e3b3b6e2d0d9655f08&pageSize=6";
const listArticles = document.querySelector("#list-articles");

const loopData = (data) => {
    console.log(data)
    let h = "";
    h += `<div class="flex-container">`
    data.articles.map(datas => {
        console.log(datas)
        let title = datas.title.substr(0, 89)
        h += `
        <div class="flex-col">   
            <div class="card">
                <div class="card-img-top" alt="Headline News" style="background-image: url('${datas.urlToImage}')"></div>
                <div class="card-body">
                    <h5 class="card-title">${title + "..."}</h5>
                    <p>${datas.source.name}</p>
                    <button data-title="${datas.title}" data-author="${datas.author}"  data-desc="${datas.description}" data-date="${datas.publishedAt}"  data-url="${datas.url}" data-img="${datas.urlToImage}" class="btn blue btn-modal">Details</button>
                </div>
            </div>
        </div>`
    });
    h += `</div>`
    listArticles.innerHTML = h;
}

const createRequest = (url) => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => loopData(data))
        .then(() => loadModal());
}

createRequest(url);