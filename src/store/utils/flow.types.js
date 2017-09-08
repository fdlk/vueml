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
  compartments: Compartment[]
}

export type State = {
  classes: Clazz[]
}
