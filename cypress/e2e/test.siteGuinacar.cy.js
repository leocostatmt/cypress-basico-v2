
/// <reference types="Cypress" />

// NESTES TESTES SÃO UTILIZADOS TDD (TEST-DRIVEN-DEVELOPMENT)


describe('Testes de Interface Gráfica Site Guinacar Automotive' , function() {
    const SEVEN_SECONDS_IN_MS = 7000

    
    beforeEach(function(){
        cy.visit('https://www.guinacarautomotive.com.br')
    })

    //DEVE DAR CERTO
    it('verifica se o site está online 1' , function(){
        cy.title().should('be.equal' , 'Guinacar Automotive | Loja Online')
    })

    //DEVE DAR ERRADO
    it('verifica se o site está online 2' , function(){
        cy.title().should('not.be.equal' , 'Guinacar Automotive | Loja Online')
    })

    // ADICIONA PRODUTO AO CARRINHO,
    // VALIDA SE O PRODUTO FOI ADICIONADO,
    // E LOGO APÓS O EXCLUI E VERIFICA SE FOI EXCLUIDO
    it.only('adiciona produto ao carrinho, e valida se foi adicionado, e logo após o exclui' , function(){


        cy.clock()
        cy.tick(SEVEN_SECONDS_IN_MS)
        cy.get('.ui-ms-newsletter-modal__content-close > svg').click()
        
        cy.contains('Óleo De Câmbio Manual Petronas Zc 75w-80 Tutela 1 L').click({force : true})
        cy.clock()

        cy.contains('Adicionar ao carrinho').click({force : true})
        cy.clock()
        cy.should('be.visible' , '#item-row')

        cy.contains('Excluir').click({force : true})
        cy.clock()
        cy.should('be.visible' , 'Ir de compras')

})

})
