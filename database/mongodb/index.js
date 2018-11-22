const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:student@localhost:27017/neighborhood?authSource=admin');

const homeSchema = mongoose.Schema({
  id: Number,
  name: String,
  datetime: Date,
  status: String,
  likes: Number,
  bathrooms: Number,
  bedrooms: Number,
  price: Number,
  sqft: Number,
  street: String,
  city: String,
  state: String,
  zipCode: Number,
  location: { type: { type: String }, coordinates: [Number] },
  image: String,
});

homeSchema.index({ id: 1, name: 1 });
homeSchema.index({ location: '2dsphere' });
const Homes = mongoose.model('Homes', homeSchema);

module.exports = Homes;

//cat file6.tsv | awk -F$'\t' '{print "{\"_id\": "$1", \"name\": \""$2"\", \"datetime\": \""$3"\", \"status\": \""$4"\", \"likes\": "$5", \"bathrooms\": "$6", \"bedrooms\": "$7", \"price\": "$8", \"sqft\": "$9", \"street\": \""$10"\", \"city\": \""$11"\", \"state\": \""$12"\", \"zipCode\": "$13", \"location\": {\"type\": \"Point\", \"coordinates\": ["$14", "$15"]}, \"image\": \""$16"\"}"}' > newFile.json
//mongoimport -u admin -p student --authenticationDatabase admin --db neighborhood --collection homes --file newFile.json
