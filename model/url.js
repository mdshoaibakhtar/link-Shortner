var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const shortid = require("shortid");

let urlSchema = new Schema({
  longUrl: String,
  shortUrl: {
    type: String,
    default: shortid.generate,
  },
  clicks: {
    type: Number,
    default: 0,
  },
  date: { type: String, default: Date.now },
});

const Url = mongoose.model("Url", urlSchema);
module.exports = Url;
