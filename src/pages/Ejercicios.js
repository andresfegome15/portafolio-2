import React from "react";

const Ejercicios = () => {
  const fib = [0, 1, 2];
  let N = 0;
  const fibunacci = n => {
    for (let i = 1; i <= n - 1; i++) {
      let sum = fib[fib.length - 1] + fib[fib.length - 2];
      fib.push(sum);
    }
    alert(N);
    console.log(fib);
  };
  //   useEffect(() => {
  //     fibunacci(10);
  //   }, []);

  return (
    <div>
      {fib.map(fi => (
        <h1 key={fi}>{fi}</h1>
      ))}
      <button
        onClick={N < 2 ? () => fibunacci(1) : () => fibunacci((N = N - 1))}
      >
        -
      </button>
      <button onClick={() => fibunacci((N = N + 1))}>+</button>
    </div>
  );
};

export default Ejercicios;
