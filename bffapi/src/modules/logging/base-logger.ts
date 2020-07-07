import { RequestHandler } from 'express'

export default interface BaseLogger {
  debug(...args: unknown[]): void

  info(...args: unknown[]): void

  warn(...args: unknown[]): void

  error(...args: unknown[]): void

  middleware(...args: unknown[]): RequestHandler
}
