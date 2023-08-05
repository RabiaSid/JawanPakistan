const data = {
  fruits: {
    apple: {
      color: "red",
      taste: "sweet",
    },
    banana: {
      color: "yellow",
      taste: "sweet",
    },
    orange: {
      color: "orange",
      taste: "citrusy",
    },
  },
  vegetables: {
    carrot: {
      color: "orange",
      taste: "sweet",
    },
    broccoli: {
      color: "green",
      taste: "bitter",
    },
  },
};

function renderKeys(keys) {
    const resultList = document.getElementById('resultList');
    resultList.innerHTML = '';
  
    keys.forEach((key) => {
      const li = document.createElement('li');
      li.textContent = key;
      resultList.appendChild(li);
    });
  }

  function searchKeys(query) {
    const keys = [];
    
    for (const category in data) {
      for (const key in data[category]) {
        if (key.toLowerCase().includes(query.toLowerCase())) {
          keys.push(key);
        }
      }
    }
  
    return keys;
  }
  

  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', () => {
    const query = searchInput.value;
    const matchingKeys = searchKeys(query);
    renderKeys(matchingKeys);
  });

  renderKeys(Object.keys(data.fruits).concat(Object.keys(data.vegetables)));