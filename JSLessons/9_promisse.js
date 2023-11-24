// // function loadScript(src, callback) {
// //   let script = document.createElement("script");
// //   script.src = src;

// //   script.onload = () => callback(null, script);
// //    script.onerror = () =>
// //     callback( new Error(`Не удалось загрузить скрипт ${src}`));

// //   document.head.append(script);
// // }

// // loadScript("myScript", (error, script) => {
// //   if (error) {
// //     // обоаботчки ошибки
// //   } else {
// //     // обоаботка успешной загрузки
// //   }
// // });

// // //callBackHell
// // loadScript("script1", (error, scripr) => {
// //   if (error) {
// //   } else {
// //     loadScript("script2", (error, script) => {
// //       if (error) {
// //       } else {
// //         loadScript("script3", (error, script) => {
// //           if (error) {
// //           } else {
// //           }
// //         });
// //       }
// //     });
// //   }
// // });

// // loadScript('script1', step1)

// // function step1 (error, script) {
// //     if(error) {
// //     } else {
// //         loadScript('script2', step2)
// //     }
// // }

// // function step2 (error, script) {
// //     if(error) {
// //     } else {
// //         loadScript('scrip3', step3)
// //     }
// // }

// // function step3 (error, script) {
// //     if(error) {
// //     } else {
// //         //todo с данными
// //     }
// // }

// // Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд,
// //  так чтобы мы могли добавить к нему .then:

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// delay(3000).then(() => console.log("выполнилось через 3 секунды"));

// try {
//   const promice = new Promise(function (resolve, reject) {
//     console.log("Start promisce");
//     let func = () => {
//       setTimeout(() => {
//         console.log("TImeOut");
//         reject("Wops");
//         return new Error("TimeError"); //если через trow, то никак не обработать, кроме как ловить внутри setTimeOut
//       });
//     };

//     new Promise(func);
//   })
//     .catch((error) => {
//       console.log(".catch " + error);
//     })
//     .finally(console.log("Fine"));
// } catch (err) {
//   console.log("GlobalCatch:" + err);
// }

// const res = Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(5), 1000)),
//   new Promise((resolve) => setTimeout(() => resolve(6), 1000)),
//   new Promise((resolve) => setTimeout(() => resolve(7), 1000)),
// ]).then(console.log);

// let urls = [
//   "https://api.github.com/users/iliakan",
//   "https://api.github.com/users/remy",
//   "https://api.github.com/users/jeresig",
// ];

// let requests = urls.map((url) => fetch(url));

// Promise.all(requests).then((responses) =>
//   responses.forEach((elem) => console.log(elem.url))
// );

//переписать на async awayt
async function loadJson(url) {
  const res = await fetch(url)
  if (res.status == 200) {
    return response.json();
  } else {
    throw new Error(response.status);
  }
}

loadJson("no-such-user.json") // (3)
  .catch(console.log); // Error: 404

setTimeout(() => console.log("go"), 1000);
