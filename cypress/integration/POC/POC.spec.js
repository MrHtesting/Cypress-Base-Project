

let config
let elements
import {RandomUtil} from "../Utils/RandomUtil";

let random;
random = new RandomUtil()
before(function () {

    cy.fixture('config.json').then(function (testdata)   {
        config = testdata

    })

    cy.fixture('elements.json').then(function (testdata)   {
        elements = testdata

    })

})


Given("I navigate to Home Page of {string}", (_url) => {

    cy.navigateToURL(config[_url])


});

When("I type {string} to {}", (data,element) => {
    cy.sendData(elements[element], data)
});

When("I click {}", function (element) {
    cy.clickElement(elements[element])
});


When("I hover over {} and {} is displayed", function (element,toDisplay) {
    cy.MouseHover(elements[element],elements[toDisplay])
});

When("I scroll to {}", function (element) {
    cy.scrollIntoView(elements[element])

});


When("I select {string} from dropdown {}", function (text,element) {
    cy.selectDropDownValue(text,element)

});

Then("I should see {} has text {string}", function (element,text) {
    cy.hasText(elements[element], text)
});
Then("I should see elements have text",  (datatable) => {

    datatable.hashes().forEach(element =>{
        cy.hasText(elements[element.element],element.text)

    })
});

Then("I should see page URL contains {string}", function (text) {
    cy.urlContains(text)
});


When("I enter Random First name in {}", function (element) {
    cy.sendData(element,random.generateFirstName())

});

When("I enter Random Last name in {}", function (element) {
    cy.sendData(element,random.generateLastName())

});

When("I enter Random string in {} of length {string}", function (element,length) {
    cy.sendData(element,random.generateRandomString(length))

});

When("I enter Random number in {}", function (element,length) {
    cy.sendData(element,random.generateRandomNumber(length))

});


