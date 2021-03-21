/**
 * This is an interface that marks a graph.
 * @author Golos <golos@hoenir.space>
 */

import { isIdentifiable } from '../identifier/isIdentifiable'
import { isCollection } from '../collection/isCollection'

export interface isGraph extends isIdentifiable, isCollection {

}
