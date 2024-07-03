import Combinacoes from '../src/Combinations'

describe('Checks abouts combination class', () => {
  test('Cannot null props or undefined props', () => {
    const example1 = new Combinacoes(
      {
        actions: {
          g1: 3,
          g2: 5,
          q: 5
        },
        span: 20,
        ponderationFactors: {
          gamag1: 1.4,
          gamag2: 1.4,
          gamaq: 1.4 
        },
        reductionFactors: {
          psi1: 0.7,
          psi2: 0.6
        }
      }
    )
  })
})