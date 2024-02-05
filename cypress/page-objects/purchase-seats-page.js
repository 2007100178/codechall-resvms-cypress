class PurchaseSeatsPage {
    constructor() {
        this.elements = {
            purchasePassengerPage: () => cy.visit('https://berlinas.reservamos-saas.com/purchase/seats'),
            title: () => cy.get('p[title] > em'),
            seatsSummaryTitle: () => cy.get('div[class=*"seats-summary"]').find('p[title]').first(),
            seatsLayoutContainer: () => cy.get('div[class*="seats-layout"]'),
            availableSeats: () => cy.get('button[class*="seat-available"]'),
            continueButton: () => cy.get('button[class*="main-button"]'),
        };
    }

    chooseAvailableSeat(seatNumber) {
        if (seatNumber === '00') {
            this.elements.availableSeats().first().should('exist').as('seatSelected').click({ force: true })
        }
        else {
            this.elements.availableSeats().contains(seatNumber).first().should('exist').as('seatSelected').click({ force: true })
        }
        cy.get('@seatSelected').should('not.have.class', 'seat-available')
    }

    clickContinueButton() {
        this.elements.continueButton().click()
    }

}

export default PurchaseSeatsPage;