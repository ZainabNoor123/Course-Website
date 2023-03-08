
describe('Newsletter Subscribe Form', ()=>{

    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })

    it('allow User to Subscribe to the newsletter',()=>{
        cy.getBySel('email-input').type('zainab@example.com')
        cy.getBySel('submit-button').click()
        cy.getBySel('success-message').should("exist")
    })

    it('does NOT allow already subscribed email',()=>{

        cy.getBySel('email-input').type('john@example.com')
        cy.getBySel('submit-button').click()
        cy.getBySel('server-error-message')
          .should('exist')
          .contains('already exists. Please use a different email address.')
    })
})