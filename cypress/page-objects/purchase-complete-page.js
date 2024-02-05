class PurchaseCompletePage {

    constructor() {
        this.elements = {
            purchasePassengerPage: () => cy.visit('https://berlinas.reservamos-saas.com/purchase/complete'),
            title: () => cy.get('p[title] > em'),
            passengersHeadingTitle: () => cy.get('div[class*="complete-header-overlay"] p[title]'),
            downloadTicketButton: () => cy.get('.purchase-layout-content').find('a').first(),
            confirmedEmail: () => cy.get('.steps-status').find('p').eq(1),
        };
    }

    verifyPurchaseCompleted(email) {
        this.elements.passengersHeadingTitle().should('contain.text', '¡Muchas gracias!')
        this.elements.downloadTicketButton().should('be.visible')
        this.elements.confirmedEmail().should('have.text', email)
    }
}

export default PurchaseCompletePage;