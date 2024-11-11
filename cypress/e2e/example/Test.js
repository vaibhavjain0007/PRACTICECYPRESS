import LoginPage from "../../support/pages/LoginPage";

describe ('test login amazon', () => {

    const loginPage = new LoginPage();

    beforeEach('login', () => {
        cy.visit('https://www.amazon.in/')
    })

    it ('test logo visibility', () => {
        cy.get('#nav-logo').should('be.visible')
    })

    it ('test saerch and select product among results shown', () => {
        cy.get('#twotabsearchtextbox').type('vivo t3 5g mobile new 2024 256 gb')
        // cy.contains('vivo t3 5g mobile new 2024 256 gb').click()

        cy.get('.left-pane-results-container > div').each(($el, index, $list) => {
            cy.log('outside')
            if ($el.text().includes('vivo t3 5g mobile new 2024 256 gb')) {
                cy.log('inside**********************************************************************************8')
                cy.get('.left-pane-results-container > div').eq(index).realClick()
                return
            }
        })

        cy.contains('Vivo Y200 5G Mobile (Jungle Green, 8GB RAM, 256GB Storage)')
        .should('be.visible')
        .invoke('removeAttr', 'target')
        .click()

        // cy.get("[data-component-type='s-search-result']").each(($el, index, $list) => {
        //     cy.log($el.text())
        //     if ($el.text().includes('Vivo Y200 5G Mobile (Jungle Green, 8GB RAM, 256GB Storage)')) {
        //         cy.log('inside')
        //         $el.get("[data-component-type='s-search-result'] .puisg-row > div[class*='left'] a").invoke('removeAttr', 'target').click().debug()
        //         // $el.contains('Vivo Y200 5G Mobile (Jungle Green, 8GB RAM, 256GB Storage)')
        //         // .invoke('removeAttr', 'target').click()
                
        //         debugger
        //     }
        // })
    })

    it.only ('select brand', () => {
        cy.get('#nav-xshop-container a').contains('Mobiles').realClick()
        cy.contains('Brands').parent().siblings('ul').find('li').each(($el, index, $list) => {
            cy.log($el.text())

            // checking checkboxes --> check will only check if the checkbox is not already checked 
            //                         but if we use click then it will uncheck the checked one and vice versa
            if ($el.text().includes('Vivo')) {
                cy.log('Vivo')
                // cy.wrap($el).find('input').check({force:true})
                cy.wrap($el).find('input').scrollIntoView({duration:2000}).check({force:true})
                return
            }
        })
        cy.get('body').find('.a-changeover-inner').should('have.length', 0)
        cy.get("[data-component-type='s-search-result']").each(($el, index, $list) => {
            if ($el.text().includes('Vivo T3x 5G (Celestial Green, 128 GB) (6 GB RAM)')) {
                cy.wrap($el).contains('ADD TO CART', {matchCase:false}).click()
                return
            }
        })
        cy.get('.a-changeover-inner').should('have.text', 'Item Added')
        cy.get('.a-changeover-inner').should('be.visible')

        // Click multiple Add to cart button (all matched)
        // cy.get("[id^='a-autoid'][type='button']").click({multiple:true})

        // Validate cart
        // debugger --> will not work like this, as cypress is asynchronous in nature and
        // we have to apply debugger while handling the promise return by cypress command
        cy.get('#nav-cart').click().then(() => {
            debugger
        })
        cy.get('.a-size-extra-large').should('include.text', 'Shopping Cart')

        // alter quantity
        cy.get('#quantity').select('2', {force:true})
        cy.get('.a-dropdown-prompt').should('have.text', '2')

        cy.wait(2000)
        cy.get('.a-dropdown-prompt').should('have.text', '1')
        cy.get('[id^="a-popover"] > .a-popover-wrapper > .a-popover-inner')
        .should('include.text', 'This seller has a limit of 1 per customer. To see if more are available from another seller, go to the product detail page.')
//This seller has only 1 of these available. To see if more are available from another seller, go to the product detail page.
        cy.get('[name=proceedToRetailCheckout]').click()
        loginPage.getMobOrEmail().type('9685075089')
        loginPage.getContinueBtn().click()
        loginPage.getPassword().type('Amisha@1ak')
        loginPage.getSignIn().click()


        // checking radio buttons
        // cy.get('[data-action=select-address-in-list]').each(($el, index, $list) => {
        //     if ($el.text().includes('192', {matchCase: false})) {
        //         cy.wrap($el).find('input').check().should('be.checked')
        //         return
        //     }
        // })

        // Custom command - getMatchedElement
        cy.getMatchedElement('[data-action=select-address-in-list]', '192').find('input').check().should('be.checked')
        cy.get('[data-testid=Address_selectShipToThisAddress]').click()
        cy.getMatchedElement('[data-a-input-name=ppw-instrumentRowSelection]', 'Cash on Delivery/Pay on Delivery').find('input').should('be.disabled')
    })
})