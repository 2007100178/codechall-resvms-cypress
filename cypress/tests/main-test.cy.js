import MainPage from "../page-objects/main-page";
import SearchPage from "../page-objects/search-page";
import PurchaseSeatsPage from "../page-objects/purchase-seats-page";
import PurchasePassengerPage from "../page-objects/purchase-passenger-page";
import PurchasePaymentPage from "../page-objects/purchase-payment-page";
import PurchaseCompletePage from "../page-objects/purchase-complete-page";

Cypress.config({
  defaultCommandTimeout: 15000,
});

describe('Booking Site', () => {

  before(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
  })

  it('Simple Purchase Test Flow', () => {

    // Step1. Open the provided URL.
    cy.visit('https://berlinas.reservamos-saas.com/')

    // Step2. Select a departure location.
    const mainPage = new MainPage();
    mainPage.selectDepartureLocation('Bucaramanga')

    // Step3. Select a destination location.
    mainPage.selectDestinationLocation('Bogota')

    // Step4. Choose a travel date.
    mainPage.chooseTravelDate('2024-04-02')

    // Step5. Click on the "Search" or equivalent button to view available routes.
    mainPage.clickSearchButton()

    // Step6. Choose a trip from the displayed options.
    const searchPage = new SearchPage()
    searchPage.chooseResultByIndex(1)

    // Step7. Provide seat, passenger and purchaser details.
    const purchaseSeatsPage = new PurchaseSeatsPage()
    //purchaseSeatsPage.chooseAvailableSeat('09')
    purchaseSeatsPage.chooseAvailableSeat('00')
    purchaseSeatsPage.clickContinueButton()

    const purchasePassengerPage = new PurchasePassengerPage()
    cy.fixture('payment-data.json').then((passengerData) => {
      purchasePassengerPage.fillPassengerForm(passengerData)
    });

    // Step8. Fill payment information and click complete.
    const purchasePaymentPage = new PurchasePaymentPage()
    cy.fixture('payment-data.json').then((paymentData) => {
      purchasePaymentPage.fillPaymentForm(paymentData)
    });

    // Step9. Land in purchase completed view and make sure transaction was successful.
    const purchaseCompletePage = new PurchaseCompletePage()
    cy.fixture('payment-data.json').then((paymentData) => {
      purchaseCompletePage.verifyPurchaseCompleted(paymentData.email)
    });

  })

})