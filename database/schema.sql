CREATE TABLE "customer" (
  "customerId" serial PRIMARY KEY,
  "firstName" text,
  "lastName" text,
  "phoneNumber" text
);

CREATE TABLE "destinations" (
  "destinationId" serial PRIMARY KEY,
  "customerId" integer,
  "name" text,
  "region" text,
  "category" text,
  "description" text,
  "term" text
);

ALTER TABLE "destinations" ADD FOREIGN KEY ("customerId") REFERENCES "customer" ("customerId");
