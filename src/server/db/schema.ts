// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  text,
  integer,
  json,
} from "drizzle-orm/pg-core";
import { CharDBData, DEFAULT_CHAR_DATA } from "~/types";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */

export const createTable = pgTableCreator((name) => `dc20-beyond_${name}`);

export const characters = createTable("character", {
  id: serial("id").primaryKey(),
  char_name: varchar("char_name", { length: 256 }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt", { withTimezone: true }),
  char_class: text("char_class").default("fighter").notNull(),
  char_ancestry: text("char_ancestry").default("human").notNull(),
  char_level: integer("char_level").default(1).notNull(),
  char_data: json("char_data")
    .$type<CharDBData>()
    .default(DEFAULT_CHAR_DATA)
    .notNull(),
});

export const users = createTable("user", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt", { withTimezone: true }),
});
