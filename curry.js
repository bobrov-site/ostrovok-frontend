function abc(a, b, c) {
    return a + b + c;
  }
  
  function abcdef(a, b, c, d, e, f) {
    return a + b + c + d + e + f;
  }
  
  const curryFunction = (fn) => {
    const inner = (...args) => {
      if (args.length === fn.length) {
        return fn(...args);
      }
      return (...params) => inner(...args, ...params);
    }
    return inner;
  }
  
  Function.prototype.curry = function(...args) {
    return curryFunction(this)(...args);
  }
  
  console.log(abc.curry('A')('B')('C')); // 'ABC'
  console.log(abc.curry('A', 'B')('C')); // 'ABC'
  console.log(abc.curry('A', 'B', 'C')); // 'ABC'
  
  console.log(abcdef.curry('A')('B')('C')('D')('E')('F')); // 'ABCDEF'
  console.log(abcdef.curry('A', 'B', 'C')('D', 'E', 'F')); // 'ABCDEF'