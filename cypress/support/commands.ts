var mysql = require('mysql');
const details = 'cypress/fixtures/details.txt'

export default class commonFunctionsUtil {
    constructor() {
    }

    public writeDetails(serviceNameValue, environment, url, timestamp, errMessage, statusValue, responseTimeValue) {
        cy.writeFile(details, '\nService name: ' + serviceNameValue, { flag: 'a+' })
        cy.writeFile(details, '\nEnvironment: ' + environment, { flag: 'a+' })
        cy.writeFile(details, '\nUrl: ' + url, { flag: 'a+' })
        cy.writeFile(details, '\nTimestamp: ' + timestamp, { flag: 'a+' })
        cy.writeFile(details, '\nResponse: ' + errMessage, { flag: 'a+' })
        cy.writeFile(details, '\nResponse status code: ' + statusValue, { flag: 'a+' })
        cy.writeFile(details, '\nResponse Time: ' + responseTimeValue + ' ms', { flag: 'a+' })
        cy.writeFile(details, '\n--------------------------------------------------------------', { flag: 'a+' })
    }

    public queryDb(dbTable, serviceNameValue, statusValue, responseTimeValue, testExecutionTime, errMessage, url) {
        cy.task('queryDb', "INSERT INTO "+ dbTable +" (serviceName, status, responseTime, time_executed, errMessage, url) VALUES ('" + serviceNameValue + "','" + statusValue + "','" + responseTimeValue + "','" + testExecutionTime + "'," + mysql.escape(errMessage) + ",'" + url + "')")
    }

}