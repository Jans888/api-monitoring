import commonFunctionsUtil from '../../support/commands'

let commTSUtil = new commonFunctionsUtil()
var dayjs = require('dayjs')
var testExecutionTime = dayjs().format('YYYY-MM-DD HH:mm:ss')
const details = 'cypress/fixtures/details.txt'
var environment = 'ccy'
var dbTable = 'api_status_ccy'
var serviceNameValue;
var url;
var checkExecutionStatus;
var checkStatus;
var timestamp;

beforeEach(function() {
    timestamp = dayjs().format('YYYY-MM-DD HH:mm:ss')
  })

afterEach(function() {
    if (this.currentTest.state === 'failed' && 
      //@ts-ignore
      this.currentTest._currentRetry === this.currentTest._retries && checkExecutionStatus !== 'true') {
      //@ts-ignore
      //Cypress.runner.stop();
      let errMessage = 'Service is unavailable'
      let statusValue = '503'
      let responseTimeValue = '0'
      commTSUtil.writeDetails(serviceNameValue, environment, url, timestamp, errMessage, statusValue, responseTimeValue)
      commTSUtil.queryDb(dbTable, serviceNameValue, statusValue, responseTimeValue, testExecutionTime, errMessage, url)
    }
  })

describe("API Monitoring - Weather", () => {
    checkExecutionStatus = 'false'
    checkStatus = 'pass'

    it("USD/EUR", () => {
        serviceNameValue = "USD/EUR"
        url= Cypress.env(environment) + '/api/v7/convert'
        cy.request({
            method: 'GET',
            form: true,
            url: url,
            failOnStatusCode: false,
            qs: {
                'q': 'USD_EUR',
                'compact': 'ultra',
                'apiKey': 'e0642b14f686f2ee9aae'
            }
        }).then((response) => {
            let statusValue = response.status
            let responseTimeValue = response.duration
            let errMessage: any;
            if (response.status == 200) {
                errMessage = 'noErr'
            }
            else {
                checkStatus = 'failed'
                let responseBody = response.body
                errMessage = JSON.stringify(responseBody)
                commTSUtil.writeDetails(serviceNameValue, environment, url, timestamp, errMessage, statusValue, responseTimeValue)
            }
            commTSUtil.queryDb(dbTable, serviceNameValue, statusValue, responseTimeValue, testExecutionTime, errMessage, url)
            expect(response).property('status').to.exist
        })
    })

    it("USD/GBP", () => {
        serviceNameValue = "USD/GBP"
        url= Cypress.env(environment) + '/api/v7/convert'
        cy.request({
            method: 'GET',
            form: true,
            url: url,
            failOnStatusCode: false,
            qs: {
                'q': 'USD_GBP',
                'compact': 'ultra',
                'apiKey': 'e0642b14f686f2ee9aae'
            }
        }).then((response) => {
            let statusValue = response.status
            let responseTimeValue = response.duration
            let errMessage: any;
            if (response.status == 200) {
                errMessage = 'noErr'
            }
            else {
                checkStatus = 'failed'
                let responseBody = response.body
                errMessage = JSON.stringify(responseBody)
                commTSUtil.writeDetails(serviceNameValue, environment, url, timestamp, errMessage, statusValue, responseTimeValue)
            }
            commTSUtil.queryDb(dbTable, serviceNameValue, statusValue, responseTimeValue, testExecutionTime, errMessage, url)
            expect(response).property('status').to.exist
        })
    })

    it("USD/CAD", () => {
        serviceNameValue = "USD/CAD"
        url= Cypress.env(environment) + '/api/v7/convert'
        cy.request({
            method: 'GET',
            form: true,
            url: url,
            failOnStatusCode: false,
            qs: {
                'q': 'USD_CAD',
                'compact': 'ultra',
                'apiKey': 'e0642b14f686f2ee9aae'
            }
        }).then((response) => {
            let statusValue = response.status
            let responseTimeValue = response.duration
            let errMessage: any;
            if (response.status == 200) {
                errMessage = 'noErr'
            }
            else {
                checkStatus = 'failed'
                let responseBody = response.body
                errMessage = JSON.stringify(responseBody)
                commTSUtil.writeDetails(serviceNameValue, environment, url, timestamp, errMessage, statusValue, responseTimeValue)
            }
            commTSUtil.queryDb(dbTable, serviceNameValue, statusValue, responseTimeValue, testExecutionTime, errMessage, url)
            expect(response).property('status').to.exist
        })
    })

    it("EUR/GBP", () => {
        serviceNameValue = "EUR/GBP"
        url= Cypress.env(environment) + '/api/v7/convert'
        cy.request({
            method: 'GET',
            form: true,
            url: url,
            failOnStatusCode: false,
            qs: {
                'q': 'EUR_GBP',
                'compact': 'ultra',
                'apiKey': 'e0642b14f686f2ee9aae'
            }
        }).then((response) => {
            let statusValue = response.status
            let responseTimeValue = response.duration
            let errMessage: any;
            if (response.status == 200) {
                errMessage = 'noErr'
            }
            else {
                checkStatus = 'failed'
                let responseBody = response.body
                errMessage = JSON.stringify(responseBody)
                commTSUtil.writeDetails(serviceNameValue, environment, url, timestamp, errMessage, statusValue, responseTimeValue)
            }
            commTSUtil.queryDb(dbTable, serviceNameValue, statusValue, responseTimeValue, testExecutionTime, errMessage, url)
            expect(response).property('status').to.exist
        })
    })

    it("EUR/HUF", () => {
        serviceNameValue = "EUR/HUF"
        url= Cypress.env(environment) + '/api/v7/convert'
        cy.request({
            method: 'GET',
            form: true,
            url: url,
            failOnStatusCode: false,
            qs: {
                'q': 'EUR_HUF',
                'compact': 'ultra',
                'apiKey': 'e0642b14f686f2ee9aae'
            }
        }).then((response) => {
            let statusValue = response.status
            let responseTimeValue = response.duration
            let errMessage: any;
            if (response.status == 200) {
                errMessage = 'noErr'
            }
            else {
                checkStatus = 'failed'
                let responseBody = response.body
                errMessage = JSON.stringify(responseBody)
                commTSUtil.writeDetails(serviceNameValue, environment, url, timestamp, errMessage, statusValue, responseTimeValue)
            }
            commTSUtil.queryDb(dbTable, serviceNameValue, statusValue, responseTimeValue, testExecutionTime, errMessage, url)
            expect(response).property('status').to.exist
        })
    })

    it("Check execution status", () => {
        checkExecutionStatus = 'true'
        expect(checkStatus).to.be.equal('pass')
    })

})