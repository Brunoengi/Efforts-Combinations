import Combinacoes from '../src/Combinations'
import { type ICombinations } from '../src/interfaces/ICombinations';

describe('Checks abouts combination class', () => {
  let example: ICombinations

  beforeAll(() => {
    example = new Combinacoes({
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
    for (const key of Object.keys(example as ICombinations)) {
      expect(example[key as keyof ICombinations]).not.toBeNull();
      expect(example[key as keyof ICombinations]).not.toBeUndefined();
    }
  });
  test('Check ELU max and min values', () => {
    expect(example.combinationELU.last.max).toBeCloseTo(((example.inputs.ponderationFactors.gamag1 * example.inputs.actions.g1) + (example.inputs.ponderationFactors.gamag2 * example.inputs.actions.g2) + (example.inputs.ponderationFactors.gamaq * example.inputs.actions.q)))
    expect(example.combinationELU.last.min).toBeCloseTo(1.4 * (example.inputs.actions.g1 + example.inputs.actions.g2));
  });
  test('Check ELS values - almost Permanent', () => {
    expect(example.combinationsELS.almostPermanent.max).toBeCloseTo(example.inputs.actions.g1 + example.inputs.actions.g2 + example.inputs.actions.q * example.inputs.reductionFactors.psi2)
    expect(example.combinationsELS.almostPermanent.min).toBeCloseTo(example.inputs.actions.g1 + example.inputs.actions.g2)  
  })
  test('Check ELS values - Frequent', () => {
    expect(example.combinationsELS.frequent.max).toBeCloseTo(example.inputs.actions.g1 + example.inputs.actions.g2 + example.inputs.actions.q * example.inputs.reductionFactors.psi1)
    expect(example.combinationsELS.frequent.min).toBeCloseTo(example.inputs.actions.g1 + example.inputs.actions.g2)
  })
  test('Check ELS values - Rare', () => {
    expect(example.combinationsELS.rare.max).toBeCloseTo(example.inputs.actions.g1 + example.inputs.actions.g2 + example.inputs.actions.q)
    expect(example.combinationsELS.rare.min).toBeCloseTo(example.inputs.actions.g1 + example.inputs.actions.g2)
  })
  test('psi1 must be greater than psi2', () => {
    expect(example.inputs.reductionFactors.psi1).toBeGreaterThan(example.inputs.reductionFactors.psi2)
  })
});