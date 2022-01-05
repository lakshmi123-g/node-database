
const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
title: {
type: String,
required: true,
unique: true
},
description: {
type: String,
required: true
},
items: [],
zipCode: {
type: Number,
min: [10000, "Zip code too short"],
max: 99999
},
});
courseSchema.methods.getInfo = function () {
    return `Title: ${this.title} Description: ${this.description} Zip Code:
     ${this.zipCode}`;
};
courseSchema.methods.findLocalcourses = function () {
    return this.model("course")
        .find({ zipCode: this.zipCode })
        .exec();
};
subscriber: [{type: mongoose.Schema.Types.ObjectId, ref: "Subscriber"}];
module.exports = mongoose.model("Course", courseSchema);