const Homes = require('../database/mongodb/index.js');

const retrieve = (id, callback) => {
  Homes.find({ _id: id })
    .exec()
    .then((data) => {
      const longitude = data[0].location.coordinates[0];
      const latitude = data[0].location.coordinates[1];
      Homes.find({ location: { $near: { $geometry: { type: 'Point', coordinates: [longitude, latitude] }, $maxDistance: 1000 } } }).limit(10)
        .exec()
        .then((homes) => {
          callback(null, homes);
        });
    })
    .catch((err) => {
      callback(err, null);
    });
};

const insert = (data, callback) => {
  const home = new Homes({
    _id: data.id,
    name: data.name,
    datetime: data.datetime,
    status: data.status,
    likes: data.likes,
    bathrooms: data.bathrooms,
    bedrooms: data.bedrooms,
    price: data.price,
    sqft: data.sqft,
    street: data.street,
    city: data.city,
    state: data.state,
    zipCode: data.zipCode,
    location: {
      type: data.location.type,
      coordinates: data.location.coordinates,
    },
    image: data.image,
  });
  home.save()
    .then(res => callback(null, res))
    .catch(err => callback(err, null));
};

module.exports = {
  retrieve,
  insert,
};
