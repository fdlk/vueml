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
  }, {
    id: 'Ship',
    compartments: [
      {lines: ['Ship']},
      {lines: ['+ masts: Int']},
      {lines: ['+ sail()', '+ anchor()', '- board()']}
    ],
    x: 0,
    y: 0
  }, {
    id: 'sys_job_AmazonBucketJobExecution',
    compartments: [
      {lines: ['sys_job_AmazonBucketJobExecution']},
      {lines: ['bucket: String', 'key: String', 'expression:bool', 'accessKey:string',
        'secretKey:string', 'region:string', 'targetEntityId:string', 'extension:string']}
    ]
  }, {
    id: 'sys_FileMeta',
    compartments: [
      {lines: ['sys_FileMeta']}
    ]
  }, {
    id: 'sys_job_MoreJobs',
    compartments: [
      {lines: ['sys_job_MoreJobs']}
    ]
  }],
  edges: [
    {from: 'Pirate', to: 'Ship', type: 'ref', points: []},
    {from: 'sys_job_AmazonBucketJobExecution', to: 'sys_FileMeta', type: 'ref', points: []},
    {from: 'sys_job_MoreJobs', to: 'sys_FileMeta', type: 'ref', points: []}
  ]
}

export default state
