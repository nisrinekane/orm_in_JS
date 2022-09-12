function convertObjToOrm(table, obj) {
  let keys = [];
  let values = [];
  for (let key in obj) {
    keys.push(key);
    values.push(obj[key]);
  }
  return `INSERT INTO ${table} (${[...keys]}) VALUES (${[...values]});`
}

