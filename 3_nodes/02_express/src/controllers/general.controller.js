const studentData = async (req, res) => {
    console.log("Stduent Controller");
};

const error = async (req, res, next) => {
    const err = new Error("Something Went Wrong");
    next(err);
};

export { studentData, error };
