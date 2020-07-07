import log4js, { Configuration } from 'log4js'
import { RequestHandler } from 'express'
import BaseLogger from '../base-logger'

// TODO: load from environment
const loggerLevel = 'info'
const categoryName = 'default'
const configuration: Configuration = {
  appenders: {
    stdout: { type: 'stdout' },
    file: { type: 'file', filename: 'logs/app.log' },
  },
  categories: {
    default: { appenders: ['stdout', 'file'], level: 'info' },
    debug: { appenders: ['stdout', 'file'], level: 'debug' },
    info: { appenders: ['stdout', 'file'], level: 'info' },
    warn: { appenders: ['stdout', 'file'], level: 'warn' },
    error: { appenders: ['stdout', 'file'], level: 'error' },
  },
}

log4js.configure(configuration)

export class Sl4jsLogger implements BaseLogger {
  private level: string

  private category: string

  private logger: log4js.Logger

  public constructor(level: string, category: string) {
    this.level = level
    this.category = category
    this.logger = log4js.getLogger(category)
    this.logger.level = level
  }

  public debug(...args: unknown[]): void {
    this.logger.debug(args)
  }

  public info(...args: unknown[]): void {
    this.logger.info(args)
  }

  public warn(...args: unknown[]): void {
    this.logger.warn(args)
  }

  public error(...args: unknown[]): void {
    this.logger.error(args)
  }

  public middleware(): RequestHandler {
    return log4js.connectLogger(this.logger, { level: this.level })
  }
}

const logger = new Sl4jsLogger(loggerLevel, categoryName)
export default logger
