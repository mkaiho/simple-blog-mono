export default interface BaseUUID {
  generate(): string

  isValid(value: string): boolean
}
