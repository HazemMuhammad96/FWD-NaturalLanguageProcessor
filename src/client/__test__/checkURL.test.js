import isValidUrl from "../js/checkURL";


describe('Testing the URL Checker', () => {


    test("use a valid url", () => {
        expect(isValidUrl("https://www.google.com")).toBe(true);
    });

    test("use a invalid url", () => {
        expect(isValidUrl("blabla")).toBe(false);
    });

    test("use a empty input", () => {
        expect(isValidUrl("")).toBe(false);
    })

});