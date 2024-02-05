class PurchasePassengerPage {
    constructor() {
        this.elements = {
            purchasePassengerPage: () => cy.visit('https://berlinas.reservamos-saas.com/purchase/passenger'),
            title: () => cy.get('p[title] > em'),
            passengersHeadingTitle: () => cy.get('div[class*="passengers-heading"] p[title]'),
            nameInput: () => cy.get('input[id*="firstName"]'),
            lastNameInput: () => cy.get('input[id*="lastName"]'),
            emailInput: () => cy.get('input[id*="email"]'),
            daySelect: () => cy.get('select[id*="day-select"]'),
            monthSelect: () => cy.get('select[id*="month-select"]'),
            yearSelect: () => cy.get('select[id*="year-select"]'),
            nationalitySelect: () => cy.get('select[name*="nationality"]'),
            documentTypeSelect: () => cy.get('select[name*="documentType"]'),
            documentNumberSelect: () => cy.get('input[id*="documentId"]'),
            continueButton: () => cy.get('button[class*="main-button"]'),
        };
    }

    fillPassengerForm(passengerData) {
        const [day, month, year] = passengerData.birthDate.split('-')
        this.elements.nameInput().click().type(passengerData.name)
        this.elements.lastNameInput().click().type(passengerData.last_name)
        this.elements.emailInput().click().type(passengerData.email)
        this.elements.daySelect().select(day)
        this.elements.monthSelect().select(month)
        this.elements.yearSelect().select(year)
        this.elements.nationalitySelect().select(passengerData.nationality)
        this.elements.documentTypeSelect().select(passengerData.identification.type)
        this.elements.documentNumberSelect().type(passengerData.identification.number)

        this.verifyPassengerForm(passengerData)
        this.elements.continueButton().click().wait(5000)
    }

    verifyPassengerForm(passengerData) {
        const [day, month, year] = passengerData.birthDate.split('-')
        this.elements.nameInput().should('contain.value', passengerData.name)
        this.elements.lastNameInput().should('contain.value', passengerData.last_name)
        this.elements.emailInput().should('contain.value', passengerData.email)
        this.elements.daySelect().should('contain.value', day)
        this.elements.monthSelect().should('contain.value', month)
        this.elements.yearSelect().should('contain.value', year)
        this.elements.nationalitySelect().should('contain.text', passengerData.nationality)
        this.elements.documentTypeSelect().should('contain.text', passengerData.identification.type)
        this.elements.documentNumberSelect().should('contain.value', passengerData.identification.number)
    }

}

export default PurchasePassengerPage;