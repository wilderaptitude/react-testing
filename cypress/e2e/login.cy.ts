describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[data-testid="email"]').type('wilder@aptitude.com');
    cy.get('input[data-testid="password"]').type('password');
    cy.get('button[type="submit"]').click();

    cy.on('window:alert',(text)=>{
      expect(text).to.contains('Submitted login');
    });
  })
})