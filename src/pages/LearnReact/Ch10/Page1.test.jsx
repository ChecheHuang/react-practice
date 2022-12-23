import { render, screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import Page1 from './Page1'

test('renders the landing page', () => {
  render(<Page1 />)
  expect(screen.getByRole('img')).toBeInTheDocument()
})
