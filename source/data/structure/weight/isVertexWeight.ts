/**
 * This is an interface that marks a weight for a vertex.
 * @author Golos <golos@hoenir.space>
 */

import { isWeight } from './isWeight'
import { isVertex } from '../vertex/isVertex'

export interface isVertexWeight extends isWeight{
  /** Associated Vertex */
  getAssociatedVertex(): isVertex,
  setAssociatedVertex(vertex: isVertex): void

}
