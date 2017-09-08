// @flow
import type { State } from './utils/flow.types'

export const INITIAL_STATE = window.__INITIAL_STATE__ || {}

const state: State = {
  classes: [{
    id: 'Pirate',
    x: 10,
    y: 10,
    compartments: [
      {
        lines: ['Pirate']
      },
      {
        lines: ['+ eyeCount: Int']
      },
      {
        lines: ['+ raid()', '+ pillage()']
      }
    ]
  }]
}

export default state
