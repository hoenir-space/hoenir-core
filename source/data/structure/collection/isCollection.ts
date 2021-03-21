/**
 * This is an interface that marks a collection of identifiable objects.
 * @author Golos <golos@hoenir.space>
 */

import { isIdentifiable } from '../identifier/isIdentifiable'

export interface isCollection {
    getAll(): null|[isIdentifiable]
    getByID(id: string): null|isIdentifiable
    getByType(type: string): null|[isIdentifiable]
    hasID(id:string):boolean
    hasType(type:string):boolean
    hasAnyContent():boolean
}
