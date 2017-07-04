export function deepConcat(objectOne, objectTwo) {
  const concatenated = {
    ...objectOne,
  };

  Object.keys(objectTwo).forEach(key => {
    if (typeof concatenated[key] === 'object') {
      concatenated[key] = {
        ...concatenated[key],
        ...objectTwo[key],
      };
    } else {
      concatenated[key] = objectTwo[key];
    }
  });

  return concatenated;
}
