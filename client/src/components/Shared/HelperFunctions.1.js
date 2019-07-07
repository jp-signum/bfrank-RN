
export const getNested = (p, o) => p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o);


export const filterById = (arr, id) => arr.filter(x => x._id === id);







