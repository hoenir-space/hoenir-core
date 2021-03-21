/**
 * This is an interface that prescribes the requirements to allow observing the completion of a consistency check.
 * @author Golos <golos@hoenir.space>
 */

import { isConsistencyState } from './isConsistencyState'

export interface promiseToCheckConsistencyState extends Promise<isConsistencyState> {

}
