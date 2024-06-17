import { join } from "path";

export default (req, res) =>
	res.sendFile(join(__dirname, "../../" + "public", "build", "index.html"));
