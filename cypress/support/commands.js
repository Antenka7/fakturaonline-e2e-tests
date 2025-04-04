import {
  generateRandomEmail,
  generateRandomICO,
  generateRandomCity,
  generateRandomStreet
} from './utils'

Cypress.Commands.add('visitOnDomain', (args, domain = Cypress.env('currentDomain')) => {
  const customVisitCommand = `visit${domain.charAt(0).toUpperCase()}${domain.slice(1)}`
  cy[customVisitCommand](args)
});

Cypress.Commands.add('visitCz', (args) => {
  cy.visit(`https://dev.fakturaonline.cz${args}`)
});

Cypress.Commands.add('visitCom', (args) => {
  cy.visit(`https://dev.invoiceonline.com${args}`)
});

Cypress.Commands.add('visitSk', (args) => {
  cy.visit(`https://dev.fakturaonline.sk${args}`)
});

// Signup/login
Cypress.Commands.add("signupAndLogin", () => {
  const email = generateRandomEmail()

  cy.wrap(email).as('username')

  cy.visit("/login")
  cy.get(".el-input__inner").type(email)
  cy.get(".el-button.el-button--default.el-button--large.el-button--warning.el-button--full-width-with-icon.el-button--new-design")
    .click()

  cy.url().should('include', '/invoice')
})
