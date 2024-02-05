class MainPage {
    constructor() {
        this.elements = {
            mainPage: () => cy.visit('https://berlinas.reservamos-saas.com/'),
            title: () => cy.get('p[title] > em'),
            searchBar: () => cy.get('div[class*="searchbar"]'),
            originInput: () => cy.get('input[class*="origin"]'),
            destinationInput: () => cy.get('input[class*="destination"]'),
            departureDateInput: () => cy.get('input[class*="departureDate"]'),
            returnDateInput: () => cy.get('input[class*="returnDate"]'),
            searchButton: () => cy.get('button[type="submit"]'),
        };
    }

    selectDepartureLocation(location) {
        this.elements.originInput().click().type(location)
        this.elements.originInput().next('ul').as('originList')
        cy.get('@originList').find('li').first().click()
        this.elements.originInput().should('contain.value', location)
    }

    selectDestinationLocation(location) {
        this.elements.destinationInput().click().type(location)
        this.elements.destinationInput().next('ul').as('destinationList')
        cy.get('@destinationList').find('li').first().click()
        this.elements.destinationInput().should('contain.value', location)
    }

    chooseTravelDate(date) {
        this.elements.departureDateInput().click().type(date + '{enter}', { force: true })
        this.elements.departureDateInput().should('contain.value', date)
    }

    chooseReturnDate(date) {
        this.elements.returnDateInput().click().type(date + '{enter}', { force: true })
        this.elements.returnDateInput().should('contain.value', date)
    }

    clickSearchButton() {
        this.elements.searchButton().click()
        cy.url().should('not.eq', 'https://berlinas.reservamos-saas.com/')
    }

}

export default MainPage;
