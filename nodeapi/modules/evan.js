

export const func1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 300);
  });
}

export function promise1() {
  let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;

    // The producing code (this may take some time)

    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });

  myPromise.then(
    function (value) { return value },
    function (error) { return error }
  );
}