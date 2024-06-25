const {faker} = require('@faker-js/faker');

export class RandomUtil {


    generateFirstName() {
        return faker.name.firstName()

    }

    generateLastName() {
        return faker.name.lastName()
    }

    generateEmail(){
      return faker.internet.email()
    }

    generateDOB(){
        return faker.date.past()
    }

    generateRandomString(length){

        return faker.lorem.word(length)
    }

    generateRandomNumber(length){
        return faker.datatype.number(length)
    }





}