const HomeAdmin = (req, res) => {
    if (req.session.user) {
        return res.redirect("/admin/dashboard");
    }
    res.redirect("/admin/login");
};
export default HomeAdmin;