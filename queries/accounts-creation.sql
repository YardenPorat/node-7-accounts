CREATE TABLE "accounts" (
	"id"	INTEGER,
	"owner_id"	TEXT UNIQUE,
	"name"	TEXT,
	"phone_no"	TEXT,
	"balance"	REAL,
	"timestamp_created"	DATETIME DEFAULT CURRENT_TIMESTAMP,
	"last_updated"	DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY("id")
);