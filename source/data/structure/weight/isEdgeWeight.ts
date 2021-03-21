/**
 * This is an interface that marks a weight for an edge.
 * @author Golos <golos@hoenir.space>
 */

import { isWeight } from './isWeight'
import { isEdge } from '../edge/isEdge'

export interface isEdgeWeight extends isWeight{
  /** Associated Edge */
  getAssociatedEdge(): isEdge,
  setAssociatedEdge(vertex: isEdge): void

}
