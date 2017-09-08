// @flow
import type { State } from './utils/flow.types'

export const INITIAL_STATE = window.__INITIAL_STATE__ || {}

const state: State = {
  classes: [{
    id: 'Pirate',
    compartments: [
      {lines: ['Pirate']},
      {lines: ['+ eyeCount: Int']}
    ]
  },
  {
    id: 'Ship',
    compartments: [
      {lines: ['Ship']},
      {lines: ['+ masts: Int']},
      {lines: ['+ sail()', '+ anchor()', '- board()']}
    ]
  }]
}

export default state
