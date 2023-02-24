
//branch class06-objects

//global variables
let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
// let sales = []; <--part of original code, this array needed to be stored in the object literals instead of global

//taken from MDN to return random integer, inclusive range, Math.ceil rounds up and
//Math.floor rounds down
function estimateNumberOfCustomers(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//global variables that grab a WINDOW into the DOM
let seattleList = document.getElementById('seattle');
let tokyoList = document.getElementById('tokyo');
let dubaiList = document.getElementById('dubai');
let parisList = document.getElementById('paris');
let limaList = document.getElementById('lima');

//object literals
let seattle = {
  location: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  sum: 0, //declared here so total can be stored
  cookiesPerHour:[], // per lab instruction #4, store results in an array

  //returns a list of projected cookie sales each hour using avg multipled by a randomInt(min,max)
  estimateCookieSales: function(){
    for(let i = 0; i < hours.length; i++){
      let cookies = Math.ceil(this.avg * estimateNumberOfCustomers(this.min,this.max));
      this.cookiesPerHour.push(cookies); //from TA, this appends the value of the cookies sales each hour
      this.sum += cookies; //this adds up all the values in cookiesPerHour array
    }
  },

  render: function(){
    // let liElem = document.createElement('li'); <--part of original code
    // ulElem.textContent=this.location; <--part of original code, wondering why we don't start with .createElement('ul')
    seattleList.textContent = this.location; //returns 'Seattle'
    for(let i = 0; i < hours.length; i++){
      let liElement = document.createElement('li'); //creates a list element for each iteration of the loop
      liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`; //displays the text content of each list element
      seattleList.appendChild(liElement); //add to parent element so it will be visible in the DOM
      // liElem.textContent = `${hours[i]}: ${this.estimateCookieSales} cookies`; <--part of original code
      // this.sum += this.estimateCookieSales; <--part of original code
    }
    let total = document.createElement('li'); //creates the last list item outside of above loop
    // document.write(`Total: ${this.sum} cookies`); <--part of original code
    total.textContent = `Total: ${this.sum} cookies`; //displays total one time at the end of the list
    seattleList.appendChild(total); //add to parent element so it will be visible in the DOM
  }
};

seattle.estimateCookieSales(); //invokes the object
seattle.render(); //another invocation


let tokyo = {
  location: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  sum: 0,
  cookiesPerHour:[],

  estimateCookieSales: function(){
    for(let i = 0; i < hours.length; i++){
      let cookies = Math.ceil(this.avg * estimateNumberOfCustomers(this.min,this.max));
      this.cookiesPerHour.push(cookies);
      this.sum += cookies;
    }
  },

  render: function(){
    tokyoList.textContent = this.location;
    for(let i = 0; i < hours.length; i++){
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      tokyoList.appendChild(liElement);
    }
    let total = document.createElement('li');
    total.textContent = `Total: ${this.sum} cookies`;
    tokyoList.appendChild(total);
  }
};

tokyo.estimateCookieSales();
tokyo.render();

let dubai = {
  location: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  sum: 0,
  cookiesPerHour:[],

  estimateCookieSales: function(){
    for(let i = 0; i < hours.length; i++){
      let cookies = Math.ceil(this.avg * estimateNumberOfCustomers(this.min,this.max));
      this.cookiesPerHour.push(cookies);
      this.sum += cookies;
    }
  },

  render: function(){
    dubaiList.textContent = this.location;
    for(let i = 0; i < hours.length; i++){
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      dubaiList.appendChild(liElement);
    }

    let total = document.createElement('li');
    total.textContent = `Total: ${this.sum} cookies`;
    dubaiList.appendChild(total);
  }
};

dubai.estimateCookieSales();
dubai.render();


let paris = {
  location: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  sum: 0,
  cookiesPerHour:[],

  estimateCookieSales: function(){
    for(let i = 0; i < hours.length; i++){
      let cookies = Math.ceil(this.avg * estimateNumberOfCustomers(this.min,this.max));
      this.cookiesPerHour.push(cookies);
      this.sum += cookies;
    }
  },

  render: function(){
    parisList.textContent = this.location;
    for(let i = 0; i < hours.length; i++){
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      parisList.appendChild(liElement);
    }

    let total = document.createElement('li');
    total.textContent = `Total: ${this.sum} cookies`;
    parisList.appendChild(total);
  }
};

paris.estimateCookieSales();
paris.render();


let lima = {
  location: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  sum: 0,
  cookiesPerHour:[],

  estimateCookieSales: function(){
    for(let i = 0; i < hours.length; i++){
      let cookies = Math.ceil(this.avg * estimateNumberOfCustomers(this.min,this.max));
      this.cookiesPerHour.push(cookies); 
      this.sum += cookies;
    }
  },

  render: function(){
    limaList.textContent = this.location;
    for(let i = 0; i < hours.length; i++){
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      limaList.appendChild(liElement);
    }
    let total = document.createElement('li');
    total.textContent = `Total: ${this.sum} cookies`;
    limaList.appendChild(total);
  }
};

lima.estimateCookieSales();
lima.render();
