

export const func1=async()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('foo');
        }, 300);
      });
}