/**
 * This is a quick wrapper to put data into a file inside the working directory.
 * @author Golos <golos@hoenir.space>
 */

import * as fs from 'fs'

export class DataWriter {
  static putStringDataIntoWSFile (filename: string, data:string) {
    if (typeof filename === 'undefined' || filename === '') {
      throw new Error('Filename was not provided.')
    }
    const filepath = process.cwd()
    fs.writeFileSync(filepath + '/' + filename, data)
  }
}

export default DataWriter
