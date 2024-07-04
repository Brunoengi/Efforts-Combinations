import Combinacoes from '../src/Combinations'
import { type ICombinations } from '../src/types/Combinations';

describe('Checks abouts combination class', () => {
  let example1: ICombinations

  beforeAll(() => {
    example1 = new Combinacoes({
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
    });
  });

  test('Check that there are no undefined or null properties', () => {
    for (const key of Object.keys(example1 as ICombinations)) {
      expect(example1[key as keyof ICombinations]).not.toBeNull();
      expect(example1[key as keyof ICombinations]).not.toBeUndefined();
    }
  });
  test('Check ELU max and min values', () => {
    expect(example1.combinationELU.last.max).toBeCloseTo(1.4 * (example1.inputs.actions.g1 + example1.inputs.actions.g2 + example1.inputs.actions.q));
    expect(example1.combinationELU.last.min).toBeCloseTo(1.4 * (example1.inputs.actions.g1 + example1.inputs.actions.g2));
  });
  test('psi1 must be greater than psi1', () => {
    expect(example1.inputs.reductionFactors.psi1).toBeGreaterThan(example1.inputs.reductionFactors.psi2)
  })
});