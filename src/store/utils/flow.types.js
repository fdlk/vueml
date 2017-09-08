// @flow

export type Package = {
  title: string,
  classes: Clazz[]
}

export type Compartment = {
  lines: string[]
}

export type Clazz = {
  id: string,
  compartments: Compartment[],
  width?: number,
  height?: number
}

export type Edge = {
  from: string,
  to: string
}

export type State = {
  classes: Clazz[],
  edges: Edge[]
}

export type Size = {
  width: number,
  height: number
}
