/**
 * This is a wrapper for standard keys used by hoenir.
 * @author Golos <golos@hoenir.space>
 */

import { generateKeyPairSync } from 'crypto'

export class KeyPairGenerator {
  static do (passphrase:string) {
    return generateKeyPairSync('rsa', {
      modulusLength: 4096,
      publicKeyEncoding: {
        type: 'pkcs1',
        format: 'pem'
      },
      privateKeyEncoding: {
        type: 'pkcs1',
        format: 'pem',
        cipher: 'aes-256-gcm',
        passphrase: passphrase
      }
    })
  }
}

export default KeyPairGenerator
