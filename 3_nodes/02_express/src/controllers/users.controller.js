import { Post } from "../models/post.model.js";
import { User } from "../models/users.model.js";

const createUser = async (req, res) => {
    const { firstName, lastName, email, age, password } = req.body;
    try {
        const user = await User.create({ firstName, lastName, email, age, password });
    } catch (error) {
        console.log(error.message);
    }

    return res.status(201).json({ message: "User Create Successfully!" });
};

// const getUsers = (req, res) => {
//     let page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 5;

//     const startIndex = (page - 1) * limit;
//     const endIndex = page * limit;

//     const paginationUser = users.slice(startIndex, endIndex);

//     if (page > users.length) {
//         return res.status(404).json({ message: "User With pagination Not found" });
//     }
//     return res.status(200).json({
//         currentPage: page,
//         totalUsers: users.length,
//         totalPages: Math.ceil(users.length / limit),
//         paginationUser,
//     });
// };

const getUsers = async (req, res) => {
    const userPost = await Post.find().populate("user");
    return res.status(200).json({ userPost });
};

const userById = (req, res) => {
    const user = users.find((u) => u.id === req.params.id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ users, message: "User Fetch Successfully" });
};

const updateUser = (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: "User not found" });
    user.name = req.body.name;
    return res.status(200).json({ user, message: "User Updated Successfully" });
};

const deleteUser = (req, res) => {
    users = users.find((u) => u.id !== req.params.id);
    return res.status(200).json({ users, message: "User Delete Successfully" });
};

export { createUser, deleteUser, getUsers, updateUser, userById };
