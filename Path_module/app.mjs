import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)

// directory name
console.log(path.dirname(__filename))

// base name
console.log(path.basename(__filename))

// extension name
console.log(path.extname(__filename))

// parse
console.log(path.parse(__filename))

// join
const new_path = path.join(path.dirname(__filename), "new_file.js")
console.log(new_path)

// absolute path
const absolute_path = path.resolve("new_file.js")
console.log("is absolute path:", path.isAbsolute(absolute_path))
console.log("absolute path:", absolute_path)
