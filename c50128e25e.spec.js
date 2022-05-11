describe('Login', () => {
    beforeEach(() => {
    cy.visit('http://localhost:8000')
    })
 
    it('login', () => {
          cy.get('.btn > .form-control').type('c50128e25e')
          cy.contais('Enter').click()
    })
