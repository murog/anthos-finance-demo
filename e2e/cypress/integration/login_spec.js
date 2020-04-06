describe('Login Page', function() {
  it('successfully loads', function() {
    cy.visit('/login')
  })
})

describe('Default Credentials on Form Submission', function() {
  const username = 'testuser'
  const password = 'password'
  const name = 'Test User'
  const expectedBalance = '$6, 026.20'

  beforeEach(function() {
    cy.visit('login')

    cy.get('input[name=username]').clear().type(username)
    cy.get('input[name=password]').clear().type(password)
    cy.get('form').submit()
  })

  it('redirects to home', function() {
    // redirect to home page
    cy.url().should('include', '/home')
  })

  it('sees correct username', function() {
    // TODO: class "account-user-name" should be ID
    cy.get('#accountDropdown').contains(name)
  })

  // TODO: blocked until id implemented
  it.skip('sees correct balance', function() {
    // TODO: span should have id "current-balance"
    cy.get('#current-balance').contains(expectedBalance)
  })

})

describe('Bad Credentials on Form Submission', function() {
  const username = 'baduser'
  const password = 'badpassword'

  // TODO: move to supportfile
  beforeEach(function() {
    cy.visit('login')

    cy.get('input[name=username]').clear().type(username)
    cy.get('input[name=password]').clear().type(password)
    cy.get('form').submit()
  })

  it('given bad credentials, fails', function() {
    cy.get('#alertBanner').contains(`We can't find that username and password`)
  })


})

