import * as SQLite from 'expo-sqlite';

export const init = async () => {
  const db = await SQLite.openDatabaseAsync('databaseName');
  console.log('there is a db?', db)
}

