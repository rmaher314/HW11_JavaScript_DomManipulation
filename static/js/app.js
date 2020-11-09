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
form.on("keypress",function() {
    if(d3.event.keyCode === 13){
        runEnter();
    }});
  

function runEnter() {
    console.log("runEnter called")
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node 
    //It is either line 34 or 22 that is wrong.
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var dateInputValue = new Date(inputValue);
    console.log("date object: ", dateInputValue.toLocaleDateString())
    //todo convert inputValue to date format

    //clears out the ufo table
    var list = d3.select(".ufoTable");
    list.html("");

    var match = false;
    data.forEach((ufoSighting) => {       
        var row = tbody.append("tr");
        match = false;
        Object.entries(ufoSighting).forEach(([key, value]) => {
            if(key == "datetime"){
                var compareDateValue = new Date(value);
                //console.log(dateInputValue.getTime() === compareDateValue.getTime());
                if(dateInputValue.getTime() === compareDateValue.getTime()){
                    console.log("match", value)
                    match = true;
                }
            }
            if (match == true){
                var cell = row.append("td");
                cell.text(value);
                
            }
        });
      });
      
      if(inputValue == null || inputValue == ""){
        data.forEach((ufoSighting) => {
            var row = tbody.append("tr");
            Object.entries(ufoSighting).forEach(([key, value]) => {
              var cell = row.append("td");
              cell.text(value);
            });
          });
      }
}
// // //Select City Info
// var button = d3.select("#filter-btn");

// //Select the form
// var form = d3.select("#City");

// // Event Handlers
// button.on("click", runEnter);
// form.on("keypress",function() {
//     if(d3.event.keyCode === 13){
//         runEnter();
//     }});
  

// function runEnter() {
//     console.log("runEnter called")
//     // Prevent the page from refreshing
//     d3.event.preventDefault();
    
//     // Select the input element and get the raw HTML node 
//     var inputElement = d3.select("#city");
//     var inputValue = inputElement.property("value");
   
//     //todo convert inputValue to date format

//     //clears out the ufo table
//     var list = d3.select(".ufoTable");
//     list.html("");

//     var match = false;
//     data.forEach((ufoSighting) => {       
//         var row = tbody.append("tr");
//         match = false;
//         Object.entries(ufoSighting).forEach(([key, value]) => {
//             if(key == "city")
//             if (match == true){
//                 var cell = row.append("td");
//                 cell.text(value);
                
//             }
//         });
//       });
      
//       if(inputValue == null || inputValue == ""){
//         data.forEach((ufoSighting) => {
//             var row = tbody.append("tr");
//             Object.entries(ufoSighting).forEach(([key, value]) => {
//               var cell = row.append("td");
//               cell.text(value);
//             });
//           });
//       }
// }