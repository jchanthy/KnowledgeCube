import {dirname, join} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default (req, res) =>
    // res.sendFile(join(__dirname, "../../", "client", "index.html"));
    res.sendFile(join(__dirname, "../../", "public", "index.html"));
