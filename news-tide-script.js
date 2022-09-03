const loadCategories = async newCategories => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category);

}


const displayCategories = categories => {

    let categoryElement = document.getElementById('category-things');


    categories.forEach(category => {

        const viewCategories = document.createElement('li');
        viewCategories.classList.add("list-none")
        viewCategories.innerHTML = `
        <button id="${category.category_id}" onclick="loadNews('${category.category_id}')"  class="px-10 lg:text-2xl md:text-xl text-1xl font-bold hover:text-orange-400">${category.category_name}</button>
        `;

        categoryElement.appendChild(viewCategories);

    });
}

const loadNews = async id => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
    // console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data);
    // console.log(data.data);
}

const displayNews = (allnews, dataLimit) => {
    // console.log(allnews);
    let newsPlacementElement = document.getElementById('news-things');
    newsPlacementElement.innerHTML = "";



    allnews.forEach(news => {
        // console.log(news);
        let newsdocument = document.createElement("div")

        newsdocument.innerHTML = `
        <div class="lg:flex w-10/12  lg:w-7/12 mx-auto rounded-xl lg:items-center p-4 border-2 mb-5">
        <img src="${news.thumbnail_url}" class="mx-auto lg:py-0 py-3" alt="">
                    <div class="texts mx-10">
                        <h1 class="text-2xl font-medium">${news.title}</h1>
                        <p class="text-justify my-2">${news.details.slice(0, 1000)}</p>

                        <div class="other-details lg:flex justify-between items-center my-5 ">
                            <div class="author flex items-center">
                                <img src="img/Rectangle 19.png" alt="">
                                <div class="author-text mx-3">
                                    <h3>jane Cooper</h1>
                                        <h4>jan 10, 2022</h4>
                                </div>

                            </div>
                            <div class="views lg:my-0 my-3">
                                <h3><i class="fa-regular fa-eye"></i>${news.total_view}</h3>

                            </div>
                            <div class="stars">
                                
                                    <i class="fa-solid fa-star text-orange-400"></i>
                                    <i class="fa-solid fa-star text-orange-400"></i>
                                    <i class="fa-solid fa-star text-orange-400"></i>
                                    <i class="fa-solid fa-star text-orange-400"></i>
                                    <i class="fa-solid fa-star-half-stroke text-orange-400"></i>
                                    
                            </div>
                        </div>
                    </div>
                    </div>

        `;
        newsPlacementElement.appendChild(newsdocument);

    });



}









// loadNews();
loadCategories();
