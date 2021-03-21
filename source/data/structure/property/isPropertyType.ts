/**
 * This is an interface that marks a property type.
 * @author Golos <golos@hoenir.space>
 */

import { validPropertyType } from './validPropertyType'

export interface isPropertyType {
  /** Property Type */
  getType(): validPropertyType
  setType(type: validPropertyType): void
}
