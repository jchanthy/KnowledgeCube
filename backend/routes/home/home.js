import { join } from "path";

export default (req, res) =>
	res.sendFile(join(__dirname, "../../" + "public", "index.html"));
