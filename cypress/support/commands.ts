 /// <reference path="../global.d.ts" />
// @ts-nocheck


Cypress.Commands.add("getBySel", (selector, ...args) => {
     return cy.get(`[data-test=${selector}]`, ...args)
 })

 Cypress.Commands.add('loginViaUi', (username, password) => {
        cy.visit('https://www.instagram.com')
        cy.get("button")
            .contains("Only allow essential cookies").click()
        cy.get("button")
            .contains("Log In").click()
        cy.get("input[aria-label='Phone number, username, or email']").type(username)
        cy.get("input[aria-label='Password']").type(password)
        cy.get('button[type="submit"]').click()
      }
    )

// Cypress.Commands.add("clickLink",(label)=>{
//     //cy.find('a').contains(label).click()
//     cy.getBySel(label).find("a").eq(3).click()
// })
  

// Cypress.Commands.add("getBySelLike", (selector, ...args) => {
//   return cy.get(`[data-test*=${selector}]`, ...args)
// })

// let LOCAL_STORAGE_MEMORY = {}

// Cypress.Commands.add("saveLocalStorage", () => {
//   Object.keys(localStorage).forEach((key) => {
//     LOCAL_STORAGE_MEMORY[key] = localStorage[key]
//   })
// })

// Cypress.Commands.add("restoreLocalStorage", () => {
//   Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
//     localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key])
//   })
// })

 export {}
