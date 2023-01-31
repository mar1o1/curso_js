let me  = {
    name: 'John' ,
    age: 30,
}

function checkAge( person ) {
     console.log('a idade da pessoa é ' + person.age)
        if ( person.age >= 18 ) {
            console.log( person.name + ' é maior de idade')
        } else {
            console.log( person.name + ' é menor de idade')

        }

}
 checkAge( me )