CREATE TABLE "customer" (
  "customerId" serial PRIMARY KEY,
  "firstName" string,
  "lastName" string,
  "phoneNumber" string
);

CREATE TABLE "destinations" (
  "destinationId" serial PRIMARY KEY,
  "customerId" integer,
  "name" string,
  "region" string,
  "category" string,
  "description" string,
  "term" string
);

ALTER TABLE "destinations" ADD FOREIGN KEY ("customerId") REFERENCES "customer" ("customerId");
