import csvParse from "csv-parse";
import fs from "fs";

class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    console.log(file);

    const stream = fs.createReadStream(file.path);

    const parseFile = csvParse();

    stream.pipe(parseFile);

    parseFile.on("data", async (line) => {
      console.log(line);
    });
  }
}

export { ImportCategoryUseCase };
