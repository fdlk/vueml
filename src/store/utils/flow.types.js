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
  x: number,
  y: number,
  compartments: Compartment[]
}

export type State = {
  classes: Clazz[]
}
