import React from 'react'

import Login from './login'

describe('<Login />', () => {
  it('submit form, alert', () => {    
    const handleSubmit = ({ username, password }: { username: string, password: string }) => {
      alert(`Submitted login form with username: ${username} and password: ${password}`);
    };

    cy.mount(<Login onSubmit={handleSubmit}/>)
    cy.get('form').should('be.visible');
    cy.get('input[data-testid="email"]').type('wilder@aptitude.com');
    cy.get('input[data-testid="password"]').type('password');

    cy.get('button[type="submit"]').click()

    cy.on('window:alert',(text)=>{
        expect(text).to.contains('Submitted login');
    });
  })

  it('submit form, event call', () => {    
    const stub = cy.stub().as('submit')

    cy.mount(<Login onSubmit={stub}/>)
    cy.get('form').should('be.visible');
    cy.get('input[data-testid="email"]').type('wilder@aptitude.com');
    cy.get('input[data-testid="password"]').type('password');

    cy.get('button[type="submit"]').click()
    cy.get('@submit').should('have.been.called')

  })
})