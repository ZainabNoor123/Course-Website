

describe('User Journey', () => {
  it('User select a course from Home Page and complete it', () => {
    cy.visit('http://localhost:3000/')

    cy.getBySel("course-0").find("a").eq(3).click()
    cy.location("pathname").should("eq", "/testing-your-first-application")
    cy.getBySel("next-lesson-button").click()

    cy.location("pathname",{timeout:60000}).should("eq", "/testing-your-first-application/app-install-and-overview")

     cy.getBySel("challenge-answer-0").click()
    cy.getBySel("next-lesson-button").should("exist").click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
    )

    cy.getBySel("challenge-answer-0").click()
    cy.getBySel("next-lesson-button").should("exist").click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/setting-up-data-before-each-test"
    )

    cy.getBySel("challenge-answer-0").click()
    cy.getBySel("next-lesson-button").should("exist").click()
  })
})