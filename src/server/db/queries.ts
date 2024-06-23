import { CharDB } from "~/types";
import { db } from ".";
import { characters } from "./schema";
import { eq } from "drizzle-orm";

export async function getCharacterById(id: number): Promise<CharDB> {
  return await db.query.characters.findFirst({with: {id: id}})}
