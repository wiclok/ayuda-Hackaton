import { sequelize } from "./database";

export async function startDb() {
  try {
    await sequelize.sync({force: false});
    // await dataPreload();
  } catch (err) {
    console.error(err);
  }
}