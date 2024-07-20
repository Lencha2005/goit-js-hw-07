const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(el => {
    const title = el.querySelector('h2').textContent;
    const categoryItem = el.querySelectorAll('ul li');

    console.log(`Category: ${title}`);
    console.log(`Elements: ${categoryItem.length}`);
})


