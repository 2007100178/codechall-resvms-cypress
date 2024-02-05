class PurchasePaymentPage {
    constructor() {
        this.elements = {
            purchasePassengerPage: () => cy.visit('https://berlinas.reservamos-saas.com/purchase/checkout'),
            title: () => cy.get('p[title] > em'),
            passengersHeadingTitle: () => cy.get('div[class*="passengers-heading"] p[title]'),
            firstNameInput: () => cy.get('#purchaserFirstName'),
            lastNameInput: () => cy.get('#purchaserLastName'),
            phoneInput: () => cy.get('#phone'),
            emailInput: () => cy.get('#email'),
            documentTypeSelect: () => cy.get('[name*="documentType"]'),
            documentIdInput: () => cy.get('#documentId'),
            paymentSelectorCreditCard: () => cy.get('.payment-selector').find('button').eq(0),
            cardHolderNameInput: () => cy.get('#mercado_pago_form__cardholderName'),
            cardNumberInput: () => {
                //cy.frameLoaded('iframe[name*=cardNumber]')
                return cy.wait(2000).get('#mercado_pago_form__cardNumber')
            },
            cardExpirationDateInput: () => cy.wait(2000).get('#mercado_pago_form__expirationDate'),
            cardSecurityCodeInput: () => cy.wait(2000).get('#mercado_pago_form__securityCode'),
            cardHolderDocumentNumberInput: () => cy.get('#mercado_pago_form__identificationNumber'),
            cardHolderEmailInput: () => cy.get('#mercado_pago_form__cardholderEmail'),

            continueButton: () => cy.get('button[class*="main-button"]'),
        };
    }

    fillPaymentForm(paymentData) {
        this.elements.firstNameInput().click().type(paymentData.name)
        this.elements.lastNameInput().click().type(paymentData.last_name)
        this.elements.phoneInput().click().type(paymentData.phone)
        this.elements.emailInput().click().type(paymentData.email)
        this.elements.documentTypeSelect().select(paymentData.identification.type)
        this.elements.documentIdInput().type(paymentData.identification.number)

        this.elements.paymentSelectorCreditCard().click()
        this.elements.cardHolderNameInput().click().type(paymentData.name)
        this.elements.cardNumberInput().realClick().realType(paymentData.credit_card.number)
        this.elements.cardExpirationDateInput().realClick().realType(paymentData.credit_card.expiration_date)
        this.elements.cardSecurityCodeInput().realClick().realType(paymentData.credit_card.security_code)
        //this.elements.cardHolderDocumentNumberInput().click().type(paymentData.identification.number)
        //this.elements.cardHolderEmailInput().click().type(paymentData.email)

        this.elements.continueButton().click()
    }

}

export default PurchasePaymentPage;