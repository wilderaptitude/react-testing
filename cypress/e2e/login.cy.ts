describe('login form', () => {
  it('should login', () => {
    cy.visit('http://localhost:6006/iframe.html?args=&id=login--default&viewMode=story')
    cy.get('input[data-testid="email"]').type('wilder@aptitude.com');
    cy.get('input[data-testid="password"]').type('password');
    cy.get('button[type="submit"]').click();

    cy.on('window:alert',(text)=>{
      expect(text).to.contains('wilder@aptitude.com, password');
    });
  });

  it.only('should test performance', () => {
    cy.visit('http://localhost:6006/iframe.html?args=&id=login--default&viewMode=story')
    cy.injectAxe();
    cy.checkA11y()
  });
});