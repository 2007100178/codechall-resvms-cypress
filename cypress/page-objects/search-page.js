class SearchPage {
    constructor() {
        this.elements = {
            searchPage: () => cy.visit('https://berlinas.reservamos-saas.com/search'),
            title: () => cy.get('p[title] > em'),
            resultsTitle: () => cy.get('div[class*="results-title"]'),
            resultsContainer: () => cy.get('div[class*="results-container"]'),
        };
    }

    getResultContainerByIndex(index) {
        this.elements.resultsContainer().as('resultsContainer')
        return cy.get('@resultsContainer').find('div[class*="result-with-icons__container"]').eq(index)
    }

    chooseResultByIndex(index) {
        this.getResultContainerByIndex(index).as('resultContainer')
        cy.get('@resultContainer').find('.result-with-icons__section > button').click({ force: true})
    }

}

export default SearchPage;