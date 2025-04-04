import { generateRandomEmail } from '../../support/utils'

describe("Sign up", () => {
  let username

  beforeEach(() => {
    username = generateRandomEmail()
    cy.log("e-mail: ${username}")
    cy.visit("/")
  })

  it("Sign up - registrace nového účtu", () => {
    cy.visit("/login")

    cy.log("Sign up new account")

    cy.get(".el-input__inner")
      .type(username)
      .should("be.visible")

    cy.wait(1000)

    cy.get(".el-button.el-button--default.el-button--large.el-button--warning.el-button--full-width-with-icon.el-button--new-design")
      .click()
  })
})
