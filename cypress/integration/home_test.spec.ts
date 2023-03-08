
describe('Home page', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000')
  })
  context("Hero Section",()=>{

    it('the h1 conatains the correct text', () => {
      cy.getBySel('hero-heading')
        .contains("Testing Next.js Applications with Cypress")
    })

    it('the feature on the homepage are correct',()=>{
      cy.get('dt').eq(0).contains('4 Courses')
      cy.get('dt').eq(1).contains('25+ Lessons')
      cy.get('dt').eq(2).contains('Free and Open Source')
    })
  })

  context("Course Section", ()=>{
  
    beforeEach(()=>{
      cy.visit('http://localhost:3000')
    }) 

    it("Course: Tetsing Your First Next.js Application",()=>{
      cy.getBySel("course-0").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-your-first-application")
    })
    
    it("Testing Foundations",()=>{
      cy.getBySel("course-1").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-foundations")
    })

    it("Cypress Fundamentals",()=>{

      cy.getBySel("course-2").find("a").eq(3).click()
      cy.location("pathname").should("eq", '/cypress-fundamentals')

    })
  })
})


