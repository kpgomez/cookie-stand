
//branch class06-objects
let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
// let sales = [];

//taken from MDN, inclusive range, Math.ceil rounds up and Math.floor rounds down
function estimateNumberOfCustomers(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//global variables WINDOW into the DOM
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
  sum: 0,
  cookiesPerHour:[],

  estimateCookieSales: function(){
    for(let i = 0; i < hours.length; i++){
      let cookies = Math.ceil(this.avg * estimateNumberOfCustomers(this.min,this.max));
      this.cookiesPerHour.push(cookies); //from TA
      this.sum += cookies;
    }
  },

  render: function(){
    // let liElem = document.createElement('li');
    // ulElem.textContent=this.location;
    seattleList.textContent = this.location;
    for(let i = 0; i < hours.length; i++){
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      seattleList.appendChild(liElement);
      // liElem.textContent = `${hours[i]}: ${this.estimateCookieSales} cookies`;

      // this.sum += this.estimateCookieSales;
    }
    let total = document.createElement('li');
    // document.write(`Total: ${this.sum} cookies`);
    total.textContent = `Total: ${this.sum} cookies`;
    seattleList.appendChild(total);
  }
};

seattle.estimateCookieSales();
seattle.render();


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
      this.cookiesPerHour.push(cookies); //from TA
      this.sum += cookies;
    }
  },

  render: function(){
    // let liElem = document.createElement('li');
    // ulElem.textContent=this.location;
    tokyoList.textContent = this.location;
    for(let i = 0; i < hours.length; i++){
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      tokyoList.appendChild(liElement);
      // liElem.textContent = `${hours[i]}: ${this.estimateCookieSales} cookies`;

      // this.sum += this.estimateCookieSales;
    }
    let total = document.createElement('li');
    // document.write(`Total: ${this.sum} cookies`);
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
        this.cookiesPerHour.push(cookies); //from TA
        this.sum += cookies;
      }
    },
  
    render: function(){
      // let liElem = document.createElement('li');
      // ulElem.textContent=this.location;
      dubaiList.textContent = this.location;
      for(let i = 0; i < hours.length; i++){
        let liElement = document.createElement('li');
        liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
        dubaiList.appendChild(liElement);
        // liElem.textContent = `${hours[i]}: ${this.estimateCookieSales} cookies`;
  
        // this.sum += this.estimateCookieSales;
      }
      let total = document.createElement('li');
      // document.write(`Total: ${this.sum} cookies`);
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
        this.cookiesPerHour.push(cookies); //from TA
        this.sum += cookies;
      }
    },
  
    render: function(){
      // let liElem = document.createElement('li');
      // ulElem.textContent=this.location;
      parisList.textContent = this.location;
      for(let i = 0; i < hours.length; i++){
        let liElement = document.createElement('li');
        liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
        parisList.appendChild(liElement);
        // liElem.textContent = `${hours[i]}: ${this.estimateCookieSales} cookies`;
  
        // this.sum += this.estimateCookieSales;
      }
      let total = document.createElement('li');
      // document.write(`Total: ${this.sum} cookies`);
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
        this.cookiesPerHour.push(cookies); //from TA
        this.sum += cookies;
      }
    },
  
    render: function(){
      // let liElem = document.createElement('li');
      // ulElem.textContent=this.location;
      limaList.textContent = this.location;
      for(let i = 0; i < hours.length; i++){
        let liElement = document.createElement('li');
        liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
        limaList.appendChild(liElement);
        // liElem.textContent = `${hours[i]}: ${this.estimateCookieSales} cookies`;
  
        // this.sum += this.estimateCookieSales;
      }
      let total = document.createElement('li');
      // document.write(`Total: ${this.sum} cookies`);
      total.textContent = `Total: ${this.sum} cookies`;
      limaList.appendChild(total);
    }
  };
  
  lima.estimateCookieSales();
  lima.render();