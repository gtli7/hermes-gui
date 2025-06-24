describe('Hermes App E2E', () => {
  it('should load the application successfully', () => {
    cy.visit('/')
    cy.title().should('contain', 'Hermes')
  })

  it('should display the main navigation', () => {
    cy.visit('/')
    cy.get('app-root').should('exist')
  })
})
