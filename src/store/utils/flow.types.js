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
  to: string,
  points: Point[]
}

export type State = {
  classes: Clazz[],
  edges: Edge[]
}

export type Point = {
  x: number,
  y: number
}

export type Size = {
  width: number,
  height: number
}
