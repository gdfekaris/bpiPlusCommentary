const dataCleanup = (data) => {
  let result = {
    dates: [],
    prices: [],
    disclaimer: data.disclaimer,
    timeStamp: data.time
  };

  for (let k in data.bpi) {

    if (k[5] === '0') {
      result.dates.push(k.slice(6).replace(/-/gi, '/'));
    } else {
      result.dates.push(k.slice(5).replace(/-/gi, '/'));
    }

    result.prices.push(data.bpi[k]);
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

module.exports = { dataCleanup, commentaryCleanup };