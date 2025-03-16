import { faker } from '@faker-js/faker';

export default class EngagementNameGenerator{
    static generateEngagementName(){
        return{
            EngagementName: faker.name.fullName(),
            InvestorName: faker.helpers.arrayElement(["MADISON","LUCILLE BLUTH FUND","Test Entity","PE FUND I, L.P.","STANLEY SITWELL FUND","LEXINGTON","AM PRIVATE EQUITY GP FUND, L.P.","AMERICAS","test"]),
            InvestmentName: faker.helpers.arrayElement(["MADISON","LUCILLE BLUTH FUND","Test Entity","PE FUND I, L.P.","STANLEY SITWELL FUND","LEXINGTON","AM PRIVATE EQUITY GP FUND, L.P.","AMERICAS","ABC PARTNERSHIP"]),
        };
    }
}