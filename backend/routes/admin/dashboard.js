export default async (req, res) => {
    try {
        res.redirect("/admin/dashboard");
    } catch (error) {
        res.send("There was an error rendering the page!");
    }
};
