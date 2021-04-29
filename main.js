let codingSchoolX = []

function goesIn(name) {
    codingSchoolX.push(name)
}

function goesOut(name) {
    codingSchoolX.splice(codingSchoolX.indexOf(name),1)
}

goesIn("Cactus")
console.log(codingSchoolX)

goesIn("Mihai")
console.log(codingSchoolX)

goesIn("Ilyas")
console.log(codingSchoolX)

goesIn("Mohammed")
console.log(codingSchoolX)

goesIn("Tania")
console.log(codingSchoolX)

goesIn("Oussama")
console.log(codingSchoolX)

goesIn("Alexis")
console.log(codingSchoolX)

goesOut("Alexis")
console.log(codingSchoolX)

goesIn("Issam")
console.log(codingSchoolX)

goesIn("Anthony")
console.log(codingSchoolX)

goesIn("Andy")
console.log(codingSchoolX)

goesIn("Loic")
console.log(codingSchoolX)

goesIn("Kevin")
console.log(codingSchoolX)

goesIn("Junior")
console.log(codingSchoolX)

goesIn("Charles")
console.log(codingSchoolX)

goesIn("William")
console.log(codingSchoolX)

goesOut("Charles")
console.log(codingSchoolX)

goesOut("William")
console.log(codingSchoolX)

goesIn("Gauthier")
console.log(codingSchoolX)

goesIn("Beytullah")
console.log(codingSchoolX)