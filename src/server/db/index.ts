import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";

import { CharDB, defaultDBChar } from "~/types";

import * as schema from "./schema";

export const db = drizzle(sql, { schema });

export async function getCharacterById(id: number): Promise<CharDB> {
  const queryResult = await db.query.characters.findFirst({ where: (characters, { eq }) => eq(characters.id, id)});
  if (queryResult !== undefined) {
    return queryResult;
  }
  return defaultDBChar;
}
