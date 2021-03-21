/**
 * This is an interface that marks a weight.
 * @author Golos <golos@hoenir.space>
 */

import { isIdentifiable } from '../identifier/isIdentifiable'

export interface isWeight extends isIdentifiable {
  /** Weight Value */
  getWeight(): number,
  setWeight(weight: number): void,
  resetDefaultWeight(): void
}
