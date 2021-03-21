/**
 * This is an interface that prescribes the data structure of a consistency state.
 * @author Golos <golos@hoenir.space>
 */

export interface isConsistencyState {
  isConsistent: boolean,
  consistencyHash: string
}
