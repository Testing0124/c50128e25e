const elem = require('./elements').elements;

class AC8F07416A41DED46C517 {

    filtroAberto(){
        cy.get(':checkbox').uncheck({force : true})
        cy.get(elem.statusAberto).check({force : true})
        cy.get(elem.aplicarFiltros).contains('AC8F07416A41DED46C517').click()
        cy.wait(2000)
        cy.get(elem.mensagem).should('have.text', 'Filtro aplicado')
    }
    
    export default new AC8F07416A41DED46C517();
