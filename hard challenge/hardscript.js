function createPatient(){
    let PII = {
        name: "james",
        ssn: "123-45-6789"
    }
    return {
        getName: function () {
            return PII.name;
        }
    }
}

const patient2 = createPatient();

console.log(patient2.getName()); //james

console.log(patient2.ssn); //undefined
