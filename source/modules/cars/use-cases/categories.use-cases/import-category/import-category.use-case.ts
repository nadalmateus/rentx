import fs from 'fs'
import csvParser from 'csv-parser'

class ImportCategoryUseCase {
  async execute (file: any): Promise<void> {
    const stream = fs.createReadStream(file.path)

    const parseFile = csvParser()

    stream.pipe(parseFile)

    parseFile.on('data', async (line) => {
      console.log(line)
    })
  }
}

export { ImportCategoryUseCase }
