// @flow
import type { Size, State } from './utils/flow.types'
import Dagre from 'dagre/dist/dagre'

export const SET_DIMENSIONS = '__SET_DIMENSIONS__'

export default {
  [SET_DIMENSIONS] (state: State, dimensions: Size[]) {
    const g = new Dagre.graphlib.Graph()
    g.setGraph({})
    g.setDefaultEdgeLabel(function () { return {} })
    for (let i = 0; i < state.classes.length; i++) {
      const clazz = state.classes[i]
      clazz.width = dimensions[i].width
      clazz.height = dimensions[i].height
      g.setNode(clazz.id, clazz)
    }
    state.edges.forEach(edge => g.setEdge(edge.from, edge.to))
    Dagre.layout(g)
    g.nodes().forEach(function (v) {
      console.log('Node ' + v + ': ' + JSON.stringify(g.node(v)))
    })
    g.edges().forEach(function (e) {
      console.log('Edge ' + e.v + ' -> ' + e.w + ': ' + JSON.stringify(g.edge(e)))
    })
  }
}
