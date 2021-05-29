var doctor = {
    lastName :"Ajanlekoko",
    firstName : "Yakubu",
    age : 54,
    address : "Ranvir street",
    email : "jibola @ gmail.com",

    initialMethod:function(){
        return this. lastName + " " + this. firstName
    },

    finalMethod:function(){
        return this.age +5
    }

}
console.log(doctor.initialMethod());
console.log(doctor.finalMethod());