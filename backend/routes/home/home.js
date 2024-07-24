import {join} from "path";

export default (req, res) =>
    res.sendFile(join(process.cwd(), "../frontend/build", "index.html"));
