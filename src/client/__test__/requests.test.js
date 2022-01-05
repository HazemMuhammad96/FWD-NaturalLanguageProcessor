import { getTestRequest } from "../js/api/requests";

describe('Testing the API Calls', () => {


    test("make a test http request", () => {
        getTestRequest("https://www.google.com").then(res => {
            expect(res).toEqual({
                title: 'test json response',
                message: 'this is a message',
                time: 'now'
            });
        });
     })

})
