// @flow
import type { State } from './utils/flow.types'

export const INITIAL_STATE = window.__INITIAL_STATE__ || {}

const state: State = {
  classes: [{
    id: 'Pirate',
    compartments: [
      {lines: ['Pirate']},
      {lines: ['+ eyeCount: Int']}
    ],
    x: 0,
    y: 0
  },
  {
    id: 'Ship',
    compartments: [
      {lines: ['Ship']},
      {lines: ['+ masts: Int']},
      {lines: ['+ sail()', '+ anchor()', '- board()']}
    ],
    x: 0,
    y: 0
  }],
  edges: [
    {from: 'Pirate', to: 'Ship', type: 'ref'}
  ]
}

export default state
