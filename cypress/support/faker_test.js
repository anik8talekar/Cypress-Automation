import { faker } from '@faker-js/faker';

export default class DataGenerator {
    static generatetestData() {
        return {
            email: faker.internet.email(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            company: faker.company.bs(),
            randomNumber: faker.datatype.number(),
            phonenumber: faker.phone.number(),
            templateName: faker.helpers.arrayElement(['New Template', 'Save Template', 'Best Template', 'Class Template'])

        };
    }
}


