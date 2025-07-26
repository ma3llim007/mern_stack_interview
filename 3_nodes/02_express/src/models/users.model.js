import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            maxlength: 10,
        },
        lastName: {
            type: String,
            required: true,
            maxlength: 10,
        },
        email: {
            type: String,
            require: true,
            unique: true,
            match: /.+\@.+\..+/,
        },
        age: {
            type: Number,
            required: true,
            validate: {
                validator: function (value) {
                    return value > 18;
                },
                message: (props) => `${props.value} Is Too Young`,
            },
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        },
        refreshToken: {
            type: String,
        },
    },
    { timestamps: true }
);

// Hashing the password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    try {
        this.password = await bcrypt.hash(this.password, 10);
        return next();
    } catch (error) {
        return next(error);
    }
});

// checking password is correct or not
userSchema.methods.isPasswordCorrect = async (password) => {
    return await bcrypt.compare(password, this.password);
};

// generate access token
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
};

// generate refresh token
userSchema.methods.generateRefreshToken = function () {
    const refreshToken = jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );
    this.refreshToken = refreshToken;
    return refreshToken;
};

export const User = model("User", userSchema);
