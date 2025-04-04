import {
    generateRandomICO,
    generateRandomEmail,
    generateRandomCountry,
    generateRandomCity,
    generateRandomStreet
  } from '../../support/utils'
  
  describe("Create Contact", () => {
    beforeEach(() => {
      cy.signupAndLogin()
      cy.get('@username').then((email) => {
        cy.log('Použitý e-mail: ' + email);
      });
    });
  
    it("Create new client", () => {
      const client = "Test"
      const ICO = generateRandomICO()
      const city = generateRandomCity()
      const street = generateRandomStreet()
  
      cy.log("New client")
      cy.get('a[href="/contacts"]').click()
      cy.get(".header-extra-content").click()
  
      cy.get("#invoice_attributes_name")
        .should("be.visible")
        .scrollIntoView()
        .click({ force: true })
      
      cy.wait(300)

      cy.get("#invoice_attributes_name")
        .clear()
        .type(client, { delay: 100 })
        .should("have.value", client)
  
      cy.get("#invoice_attributes_company_number")
        .click()
        .type(ICO)
        .should("be.visible")
  
      cy.get("#invoice_attributes_address_attributes_street")
        .click()
        .type(street)
        .should("be.visible")
  
      cy.get("#invoice_attributes_address_attributes_city")
        .click()
        .type(city)
        .should("be.visible")
  
      cy.get("#invoice_contact_attributes_address_attributes_country_code")
        .click()
  
      cy.get(".el-scrollbar__view.el-select-dropdown__list")
        .contains("Tuvalu")
        .click()
  
      cy.get('[data-analytics-id="contacts.buttons.save"]').click()
  
      cy.get(".el-table__body")
        .contains(client)
        .should("be.visible")
    })
  })
  