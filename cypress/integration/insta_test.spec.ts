


describe('Login Instagram',()=>{
  it('Should login',()=>{
     
       cy.loginViaUi(Cypress.env('username'), Cypress.env('password'))
       cy.get('button[type="submit"]').click()
       cy.url().should('include', '/accounts/login')
  })
})


