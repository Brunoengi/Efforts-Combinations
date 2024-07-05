"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Combinations {
    constructor({ span, actions, reductionFactors, ponderationFactors }) {
        this._inputs = {
            span,
            actions,
            reductionFactors,
            ponderationFactors
        };
        this._combinationsELS = this.calculateCombinationsELS({ actions, reductionFactors });
        this._combinationELU = this.calculateCombinationELU({ actions, ponderationFactors });
    }
    get actions() {
        return this._inputs.actions;
    }
    get reductionFactors() {
        return this._inputs.reductionFactors;
    }
    get ponderationFactors() {
        return this._inputs.ponderationFactors;
    }
    get inputs() {
        return this._inputs;
    }
    get combinationsELS() {
        return this._combinationsELS;
    }
    get combinationELU() {
        return this._combinationELU;
    }
    calculateCombinationsELS({ actions, reductionFactors }) {
        const { g1, g2, q } = actions;
        const { psi1, psi2 } = reductionFactors;
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
        };
    }
    calculateCombinationELU({ actions, ponderationFactors }) {
        const { g1, g2, q } = actions;
        const { gamag1, gamag2, gamaq } = ponderationFactors;
        return {
            last: {
                max: gamag1 * g1 + gamag2 * g2 + gamaq * q,
                min: gamag1 * g1 + gamag2 * g2
            }
        };
    }
}
exports.default = Combinations;
