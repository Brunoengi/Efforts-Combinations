import { type InputsCombinationsELS, type InputsCombinationsELU, type inputs, type OutputCombinationsELS, type OutputCombinationELU, type ICombinations } from './types/Combinations'

class Combinations implements ICombinations {
  private readonly _inputs: inputs
  private readonly _combinationsELS: OutputCombinationsELS
  private readonly _combinationELU: OutputCombinationELU

  constructor ({ span, actions, reductionFactors, ponderationFactors }: inputs) {
    this._inputs = {
      span,
      actions,
      reductionFactors,
      ponderationFactors
    }
    this._combinationsELS = this.calculateCombinationsELS({ actions, reductionFactors })
    this._combinationELU = this.calculateCombinationELU({ actions, ponderationFactors })
  }

  get actions (): inputs['actions'] {
    return this._inputs.actions
  }

  get reductionFactors (): inputs['reductionFactors'] {
    return this._inputs.reductionFactors
  }

  get ponderationFactors (): inputs['ponderationFactors'] {
    return this._inputs.ponderationFactors
  }

  get inputs (): inputs {
    return this._inputs
  }

  get combinationsELS (): OutputCombinationsELS {
    return this._combinationsELS
  }

  get combinationELU (): OutputCombinationELU {
    return this._combinationELU
  }

  calculateCombinationsELS ({ actions, reductionFactors }: InputsCombinationsELS): OutputCombinationsELS {
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

  calculateCombinationELU ({ actions, ponderationFactors }: InputsCombinationsELU): OutputCombinationELU {
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
