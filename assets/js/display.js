// Assume that the JSON object is stored in a variable called 'jsonObject'
const prices=[
    {
      "description": "Demeclocycline 150 mg tablet",
      "cost": "9.42",
      "currency": "inr",
      "unit": "tablet"
      },
    {
      "description": "Declomycin 150 mg tablet",
      "cost": "29.65",
      "currency": "inr",
      "unit": "tablet"
      },
    {
        "description": "Allegra 180mg Tablet",
        "cost": "12.31",
        "currency": "inr",
        "unit": "tablet"
        },
    {
      "description": "Apetamin 2mg Syrup",
      "cost": "12.31",
      "currency": "inr",
      "unit": "Syrup"
      },
    {
        "description": "Betadine 2% Solution",
        "cost": "12.31",
        "currency": "inr",
        "unit": "Solution"
        },
    {
      "description": "Bengel AC 2.5% Gel",
      "cost": "12.31",
      "currency": "inr",
      "unit": "Gel"
      }   

  ]


// Get the element in which you want to display the JSON object
var container = document.getElementById('container');

// Iterate through the properties of the JSON object
var elem = document.getElementById('cards');
for (var prop in prices) {
   // Create a new HTML element for each property
   // Set the inner HTML of the element to the value of the property
   elem.innerHTML += `<div class="columns">
   <ul class="price">
     <li class="header" style="background-color:#04AA6D" id="name">${prices[prop].description}</li>
     <li class="grey">${prices[prop].cost} ${prices[prop].currency}</li>
     <li c>${prices[prop].unit}</li>
   
   </ul>
 </div>`
   console.log(prices[prop].description)
   // Append the element to the container
//    container.appendChild(elem);
}

document.getElementById('searchbtn').addEventListener('click', (e) => {
    e.preventDefault()
    // window.  preventDefault()
console.log('lol')
const searchTerm = document.getElementById('search').value;
console.log(searchTerm)

const filteredListItems = prices.filter(item => item.description.includes(searchTerm));
elem.innerHTML = ''
const listItems = filteredListItems.map(item => {
    console.log(item.description)
    elem.innerHTML += `<div class="columns">
    <ul class="price">
      <li class="header" style="background-color:#04AA6D" id="name">${item.description}</li>
      <li class="grey">${item.cost} ${item.currency}</li>
      <li c>${item.unit}</li>
    
    </ul>
  </div>`
})})