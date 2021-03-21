/**
 * This is an interface that marks a property.
 * @author Golos <golos@hoenir.space>
 */

import { isIdentifiable } from '../identifier/isIdentifiable'
import { isPropertyType } from './isPropertyType'
import { isPropertyValue } from './isPropertyValue'

export interface isProperty extends isIdentifiable {
  /** Property Type */
  type: isPropertyType

  /** Property Value */
  getValue(): isPropertyValue,
  setValue(value: isPropertyValue): void
}
