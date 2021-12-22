import commonFunctionsUtil from '../../support/commands'

let commTSUtil = new commonFunctionsUtil()
var dayjs = require('dayjs')
var testExecutionTime = dayjs().format('YYYY-MM-DD HH:mm:ss')
const details = 'cypress/fixtures/details.txt'
var environment = 'weather'
var dbTable = 'api_status_weather'
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

    it("Belin", () => {
        serviceNameValue = "Belin"
        url= Cypress.env(environment) + '/v1/forecast'
        cy.request({
            method: 'GET',
            form: true,
            url: url,
            failOnStatusCode: false,
            qs: {
                'latitude': '52.52',
                'longitude': '13.41',
                'hourly': 'temperature_2m',
                'timeformat': 'unixtime'
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

    it("Paris", () => {
        serviceNameValue = "Paris"
        url= Cypress.env(environment) + '/v1/forecast'
        cy.request({
            method: 'GET',
            form: true,
            url: url,
            failOnStatusCode: false,
            qs: {
                'latitude': '48.8567',
                'longitude': '2.3510',
                'hourly': 'temperature_2m',
                'timeformat': 'unixtime'
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

    it("London", () => {
        serviceNameValue = "London"
        url= Cypress.env(environment) + '/v1/forecast'
        cy.request({
            method: 'GET',
            form: true,
            url: url,
            failOnStatusCode: false,
            qs: {
                'latitude': '51.5002',
                'longitude': '-0.1262',
                'hourly': 'temperature_2m',
                'timeformat': 'unixtime'
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

    it("Madrid", () => {
        serviceNameValue = "Madrid"
        url= Cypress.env(environment) + '/v1/forecast'
        cy.request({
            method: 'GET',
            form: true,
            url: url,
            failOnStatusCode: false,
            qs: {
                'latitude': '40.4167',
                'longitude': '-3.7033',
                'hourly': 'temperature_2m',
                'timeformat': 'unixtime'
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

    it("Vienna", () => {
        serviceNameValue = "Vienna"
        url= Cypress.env(environment) + '/v1/forecast'
        cy.request({
            method: 'GET',
            form: true,
            url: url,
            failOnStatusCode: false,
            qs: {
                'latitude': '48.2092',
                'longitude': '16.3728',
                'hourly': 'temperature_2m',
                'timeformat': 'unixtime'
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

    it("Brussels", () => {
        serviceNameValue = "Brussels"
        url= Cypress.env(environment) + '/v1/forecast'
        cy.request({
            method: 'GET',
            form: true,
            url: url,
            failOnStatusCode: false,
            qs: {
                'latitude': '50.8371',
                'longitude': '4.3676',
                'hourly': 'temperature_2m',
                'timeformat': 'unixtime'
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

    it("Moscow", () => {
        serviceNameValue = "Moscow"
        url= Cypress.env(environment) + '/v1/forecast'
        cy.request({
            method: 'GET',
            form: true,
            url: url,
            failOnStatusCode: false,
            qs: {
                'latitude': '55.7558',
                'longitude': '37.6176',
                'hourly': 'temperature_2m',
                'timeformat': 'unixtime'
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

    it("Sofia", () => {
        serviceNameValue = "Sofia"
        url= Cypress.env(environment) + '/v1/forecast'
        cy.request({
            method: 'GET',
            form: true,
            url: url,
            failOnStatusCode: false,
            qs: {
                'latitude': '42.7105',
                'longitude': '23.3238',
                'hourly': 'temperature_2m',
                'timeformat': 'unixtime'
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

    it("Athens", () => {
        serviceNameValue = "Athens"
        url= Cypress.env(environment) + '/v1/forecast'
        cy.request({
            method: 'GET',
            form: true,
            url: url,
            failOnStatusCode: false,
            qs: {
                'latitude': '37.9792',
                'longitude': '23.7166',
                'hourly': 'temperature_2m',
                'timeformat': 'unixtime'
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

    it("Oslo", () => {
        serviceNameValue = "Oslo"
        url= Cypress.env(environment) + '/v1/forecast'
        cy.request({
            method: 'GET',
            form: true,
            url: url,
            failOnStatusCode: false,
            qs: {
                'latitude': '59.9138',
                'longitude': '10.7387',
                'hourly': 'temperature_2m',
                'timeformat': 'unixtime'
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