/**
 * This is an action for generating new IDs
 * @author Golos <golos@hoenir.space>
 */

import UUIDGenerator from '../../library/uuid/UUIDGenerator'

export class createIDAction {
  static do (): any {
    return UUIDGenerator()
  }
}

export default createIDAction
