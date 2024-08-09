import { sequelize } from "./database.js";

export async function startDb() {
  try {
    await sequelize.sync({force: false});
    // await dataPreload();
  } catch (err) {
    console.error(err);
  }
}