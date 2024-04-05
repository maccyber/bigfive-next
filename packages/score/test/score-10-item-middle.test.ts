import { processAnswers } from '../src/index'

const answers = ['E', 'A', 'C', 'N', 'O']
  .flatMap(letter => Array(10).fill({ domain: letter, score: 3 }))
  .reduce((a, b) => a.concat(b), [])

const score = processAnswers(answers)


describe('validate facet', () => {
  it('should return true', () => {
    expect(score.E.score).toEqual(30);
    expect(score.A.score).toEqual(30);
    expect(score.C.score).toEqual(30);
    expect(score.N.score).toEqual(30);
    expect(score.O.score).toEqual(30);
  })
})
