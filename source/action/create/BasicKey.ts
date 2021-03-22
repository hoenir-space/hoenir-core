/**
 * This is an action for generating new key pair
 * @author Golos <golos@hoenir.space>
 */

import KeyPairGenerator from '../../library/crypto/KeyPairGenerator'
import DataWriter from '../../library/workspace/DataWriter'
import UUIDGenerator from '../../library/uuid/UUIDGenerator'

export class createBasicKeyAction {
  static do (passphrase:string): any {
    const id = UUIDGenerator()
    const keys = KeyPairGenerator.do(passphrase)
    DataWriter.putStringDataIntoWSFile(id + '.key', keys.privateKey)
    DataWriter.putStringDataIntoWSFile(id + '.crt', keys.publicKey)
  }
}

export default createBasicKeyAction
