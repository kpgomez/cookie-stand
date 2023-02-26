
//branch class06-objects

//global variables
let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let cities = [];

//taken from MDN to return random integer, inclusive range, Math.ceil rounds up and
//Math.floor rounds down
function estimateNumberOfCustomers(min,max){
//   min = Math.ceil(min);
//   max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//global variables that grab a WINDOW into the DOM
// let seattleList = document.getElementById('seattle');
// let tokyoList = document.getElementById('tokyo');
// let dubaiList = document.getElementById('dubai');
// let parisList = document.getElementById('paris');
// let limaList = document.getElementById('lima');



function City(city, minNumberOfCustomers, maxNumberOfCustomers, avgSales){
  this.city=city;
  this.minNumberOfCustomers = minNumberOfCustomers;
  this.maxNumberOfCustomers = maxNumberOfCustomers;
  this.avgSales = avgSales;
  this.cookiesPerHour = [];
  this.sum = 0;

  cities.push(this);
}

let seattle = new City('Seattle', 23, 65, 6.3);
let tokyo = new City('Tokyo', 3, 24, 1.2);
let dubai = new City('Dubai', 11, 38, 3.7);
let paris = new City('Paris', 20, 38, 2.3);
let lima = new City('Lima', 2, 16, 4.6);

City.prototype.estimateCookieSales = function(){
  for(let i = 0; i < hours.length; i++){
    let cookies = Math.ceil(this.avgSales * estimateNumberOfCustomers(this.minNumberOfCustomers,this.maxNumberOfCustomers));
    this.cookiesPerHour.push(cookies);
    this.sum += cookies;
  }
};

seattle.estimateCookieSales();
tokyo.estimateCookieSales();
dubai.estimateCookieSales();
paris.estimateCookieSales();
lima.estimateCookieSales();

console.log(seattle.estimateCookieSales());

City.prototype.render = function(){
//   seattleList.textContent = this.city;
//   for(let i = 0; i < hours.length; i++){
//     let liElement = document.createElement('li');
//     liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//     seattleList.appendChild(liElement);
//   }
//   let total = document.createElement('li');
//   total.textContent = `Total: ${this.sum} cookies`;
//   seattleList.appendChild(total);

  let sectElement = document.getElementById('sales-table');
  let tableElement = document.createElement('table');
  sectElement.appendChild(tableElement);

  let hourHeader = document.createElement('tr');
  tableElement.appendChild(hourHeader);
  for(let i = 0; i < hours.length; i++){
    let thElement = document.createElement('th');
    hourHeader.appendChild(thElement);
    thElement.textContent = hours[i];
  }

  let tr2Element = document.createElement('tr');
  tableElement.appendChild(tr2Element);
  for(let i = 0; i < hours.length; i++){
    let tdElement = document.createElement('td');
    tr2Element.appendChild(tdElement);
    tdElement.textContent = this.cookiesPerHour[i];
  }

//   let row2 = document.createElement('tr');
//   tableElement.appendChild(row2);
//   for(let i = 0; i < hours.length; i++){
//     let row2Data = document.createElement('td');
//     row2.appendChild(row2Data);
//     row2Data.textContent = this.cookiesPerHour[i];
//   }

};
/* <table>
      <tr>
          <th>hours[i]</th>
      <tr>
      <tr>
          <td>cookiesPerHour[i]</td>
      </tr>
  </table> */

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();




//   tokyo.estimateCookieSales();


//   dubai.estimateCookieSales();
//   console.log(dubai.render());

//   paris.estimateCookieSales();
//   console.log(paris.render());
//   lima.estimateCookieSales();
//   console.log(lima.render());

//create table


// let tableData = document.createElement('td');
// thElement.appendChild(tableData);


