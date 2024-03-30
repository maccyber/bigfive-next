import { getItems, getInfo } from '../src/index'

describe('questions module tests', () => {
  it('it should get info about the test', async () => {
    const data = getInfo()
    expect(data).toBeDefined()
    console.log(data)
  })
})
