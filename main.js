// Khai bao voi let var va const
// so sanh let var const (hosting)
// nen dung khai bao trong truong hop nao
// var co hosting, function scope, co trong object window
// let khong co hosting, khong co trong object window, block scope


//let
let age = 25;
console.log(age);

function showError() {
    let isError = true;
    let error;
    if(isError) {
        let error = "some things went wrong";
        console.log(error);
    }
    console.log(error);
}
showError();

//const


/**
*Function
* - Arrow Function
* - so sanh declaration vs expression ( normal function ) vs arrow function (cu phap, con tro this)
*/

//Expression Function
const calcAgeNormal = function(birthYear) {
    return 2021 - birthYear;
}

//Arrow Function
// khong ding nghia con tro this cua rieng no
// Gia tri this cua arrow function = this cua outer function
// khong dung arrow function de lam constructor function va lam method object

const calcAgeArrow = (birthYear) => {
    console.log(2021 - birthYear, "aaa");
};

calcAgeArrow(2000);

const calcAgeShort = (birthYear) => 2021 - birthYear;
const calcAgeOnePrama = birthYear => 2021 - birthYear;

const student = {
    name: "Jack",
    birthYear: 1998,
    calcAgeNormal: function() {
        console.log(2021 - this.birthYear);

        /*
        const checkAgeNormal = function() {
            if(2021 - this.birthYear >= 18) {
                console.log("You are enough");
            }else {
                console.log("You are not enough");
            }
        }.bind(student);
        checkAgeNormal();
        */

        // Gia tri this cua arrow function = this cua outer function
        const checkAgeArrow = () => {
            if(2021 - this.birthYear >= 18) {
                console.log("You are enough");
            }else {
                console.log("You are not enough");
            }
        };
        checkAgeArrow();
    },

    //khong dung arrow lam phuong thuc cua object
    calcAgeArrow: () => {
         console.log(2021 - this.birthYear);
    }
}
// student.calcAgeNormal();


//Default Parameter
const defultParameter = (tyOfUser = 'user') => {
    if(tyOfUser === "user") {
        console.log("Redirect to user page");
    }else {
        console.log("Redirect to admin page");
    }
}
// defultParameter();


//Detructure
//Detructure with arry
const names = ['aa','bb','cc'];
const [a,b,c] = names;
console.log(a,b,c);
//Detructure with object 
const persons = {
    fullName: "Nguyen Van A",
    age: 18,
    class: "ABCD",
};
const {fullName, class: className} = persons;
console.log(fullName, className);



//Short syntax

const age = 18;
const user = {
    _name: "jack",
    age,
    calcAge(){
        console.log(this.age);
    }

}

