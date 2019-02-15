# Nearby Homes

> A nearby homes carousel on a real estate app which given a property finds all nearby houses within 1 km radius. 

## Related Projects

  - https://github.com/team-frontend/image-carousel
  - https://github.com/team-frontend/detailed-part
  - https://github.com/team-frontend/mortgage-calculator

## Table of Contents
1. [Development](#development)
2. [API Endpoints](#api-endpoints)


## Development
### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
Create the database `neighborhood` by executing this file from the command line by typing:

```sh
mysql -u root < database/schema.sql 
```

Start the server with:
```sh
npm start
```

Start your application with:
```sh
npm run dev
```

## API Endpoints

##### Public Endpoints
| Description                                                        | Endpoint                           |
| ------------------------------------------------------------------ | ---------------------------------- |
| [Get Info of Nearby Homes]                                         | GET /homes/:id/nearbyHomes         |
| [POST Info of Nearby Home]                                         | POST /homes                        |

## GET /homes/:id/nearbyHomes

Input : <br/> 4

Output: <br/>[
          {
            "id": 2,
            "dateOfPosting": "2018-09-19 16:13:56",
            "status": "FOR SALE",
            "numberOfLikes": 136,
            "numberOfBathroom": 2,
            "numberOfBedroom": 0,
            "homeValue": 3145790,
            "sqft": 3825,
            "streetName": "35228 Sanford Mission",
            "cityName": "Rockville",
            "stateName": "MD",
            "zipCode": "20851",
            "homeImage": "https://s3-us-west-1.amazonaws.com/fcc-nearby-homes/assets/images/home_1.jpg"
          },
          {
            "id": 4,
            "dateOfPosting": "2018-10-18 01:55:34",
            "status": "FORECLOSURE",
            "numberOfLikes": 189,
            "numberOfBathroom": 3,
            "numberOfBedroom": 5,
            "homeValue": 3484208,
            "sqft": 1859,
            "streetName": "980 Aubrey Shore",
            "cityName": "Rockville",
            "stateName": "MD",
            "zipCode": "20851",
            "homeImage": "https://s3-us-west-1.amazonaws.com/fcc-nearby-homes/assets/images/home_3.jpg"
          }
         ]

## POST /homes

Input :  <br/>
        {
            "id": 2,
            "dateOfPosting": "2018-09-19 16:13:56",
            "status": "FOR SALE",
            "numberOfLikes": 136,
            "numberOfBathroom": 2,
            "numberOfBedroom": 0,
            "homeValue": 3145790,
            "sqft": 3825,
            "streetName": "35228 Sanford Mission",
            "cityName": "Rockville",
            "stateName": "MD",
            "zipCode": "20851",
            "homeImage": "https://s3-us-west-1.amazonaws.com/fcc-nearby-homes/assets/images/home_1.jpg"
        } <br/>
Output: <br/>
        {
            "id": 2,
            "dateOfPosting": "2018-09-19 16:13:56",
            "status": "FOR SALE",
            "numberOfLikes": 136,
            "numberOfBathroom": 2,
            "numberOfBedroom": 0,
            "homeValue": 3145790,
            "sqft": 3825,
            "streetName": "35228 Sanford Mission",
            "cityName": "Rockville",
            "stateName": "MD",
            "zipCode": "20851",
            "homeImage": "https://s3-us-west-1.amazonaws.com/fcc-nearby-homes/assets/images/home_1.jpg"
        }




