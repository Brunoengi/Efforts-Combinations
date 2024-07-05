/**
 * Units Inputs
 * @property crossSectionArea - Unit: m²
 * @property span - Unit: m
 * @property actions - Unit: kN/m
 * @property reductionFactors - Units: dimensionless
 * @property ponderationsFactors - Unit: dimensionless
 */

export interface inputs {
  span: number
  actions: actions
  reductionFactors: reductionFactors
  ponderationFactors: ponderationsFactors
}

export interface actions {
  g1: number
  g2: number
  q: number
}

export interface reductionFactors {
  psi1: number
  psi2: number
}

export interface ponderationsFactors {
  gamag1: number
  gamag2: number
  gamaq: number
}

export interface ICombinations {
  inputs: inputs
  combinationsELS: OutputCombinationsELS
  combinationELU: OutputCombinationELU
}

export interface InputsCombinationsELS {
  actions: actions
  reductionFactors: reductionFactors
}

export interface InputsCombinationsELU {
  actions: actions
  ponderationFactors: ponderationsFactors
}

/**
 * Unit Outputs
 * @property OutputCombinationsELS - Units: kN/m
 */

export interface OutputCombinationsELS {
  almostPermanent: {
    max: number
    min: number
  }
  frequent: {
    max: number
    min: number
  }
  rare: {
    max: number
    min: number
  }
}

/**
 * Unit Outputs
 * @property OutputCombinationELU - Units: kN/m
 */

export interface OutputCombinationELU {
  last: {
    max: number
    min: number
  }
}
