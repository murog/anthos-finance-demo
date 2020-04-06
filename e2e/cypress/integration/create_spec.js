describe('User can navigate to create account screen', function() {
    it('from login', function() {
        cy.visit('/login')
        cy.get('.btn-create-account').click()
        cy.url().should('contain', 'signup')

    })

    it('from url', function() {
      cy.visit('/signup')
      cy.get('.header-title').contains('Register a new account')
    })
})

describe('User can create account', function() {
    const uuid = () => Cypress._.random(0, 1e6)
    const password = 'bells'
    const firstName = 'Tom Nook'
    const expectedBalance = '$0.00'
    let lastName
    let id
    let username
    beforeEach(function() {
        id = uuid()
        username = `user-${id}`
        lastName = id

        cy.visit('/signup')
        cy.get('input[name=username]').type(username)
        cy.get('input[name=password]').type(password)
        cy.get('input[name=password-repeat]').type(password)
        cy.get('input[name=firstname]').type(firstName)
        cy.get('input[name=lastname]').type(lastName)
        cy.get('input[name=birthday]').type('1981-01-01')
        cy.get('form').submit()
    })

    it('redirected to home', function() {
        // redirect to home page
        cy.url().should('include', '/home')
    })

    it.skip('contain zero balance', function() {
        // TODO: needs id on balance
        cy.get('#current-balance').contains(expectedBalance)
    })
    
    it('sees correct username', function() {
        cy.get('#accountDropdown').contains(`${firstName} ${lastName}`)
    })
})