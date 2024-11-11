import "cypress-real-events";

describe('test drag and drop', () => {

    it ('drag and drop using trigger', () => {

        // cy.visit('https://practice.expandtesting.com/drag-and-drop')
        // cy.get('#column-a').trigger('mousemove').trigger('mousedown')
        // cy.get('#column-b').trigger('mousemove').trigger('mouseup')

        // cy.wait(2000)

        // cy.get('#column-a').drag('#column-b', {force:true})

        // cy.wait(2000)
        // cy.get('#column-a').drag('#column-b')

        const dataTransfer = new DataTransfer();
        cy.visit('https://artoftesting.com/samplesiteforselenium')
        cy.get('#myImage').trigger('dragstart', {dataTransfer})
        cy.get('#targetDiv').trigger('drop', {dataTransfer})

        cy.go(-1)
        cy.go(-2)
        cy.go(1)
        cy.get('#targetDiv').should('be.visible')
    })

    it.only ('drag and drop using cypress drag and drop plugin', () => {
        cy.visit('https://artoftesting.com/samplesiteforselenium')
        cy.get('#myImage').drag('#targetDiv')
    })

    it ('drag and drop using cypress real events plugin methods', () => {
        cy.visit('https://artoftesting.com/samplesiteforselenium')
    })
})