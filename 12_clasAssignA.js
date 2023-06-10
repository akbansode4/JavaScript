class Vehicle{
    constructor(company,color,mileage,topSpeed,prize){
        this.company=company;
        this.color=color;
        this.mileage=mileage,
        this.topSpeed=topSpeed,
        this.prize=prize
    }
    showDetails(){
        console.log(`Vehicle Details => company: ${this.company}, color: ${this.color}, mileage: ${this.mileage}, topSpeed: ${this.topSpeed}, prize: ${this.prize}`);
    }
}
let tesla= new Vehicle('Tesla','red','30km/lit','220','70 Lakh');
let jaguar= new Vehicle('Jaguar','Black','20km/lit','250','60 Lakh');
let mahindra= new Vehicle('Mahindra','Blue','25km/lit','210','50 Lakh');
let ford= new Vehicle('Ford','white','15km/lit','240','30 Lakh');
let bmw= new Vehicle('BMW','green','23km/lit','230','55 Lakh');

let array = [tesla,jaguar,mahindra,ford,bmw]
for (const iterator of array) {
    iterator.showDetails();
}
class Collage{
    name;
    city;
    phoneNo;
    collageCode;
    constructor(name,city,phoneNo,collageCode){
        this.name=name,
        this.city=city,
        this.phoneNo=phoneNo,
        this.collageCode=collageCode
    }
}

let coep = new Collage('COEP','Pune','91 9775 657966','4567');
let sinhgad = new Collage('Sinhgad','Pune','91 8575 656766','7865');
let fergusson = new Collage('Fergusson','Pune','91 8785 687466','9054');
let wadia = new Collage('Wadia','Pune','91 8875 678687','4378');


function traverseObject(collageObject){
    for (const key in collageObject) {
        console.log(`${key}: ${collageObject[key]}`);
    }
}
console.log('');
console.log('Traverse collageObject USing For In Loop');

traverseObject(coep);
console.log('');
traverseObject(sinhgad);
console.log('');
traverseObject(fergusson);
console.log('');
traverseObject(wadia);
console.log('');
