 const frmData = document.getElementById('frm');

 frmData.addEventListener('submit',(data)=>{
data.preventDefault()
console.log(data)
const frm = new FormData(data.target)
console.log(frm.get('textBox'))
console.log(frm.get('radioBtn'))
console.log(frm.get('celiusBtn'))

  if(frmData < -50){
    console.log('weather is cold')
  }else{
    console.log('weather is warm today')
  }
 })
 const colorChange = document.getElementById('changeColors')
 colorChange.addEventListener('click',Event =>{
  colorChange.style.backgroundColor = 'orange'
  colorChange.textContent = '🖕🏾 i told you not to touch me!!'
  
 })
 const person ={
  name:["nelson", "smith"],
  age:31,
  bio:function() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old`)
  },
  introduceSelf:function(){
    console.log(`hi i am ${this.name[0]} ${this.name[1]}`)
   }
   
 }
 const myDataName = 'height';
 const myDataValue = '5.10';
 person[myDataName] = myDataValue;
 person.height;
 
 
 


 
 console.log(person.bio)
 person.bio()

const binadamu = {
  name:['nelson',"smith"]
}
  const mtu = {
    name:{
    firstName:'nelson',
    lastName:'smith',
    age:25,
    }
  }
  mtu.lastName = 'makori'
  console.log(mtu.lastName)
  
  mtu.age=45;
  //mtu["firstName"]["lastName"] ="cratchit";
  console.log(mtu.age)
  console.log(mtu.name)
  

 const person2 ={
  name:['bob','simba'],
  age:31,
 };
  function logProperty(propertyName){
    console.log(person2[propertyName])

  }
  logProperty('name')
  logProperty("age")
  
  function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
  }
  const nelson = createPerson('makori');
  nelson.name;
  nelson.introduceSelf()

 const kitam = document.getElementById('frm3');
 kitam.addEventListener('submit',(e) =>{
  e.preventDefault()
  console.log(e)

  const form3 = new FormData(e.target)
  console.log(form3.get('pass'))
 })

 function car(make,year,model,color,mileage,name){
  this.name = 'nelson'
  this.make = make,
  this.model = model,
  this.year = year,
  this.color = color,
  this.drive = function(){
    console.log(`${this.name} drives ${this.make} ${this.model} ${this.year}`)
  }


 }
 const car1 = new car ("mercedese",2012,"c250","171000");
 console.log(car1.make)
 car1.drive()

 class Denno{
  constructor(country,Hometown,age)
  {
  this.country = country;
  this.Hometown = Hometown;
  this.age = age;
  this.bio = function(){
    console.log(`dennis he is from ${this.country}`)
  }
  }
 }
 const dennis = new Denno('kenya','keroka',24);
 console.log(dennis.country)
 dennis.bio()

 class Allegra{
  constructor(name,Home,state,city,Gender){
    this.name = name,
    this.Home = Home,
    this.state = state,
    this.city = city,
    this.Gender = Gender,
    this.fayth = function(){
      console.log(`${this.name} she is from ${this.Home}
      state ${this.state} and lives in ${this.city}`)
    }
  }
  }
  const navajo = new Allegra('allegra','USA','new mexico','farmington','female')
  
  console.log(navajo.Home)
  navajo.fayth()

 

