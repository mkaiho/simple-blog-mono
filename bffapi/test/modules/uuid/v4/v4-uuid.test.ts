import uuid from '../../../../src/modules/uuid/v4/v4-uuid'

describe('generate', () => {
  it('generate uuid string', () => {
    const actuals = [uuid.generate(), uuid.generate()]

    const size = actuals.filter((actual, i, self) => {
      return self.indexOf(actual) === i
    }).length
    expect(size).toBe(actuals.length)

    actuals.forEach((actual) => {
      expect(actual).toMatch(
        /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/
      )
    })
  })
})

describe('isValid', () => {
  it('true is returned when argument is match pattern of uuid', () => {
    expect(uuid.isValid('bba0d9dd-167d-2ec8-d3c9-2d309bff60a1')).toBeTruthy()
  })
  it('false is returned when argument is not match pattern of uuid', () => {
    expect(uuid.isValid('bba0d9dd167d2ec8d3c92d309bff60a1')).toBeFalsy()
  })
})
