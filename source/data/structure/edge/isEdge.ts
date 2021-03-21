/**
 * This is an interface that marks an edge.
 * @author Golos <golos@hoenir.space>
 */

import { isIdentifiable } from '../identifier/isIdentifiable'
import { isVertex } from '../vertex/isVertex'

export interface isEdge extends isIdentifiable{
  /** Source Vertex */
  getSourceVertex(): isVertex,
  setSourceVertex(vertex: isVertex): void

  /** Target Vertex */
  getTargetVertex(): isVertex,
  setTargetVertex(vertex: isVertex): void
}
