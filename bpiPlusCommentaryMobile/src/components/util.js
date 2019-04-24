const dataCleanup = (data) => {
  let result = {
    values: [],
    disclaimer: data.disclaimer,
    timeStamp: data.time
  };

  for (let k in data.bpi) {

    let obj = { date: null, price: null }

    if (k[5] === '0') {
      obj.date = k.slice(6).replace(/-/gi, '/');
    } else {
      obj.date = k.slice(5).replace(/-/gi, '/');
    }

    obj.price = data.bpi[k];
    result.values.push(obj);
  }

  return result;
}

const commentaryCleanup = (string) => {
  let cleaned = string.split(';');
  for (let i = 0; i < cleaned.length; i++) {
    cleaned[i] = cleaned[i].trim();
  }
  return cleaned;
}

export { dataCleanup, commentaryCleanup };