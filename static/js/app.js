// from data.js
var tableData = data;
var tbody = d3.select("tbody");


console.log(data);


data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
// YOUR CODE HERE!
