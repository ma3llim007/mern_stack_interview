const home = async (req, res) => {
    res.status(200).send("Home");
};

const about = async (req, res) => {
    res.status(200).send("About");
};
const contact = async (req, res) => {
    res.status(200).send("Contact-Us");
};

export { home, about, contact };
