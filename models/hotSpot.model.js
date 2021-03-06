const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotSpotSchema = new Schema({
  name: { type: String, required: true },
  boroughName: { type: String, required: true },
  zipCode: { type: Number, required: true },
  type: { type: String, required: true },
  locationType: { type: String, required: true },
  location: { type: String, required: true },
  provider: { type: String, required: true },
  ssid: { type: String, required: true },
  latitude: { type: Number },
  longitudes: { type: Number },
});

const hotSpots = mongoose.model("hotSpot", hotSpotSchema);

module.exports = hotSpots;
