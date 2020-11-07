// from data.js
var tableData = data;
var tbody = d3.select("tbody");



console.log(data);

// Import data table onto website
data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

//Select the botton
var button = d3.select("#filter-btn");

//Select the form
var form = d3.select("#datetime");

// Event Handlers
button.on("click", runEnter);
form.on("submit",runEnter); 

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node 
    //It is either line 34 or 22 that is wrong.
    var inputElement = d3.select("#datetime");