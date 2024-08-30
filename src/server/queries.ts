import "server-only";
import { db } from "./db";
// import { auth } from "@clerk/nextjs/server";

export async function getCharacters() {
  // TODO: uncomment these when you're ready to tie characters to users
  //
  // const user = auth()
  //
  // if (!user.userId) throw new Error("Unauthorized")

  return db.query.characters.findMany({
    // where: (model, { eq }) => eq(model.userId, user.userId)
    orderBy: (model, { desc }) => desc(model.createdAt),
  });
}
