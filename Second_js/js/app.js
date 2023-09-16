import { products } from "./products.js";

const div = document.createElement('div');
const p = document.createElement('p');

div.appendChild(p);
div.classList.add('myClass');
document.body.appendChild(div);

const showProducts = () => {
    products.forEach((product)=>{
        p.innerHTML += 'product: ' + product.name + '</br>';
        p.innerHTML += 'description: ' + product.description + '</br>';
        p.innerHTML += 'price: ' + product.price + '</br>';
    });
};

const searchProduct = () => {
    const searchInput = document.getElementById('searchProduct').value;
    const result = products.filter(searchedTerm => searchedTerm.name.includes(searchInput));
    p.innerHTML = result.map(product => product.name);
}

showProducts();
document.addEventListener('input',searchProduct);