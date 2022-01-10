//დავალება 1. const currentDay = new Date().getDay(); currentDay ცვლადი გვაძლევს კვირის დღეს რიცხვითი სახით 
//0 - არის კვირა 1 - არის ორშაბათი და ასე შემდეგ. 0 - 6 ამდე რიცხვს აბრუნებს სადაც 6 არის შაბათი ,
// დავწეროთ switch სადაც შევამოწმებთ currentDay-ს და 0 ის შემთხვევაში console.log ში
// გამოვიტანთ სიტყვას კვირას 1 ის შემთხვევაში ორშაბათს და ასე შემდეგ 6 ამდე.

const currentDay = new Date(). getDay();
switch(currentDay){
    case 0:
        console.log('კვირა');
        break;
    case 1:
        console.log('ორშაბათი');
        break;
    case 2:
        console.log('სამშაბათი');
        break;
    case 3:
        console.log('ოთხშაბათი');
        break;
    case 4:
        console.log('ხუთშაბათი');
        break;
    case 5:
        console.log('პარასკევი');
        break;
    case 6:
        console.log('შაბათი');
        break;
}


//2. დაწერეთ for ციკლი 0 დან 100 - მდე
for(i=0; i<100; i++){
    console.log(i);
}


//3. დაწერეთ while ციკლი 0 დან 50 - მდე
let count = 0;
while(count<50){
    console.log(count);
    count++;
}
 

//4. დაწერეთ do while ციკლი 0 დან 150 - მდე
let numbers=0;
do{
  console.log(numbers);
  numbers++;
}
while(numbers<150);


//5. შექმენით ცვლადი და მიანიჭეთ ცარიელი მასივი, შემდეგ დაწერეთ Loop ( for ან while ან do while ) 1 დან 10000 - მდე 
//ამ მსაივში ჩაწერეთ ინდექსი გამრავლებული ინდექსზე (i * i) მასივში ჩაწრა ხდება push მეთოდის საშუალებით ლექციის ფაილში გვიწერია.

let array = [];
for(i=1; i<10000; i++){
    array.push(i*i);
}
console.log(array);

