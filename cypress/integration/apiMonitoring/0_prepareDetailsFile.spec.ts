const details = 'cypress/fixtures/details.txt'

describe("Prepare details file", () => {
    it("Prepare details file", () => {
        cy.writeFile(details, '')
    })

})