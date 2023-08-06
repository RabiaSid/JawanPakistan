let arr = [
  {
    brand: "Samsung",
    model: "A30",
    price: "40000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "Samsung",
    model: "A10",
    price: "40000",
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
  },
  {
    brand: "Samsung",
    model: "A20",
    price: "40000",
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
  },
  {
    brand: "Vivo",
    model: "Y20",
    price: "20000",
    camera: "40px",
    ram: "2gb",
    rom: "32gb",
  },
  {
    brand: "Vivo",
    model: "Y11",
    price: "20000",
    camera: "40px",
    ram: "3gb",
    rom: "32gb",
  },
  {
    brand: "Vivo",
    model: "Y15",
    price: "30000",
    camera: "40px",
    ram: "4gb",
    rom: "64gb",
  },
  {
    brand: "Motorola",
    model: "123",
    price: "5000",
    camera: "2px",
    ram: "2gb",
    rom: "32gb",
  },
  {
    brand: "Iphone",
    model: "12",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "Iphone",
    model: "13",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "Iphone",
    model: "X",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
];

let brandSelect = document.getElementById("company");
let modelselect = document.getElementById("model");

let brands = arr.map((x) => x.brand);
// remove duplication
brands = [...new Set(brands)];
console.log(brands);

brandSelect.innerHTML += brands.map(
  (x) => `<option value="${x}">${x}</option>`
);

let modals = arr.map((x) => x.model);
// remove duplication
modals = [...new Set(modals)];
console.log(modals);

modelselect.innerHTML += modals.map(
  (x) => `<option value="${x}">${x}</option>`
);


let selectBrand = () => {
  let selectedBrand = brandSelect.value;
  let models = arr.filter((x) => x.brand == selectedBrand);
  console.log(models);
  modelselect.innerHTML = "";
    modelselect.innerHtml += models.map(
      (x) => `<option value="${x.model}">${x.model}</option>`
    );
};

let tableBody = document.getElementById("tableBody");
tableBody.innerHTML += arr.map(
  (x) => `
<tr>
<td>${x.brand}</td>
<td>${x.model}</td>
<td>${x.camera}</td>
<td>${x.price}</td>
<td>${x.ram}</td>
<td>${x.rom}</td>
</tr>`
);


