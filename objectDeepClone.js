const cloneDeep = (data) => Object.entries(data).reduce((acc, [key, value]) => {
    if (typeof value === 'object') {
        return { ...acc, [key]: cloneDeep(value) };
    }
    return { ...acc, [key]: value };
}, {});

const data = {
    key1: 'value1',

    key2: {
        key1: 'innerValue',
        innerKey: {
            anotherKey: 'anotherValue',
        },
    },
};

const result = cloneDeep(data);
console.log(result);

console.log(result !== data, true);
console.log(result.key2 !== data.key2, true);
console.log(result.key2.innerKey !== data.key2.innerKey, true);