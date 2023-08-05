
const mobilePhones = [
    { Model: "iPhone 13", Company: "Apple", Price: "$999", Camera: "12 MP" },
    { Model: "Galaxy S21", Company: "Samsung", Price: "$899", Camera: "108 MP" },
    { Model: "Pixel 6", Company: "Google", Price: "$799", Camera: "50 MP" },
    
];

function filterMobiles() {
    const searchBy = document.getElementById("searchBy").value;
    const searchValue = document.getElementById("searchValue").value.toLowerCase();

    const filteredMobiles = mobilePhones.filter(phone => phone[searchBy].toLowerCase().includes(searchValue));

    displayResults(filteredMobiles);
}

function displayResults(mobiles) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (mobiles.length === 0) {
        resultsDiv.innerText = "No matching results.";
    } else {
        mobiles.forEach(phone => {
            const phoneDetails = document.createElement("p");
            phoneDetails.innerText = `Model: ${phone.Model}, Company: ${phone.Company}, Price: ${phone.Price}, Camera: ${phone.Camera}`;
            resultsDiv.appendChild(phoneDetails);
        });
    }
}
