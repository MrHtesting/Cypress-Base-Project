// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('clickElement',(Webelement)=>{

        cy.xpath(Webelement,{timeout:10000}).click({force: true})


})

Cypress.Commands.add('hasText',(element,text) => {
        cy.xpath(element). should("have.text",text)
})

Cypress.Commands.add('navigateToURL',(_url)=>{
        cy.visit(_url)
})

Cypress.Commands.add('sendData',(element,data)=>{
        cy.xpath(element, {timeout: 10000}).should('be.visible').type(data,{force:true})
})
Cypress.Commands.add('MouseHover',(element,toDisplay)=>{
        cy.xpath(element).trigger('mouseover').click({force:true})
        cy.xpath(toDisplay).should('be.visible')
})

Cypress.Commands.add('MouseHoverAndClick',(element,toDisplay)=>{
        cy.xpath(element).trigger('mouseover').click({force:true})
        cy.xpath(toDisplay).trigger('mouseover').click({force:true})
})

Cypress.Commands.add('selectDropDownValue',(text,element)=>{
        cy.xpath(element).select(text,{force:true})
},)

Cypress.Commands.add('urlContains',(text)=>{
        cy.url().should('contain',text)
})