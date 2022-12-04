export const arraysItemssum = (arrays: any) => {
  return arrays.reduce(
    (acc: number[], array: number[]) =>
      acc.map((sum: number, i: number) => sum + array[i]),
    new Array(arrays[0].length).fill(0)
  );
};

export const sumObjectsByKey = (objs: any[]) => {
  return objs.reduce((a: any, b: any) => {
    for (let k in b) {
      if (b.hasOwnProperty(k)) a[k] = (a[k] || 0) + b[k];
    }
    return a;
  }, {});
};
