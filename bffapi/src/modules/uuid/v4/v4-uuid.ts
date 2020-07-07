import { v4 as uuid } from 'uuid'
import BaseUUID from '../base-uuid'

export class V4UUID implements BaseUUID {
  private readonly uuidCore: typeof uuid

  private readonly PETTERN = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/

  public constructor() {
    this.uuidCore = uuid
  }

  public generate(): string {
    return this.uuidCore()
  }

  public isValid(value: string): boolean {
    return this.PETTERN.test(value)
  }
}

const v4Uuid = new V4UUID()
export default v4Uuid
