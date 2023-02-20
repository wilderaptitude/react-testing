import React from 'react'

import { Greet } from './greet'

describe('<Greet />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Greet />)
    cy.get('div').should('be.visible');
  })
})