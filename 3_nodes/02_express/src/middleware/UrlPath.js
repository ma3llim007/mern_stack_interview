export const urlPath = async (req, res, next) => {
    console.log(req.path);
    next();
};
