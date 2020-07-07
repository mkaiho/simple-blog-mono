import { Sl4jsLogger } from '../../../../src/modules/logging/sl4js/sl4js-logger'

describe('debug', () => {
  it('called and finish normally', () => {
    const sut = new Sl4jsLogger('stdout', 'debug')
    sut.debug('finished normally')
  })
})

describe('info', () => {
  it('called and finish normally', () => {
    const sut = new Sl4jsLogger('stdout', 'info')
    sut.info('finished normally')
  })
})

describe('warn', () => {
  it('called and finish normally', () => {
    const sut = new Sl4jsLogger('stdout', 'warn')
    sut.warn('finished normally')
  })
})

describe('error', () => {
  it('called and finish normally', () => {
    const sut = new Sl4jsLogger('stdout', 'error')
    sut.error('finished normally')
  })
})

describe('middleware', () => {
  it('called and finish normally', () => {
    const sut = new Sl4jsLogger('stdout', 'error')
    const actual = sut.middleware()

    expect(actual).toBeDefined()
    expect(actual).not.toBeNull()
  })
})
