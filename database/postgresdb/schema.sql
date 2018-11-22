--CREATE DATABASE neighborhood;

CREATE TYPE status AS ENUM ('FOR SALE', 'FORECLOSURE', 'AUCTION', 'OFF MARKET', 'FOR RENT', 'SOLD');

CREATE TABLE IF NOT EXISTS homes(
     id SERIAL,
     name VARCHAR(100) CONSTRAINT unq_name UNIQUE,
     datetime TIMESTAMP WITH TIME ZONE NOT NULL,
     status status NOT NULL,
     likes INT NOT NULL,
     bathrooms SMALLINT NOT NULL,
     bedrooms SMALLINT NOT NULL,
     price INT NOT NULL,
     sqft SMALLINT NOT NULL,
     street VARCHAR(100) NOT NULL,
     city VARCHAR(100) NOT NULL,
     state VARCHAR(100) NOT NULL,
     zipCode INT NOT NULL,
     latitude FLOAT NOT NULL,
     longitude FLOAT NOT NULL,
     image VARCHAR(255) NOT NULL,
     PRIMARY KEY (id)
)
CREATE INDEX ON homes USING btree (name);
CREATE INDEX ON homes USING gist (ll_to_earth(latitude, longitude));

--COPY homes(name, datetime, status, likes, bathrooms, bedrooms, price, sqft, street, city, state, zipCode, latitude, longitude, image) FROM '/home/mona/hr/nearby-homes/file5.tsv';
--cat file4.tsv | sed 's/GMT-0700 (PDT)/PST/g' |pv -l > file5.tsv
--cat file3.tsv | tr ',' '\t' | pv -l > file4.tsv




