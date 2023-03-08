import { beforeEach } from "mocha"

describe("Newsletter Subscribe Form", ()=>{

    beforeEach(()=>{
        cy.visit("http://localhost:3000")
    })

    it("allows user to Subscribe to the newsletter",()=>{
        cy.getBySel('email-input').type('zainab@happy.com')
        cy.getBySel('submit-button').click()
        cy.getBySel('success-message').should('exist').contains('zainab@happy.com')
    })

    it.only("does not allow invalid email",()=>{

        cy.getBySel('email-input').type('zainab')
        cy.getBySel('submit-button').click()
        cy.getBySel('success-message').should('not.exist')
    })

})