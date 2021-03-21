/**
 * This is an interface that prescribes the requirements to allow checking the consistency of a data object.
 * @author Golos <golos@hoenir.space>
 */

import { promiseToCheckConsistencyState } from './promiseToCheckConsistencyState'
import { isConsistencyState } from './isConsistencyState'

export interface hasConsistencyState {
  triggerConsistencyCheck(): promiseToCheckConsistencyState,
  isConsistent(): boolean,
  getConsistencyState(): isConsistencyState
}
