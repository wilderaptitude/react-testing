import React from 'react'

import { Application } from './application'

describe('<Application />', () => {
  it('renders', () => {
    cy.mount(<Application />)
    cy.get('h1').should('be.visible');
    cy.get('h1').should('have.text', 'Form Title')
    cy.get('input#name').should('be.visible');
    cy.get('select#job-location').should('be.visible');
    cy.get('input#terms').should('be.visible');
    cy.get('button').should('be.visible');
  })

  it('should have right location options', () => {
    cy.mount(<Application />)
    cy.get('#job-location option[value="GB"]').should('exist')
    cy.get('#job-location option[value="ES"]').should('exist')
    cy.get('#job-location option[value="BO"]').should('exist')
  })
})