export const getNested = (p, o) => p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o),
    filterById = (arr, id) => arr.filter(x => x._id === id),
    filterByNotId = (arr, id) => arr.filter(x => x._id !== id),
    validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        );
        return valid
    };






