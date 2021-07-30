CREATE TABLE "history" (
	"id"	INTEGER,
	"method_type"	TEXT,
	"url"	TEXT,
	"body"	TEXT,
	"op_timestamp"	DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY("id" AUTOINCREMENT)
);