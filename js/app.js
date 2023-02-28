//branch class07-tables

//global variables
let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let cities = [];

//taken from MDN to return random integer, inclusive range
function estimateNumberOfCustomers(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//this is my constructor/class
function City(city, minNumberOfCustomers, maxNumberOfCustomers, avgSales){
  this.city = city;
  this.minNumberOfCustomers = minNumberOfCustomers;
  this.maxNumberOfCustomers = maxNumberOfCustomers;
  this.avgSales = avgSales;

  cities.push(this);
}

//this is a method within City
City.prototype.estimateCookieSales = function(){
  this.sum = 0;
  this.cookiesPerHour = [];

  for(let i = 0; i < hours.length; i++){
    let cookies = Math.ceil(this.avgSales * estimateNumberOfCustomers(this.minNumberOfCustomers,this.maxNumberOfCustomers));
    this.cookiesPerHour.push(cookies);
    this.sum += cookies;

  }
};

//WINDOW into the DOM
let container = document.getElementById('sales-table'); //this is the parent

//thead function
let tableElement = document.createElement('table');
let theadElement = document.createElement('thead');
let trElement = document.createElement('tr');
container.appendChild(tableElement);
tableElement.appendChild(theadElement);
theadElement.appendChild(trElement);
for(let i = 0; i < hours.length; i++){
  let thElement = document.createElement('th');
  trElement.appendChild(thElement);
  thElement.textContent = hours[i];
}

//tbody table render
City.prototype.render = function(){


  let tbodyElement = document.createElement('tbody');
  tableElement.appendChild(tbodyElement);

  let trBody = document.createElement('tr');
  tbodyElement.appendChild(trBody);

  for(let i = 0; i < hours.length; i++){
    let tdElement = document.createElement('td');
    trBody.appendChild(tdElement);
    tdElement.textContent = this.cookiesPerHour[i];
  }
  let tdCityTotals = document.createElement('td');
  trBody.appendChild(tdCityTotals);
  tdCityTotals.textContent = this.sum;

};

//tfoot function

// let tfootElement = document.createElement('tfoot');
// tableElement.appendChild(tfootElement);
// let tr3Element = document.createElement('tr');
// tfootElement.appendChild(tr3Element);

// for(let i = 0; i < this.cookiesPerHour[i].length; i++){
//   let tdTotals = document.createElement('td');
//   tr3Element.appendChild(tdTotals);
//   tdTotals.textContent = 'x';
// };


/*<table> ideal table structure
    <thead>
      <tr>
        <th>loops through the hours</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td> loops through the cookies per hour for each city</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td> loops through the cookies per hour for each city and sums it up for all cities by the hour </td>
      </tr>
    </tfoot>
</table> */

//this is the instantiation of each object
let seattle = new City('Seattle', 23, 65, 6.3);
let tokyo = new City('Tokyo', 3, 24, 1.2);
let dubai = new City('Dubai', 11, 38, 3.7);
let paris = new City('Paris', 20, 38, 2.3);
let lima = new City('Lima', 2, 16, 4.6);

//this calls the methods
seattle.estimateCookieSales();
tokyo.estimateCookieSales();
dubai.estimateCookieSales();
paris.estimateCookieSales();
lima.estimateCookieSales();

//this displays the data
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();



