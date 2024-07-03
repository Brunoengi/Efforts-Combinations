/**
 * Units Inputs
 * @property crossSectionArea - Unit: m²
 * @property span - Unit: m
 * @property actions - Unit: kN/m
 * @property reductionFactors - Units: dimensionless
 * @property ponderationsFactors - Unit: dimensionless
 */

export type inputs = { 
    span: number 
    actions: actions
    reductionFactors: reductionFactors
    ponderationFactors: ponderationsFactors
}

export type actions = {
    g1: number 
    g2: number 
    q: number 
}

export type reductionFactors = {
    psi1: number
    psi2: number
}

export type ponderationsFactors = {
    gamag1: number
    gamag2: number
    gamaq: number
}

export interface ICombinations {
    inputs: inputs,
    combinationsELS: OutputCombinationsELS,
    combinationELU: OutputCombinationELU
}


export type InputsCombinationsELS = {
    actions: actions,
    reductionFactors: reductionFactors
}

export type InputsCombinationsELU = {
    actions: actions,
    ponderationFactors: ponderationsFactors
}

/**
 * Unit Outputs
 * @property OutputCombinationsELS - Units: kN/m
 */


export type OutputCombinationsELS = {
    almostPermanent: {
        max: number,
        min: number
    },
    frequent: {
        max: number,
        min: number
    },
    rare: {
        max: number,
        min: number
    }
}

/**
 * Unit Outputs
 * @property OutputCombinationELU - Units: kN/m
 */

export type OutputCombinationELU = {
    last: {
        max: number,
        min: number
    }
}
