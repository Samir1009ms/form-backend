const Profile = require("../models/profile.js");
const mongoose = require("mongoose");
const getProfile = async (req, res) => {
  try {
    // const userId = req.params.userId;
    // const profile = await Profile.findOne({ user: userId });
    // if (!profile) {
    //   return res.status(404).json({ message: "Profile not found" });
    // }
    const profile = await Profile.find(req.body);
    res.send(profile);
    res.status(200).send(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addProfile = async (req, res) => {
  try {
    const {name,surname,age,cins,note} = req.body;
    const newProfile = new Profile({
      name,
      surname,
      age,
      cins,
      note,
    });
    await newProfile.save();
    res.send(newProfile);
    res.stasus(200).send({ message: "Profile created", newProfile});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const {name,surname,age,cins,note} = req.body.value;
    const id = req.params.id;
    const profile = await Profile.findOne({ _id: id });
    if (!profile) {
      return res.status(404).send({ message: "Profile not found" });
    }

    const updatedProfile = await Profile.findOneAndUpdate(
        { _id: id },
        { userName, city, adress, province, email, date, phone },
        { new: true }
    );

    res.status(200).send({ message: "Profile updated", updatedProfile });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { getProfile, addProfile, updateProfile };
