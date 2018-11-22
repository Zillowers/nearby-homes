const faker = require('faker');
const fs = require('fs');
const json = require('../fakeData/zipcode.json');

const wstream = fs.createWriteStream('./file2.tsv');

const createRandomNum = () => Math.floor(Math.random() * 20) + 1;
const selectRandomPhoto = () => `https://s3-us-west-1.amazonaws.com/fcc-nearby-homes/assets/images/home_${createRandomNum()}.jpg`;

const createFakeHomes = function createFakeHomes(i) {
  for (;i <= 10000000; i += 1) {
    const randomVal = faker.random.number({
      min: 0,
      max: 33143,
    });
    const date = faker.date.between('2018-05-01', '2018-10-25');
    const status = faker.random.arrayElement([
      'FOR SALE',
      'FORECLOSURE',
      'AUCTION',
      'OFF MARKET',
      'FOR RENT',
      'SOLD',
    ]);
    const numberOfLikes = faker.random.number(200);
    const bathrooms = faker.random.number({
      min: 0,
      max: 4,
    });
    const bedrooms = faker.random.number({
      min: 0,
      max: 10,
    });
    const price = faker.random.number({
      min: 100000,
      max: 4000000,
    });
    const sqft = faker.random.number({
      min: 300,
      max: 4000,
    });
    const street = faker.address.streetAddress();
    const city = faker.address.city();
    const state = faker.address.state();
    const zipCode = json[randomVal]['zipcode'];
    const latitude = json[randomVal]['latitude'];
    const longitude =  json[randomVal]['longitude'];
    const image = selectRandomPhoto();

    if (!wstream.write(date + '\t' + status + '\t' + numberOfLikes + '\t' + bathrooms + '\t' + bedrooms + '\t' + price + '\t' + sqft + '\t' + street + '\t' + city + '\t' + state + '\t' + zipCode + '\t' + latitude + '\t' + longitude + '\t' + image + '\n')) {
      wstream.once('drain', () => createFakeHomes(i + 1));
      return;
    }
  }
  wstream.end();
};

createFakeHomes(1);