

describe('Central de Atendimento ao Cliente TAT' , function() {
    //const THREE_SECONDS_IN_MS = 3000
    
    beforeEach(function(){
        cy.visit('www.guinacarautomotive.com.br')
    })

    //DEVE DAR CERTO
    it('verifica se o site está online 1' , function(){
        cy.title().should('be.equal' , 'Guinacar Automotive | Loja Online')
    })

    //DEVE DAR ERRADO
    it('verifica se o site está online 2' , function(){
        cy.title().should('not.be.equal' , 'Guinacar Automotive | Loja Online')
    })


})
