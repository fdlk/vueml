// @flow
import type { Size, State } from './utils/flow.types'
import Dagre from 'dagre/dist/dagre'

export const SET_DIMENSIONS = '__SET_DIMENSIONS__'

export default {
  [SET_DIMENSIONS] (state: State, dimensions: Size[]) {
    // once mounted, the node width and heights become clear and they can be layout
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
    g.edges().forEach(function (e) {
      const index = state.edges.findIndex(edge => edge.from === e.v && edge.to === e.w)
      state.edges[index].points = g.edge(e).points
    })
  }
}
