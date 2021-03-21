/**
 * This is an interface that prescribes methods that are required to identify a data object.
 * @author Golos <golos@hoenir.space>
 */

import { isIDObject } from './isIDObject'

export interface isIdentifiable {
  getUUID(): string,
  getTypeUUID(): string
  getID(): isIDObject
}
