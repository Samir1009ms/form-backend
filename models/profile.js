const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
    {
        name: { type: String, trim: true },
        surname: { type: String, trim: true },
        age: { type: String, trim: true },
        cins: { type: String, trim: true },
        note: { type: String, trim: true },
    },
    { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
