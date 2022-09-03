const loadCategories = async newCategories => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category);

}


const displayCategories = categories => {

    let categoryElement = document.getElementById('category-things');


    categories.forEach(category => {
        console.log(category);
        const viewCategories = document.createElement('li');
        viewCategories.classList.add("list-none")
        viewCategories.innerHTML = `
        <a id="${category.category_id}" class="px-10 lg:text-2xl md:text-xl text-1xl font-bold hover:text-orange-400">${category.category_name}</a>
        `;

        categoryElement.appendChild(viewCategories);

    });
}


loadCategories();