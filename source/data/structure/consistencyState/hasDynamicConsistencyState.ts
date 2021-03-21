/**
 * This is an interface that prescribes the requirements to allow checking and calculating the consistency of a data object.
 * @author Golos <golos@hoenir.space>
 */

import { hasConsistencyState } from './hasConsistencyState'

export interface hasDynamicConsistencyState extends hasConsistencyState{
    calculateConsistencyHash(): void
    validateConsistency(): void
}
