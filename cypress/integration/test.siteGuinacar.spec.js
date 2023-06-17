


// CAC.CAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />



describe('Central de Atendimento ao Cliente TAT' , function() {
    //const THREE_SECONDS_IN_MS = 3000
    
    beforeEach(function(){
        cy.visit('www.guinacarautomotive.com.br')
    })

    it.only('verifica se o site está online' , function(){
        cy.title().should('not.be.equal' , 'Guinacar Automotive | Loja Online')
    })


})
