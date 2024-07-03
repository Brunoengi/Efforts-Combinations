import { type InputsCombinationsELS, type InputsCombinationsELU, inputs, OutputCombinationsELS, OutputCombinationELU, ICombinations } from "./types/Combinations"

class Combinations implements ICombinations{
  private _inputs: inputs
  private _combinationsELS: OutputCombinationsELS
  private _combinationELU: OutputCombinationELU

  constructor({ span, actions, reductionFactors, ponderationFactors }: inputs) {
    this._inputs = {
      span,
      actions,
      reductionFactors,
      ponderationFactors
    }
    this._combinationsELS = this.calculateCombinationsELS({ actions, reductionFactors })
    this._combinationELU = this.calculateCombinationELU({ actions, ponderationFactors })
  }

  get actions() {
    return this._inputs.actions
  }

  get reductionFactors() {
    return this._inputs.reductionFactors
  }

  get ponderationFactors() {
    return this._inputs.ponderationFactors
  }

  get inputs() {
    return this._inputs
  }

  get combinationsELS() {
    return this._combinationsELS
  }

  get combinationELU() {
    return this._combinationELU
  }

  set g1(g1: number) {
    this._inputs.actions.g1 = g1
  }

  calculateCombinationsELS({ actions, reductionFactors }: InputsCombinationsELS): OutputCombinationsELS {
    const { g1, g2, q } = actions
    const { psi1, psi2 } = reductionFactors

    return {
      almostPermanent: {
        max: g1 + g2 + psi2 * q,
        min: g1 + g2
      },
      frequent: {
        max: g1 + g2 + psi1 * q,
        min: g1 + g2
      },
      rare: {
        max: g1 + g2 + q,
        min: g1 + g2
      }
    }
  }

  calculateCombinationELU({ actions, ponderationFactors }: InputsCombinationsELU): OutputCombinationELU {
    const { g1, g2, q } = actions
    const { gamag1, gamag2, gamaq } = ponderationFactors

    return {
      last: {
        max: gamag1 * g1 + gamag2 * g2 + gamaq * q,
        min: gamag1 * g1 + gamag2 * g2
      }
    }
  }
}

export default Combinations
