// 
var yearsCount = 6;
var projectsCount = 45;
var clientCount = 76;

var year = document.querySelector("#yearCount");
var project = document.querySelector("#projectsCount");
var client = document.querySelector("#clientCount");

// Create three separate Odometer 
var yearOdometer = new Odometer({
  el: year,
  format: "(,ddd)",
  theme: "default"
});

var projectOdometer = new Odometer({
  el: project,
  format: "(,ddd)",
  theme: "default"
});

var clientOdometer = new Odometer({
  el: client,
  format: "(,ddd)",
  theme: "default"
});

// Update values
setInterval(function () {
  yearOdometer.update(yearsCount);
  projectOdometer.update(projectsCount);
  clientOdometer.update(clientCount);
}, 3000); 
