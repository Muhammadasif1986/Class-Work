// Nested Function
import chalk from "chalk";
let MaindFunc = () => {
  let NestedFunc = (name: string): string => {
    return `Hello ${name}`;
  };
  console.log(NestedFunc("Asif"));
};
// MaindFunc()

// Callback Function

// let mainCb =(cb:(Process:string) => void)=>{
//       let name = "Washing"
//       console.log("Process Start");

//  setTimeout(()=>{
// console.log("in progress...");
//       cb(name);
//       },3000)
// }
// let SecondCb =(process:string):void=>{
//       console.log(`${process}...`);
//       setTimeout(()=>{
//             console.log("process Don!");
//       },2000)
// }
// mainCb(SecondCb)

let Azaan_e_Zohar = (Azan: (Moazin: string) => void) => {
  let Moazin = "M.Asif";
  console.log(chalk.red.bold("Keep client Azan Start"));
  setTimeout(() => {
    console.log(chalk.green.italic(`Azaan was Done by Mozin ${Moazin}`));
    console.log(chalk.green.italic("Namaz ki tayyari karain."));
    Azan(Moazin);
  }, 3000);
};

let Namaz_e_Zohar = (Namaz: (Imam: string) => void) => {
  let Imam = "Zia U Rehman";
  console.log(chalk.blue("Iqamat ho rahi hai"));
  console.log(chalk.blue("Namaz shuru ho gyi hai"));
  setTimeout(() => {
    console.log(chalk.yellow(`Namaz was Done by Imam ${Imam}`));
    Namaz(Imam);
  }, 4000);
};

let Dua = (Dua: (Imam: string) => void) => {
  let Imam = "Zia U Rehman";
  console.log(chalk.yellow(`Dua`));
  setTimeout(() => {
    console.log(chalk.blueBright(`Dua Done by ${Imam}`));
    Dua(Imam);
  }, 1000);
};

let SunatRakat = () => {
  console.log(chalk.blueBright("Sunat Rakat ho rahi hai"));
  setTimeout(() => {
    console.log(
      chalk.bgGreen.bold(" AlHamd U Illah zohar ki namaz ada ho gaye hai")
    );
  }, 2000);
};

// Azaan_e_Zohar((Moazin) => {
//   Namaz_e_Zohar((Imam) => {
//     Dua((Imam) => {
//       SunatRakat();
//     });
//   });
// });


let time = new Date();
console.log(time);
let hours = time.getHours();
let minutes = time.getMinutes();
let currentTime = `${hours} ${minutes}`;
console.log(currentTime);

let Azaan_E_Magrib = (): Promise<string> => {
  console.log("waiting for Azaan!!!");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (currentTime >= "19 25" && currentTime <= "20 6") {
        resolve(chalk.green("Azaan Time"));
      } else {
        reject(chalk.red("azan nahi ho rahi hai"));
      }
    }, 2000);
  });
};

let Namaz_e_Magrib = (): Promise<string> => {
  console.log("waiting for Namaz!!!");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (currentTime >= "19 12" && currentTime <= "20 6") {
        resolve(chalk.green("Namaz Bajamat Time"));
      } else if (currentTime >= "19 12" && currentTime <= "20 40") {
        console.log("infiradi Namaz ada karain!!");
      } else {
        reject(chalk.red("Namaz Qaza Ho gayee hai."));
      }
    }, 4000);
  });
};

let Dua_e_Marib = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    resolve("Dua baad Namaz e Magrib");
  });
};
// Azaan_E_Magrib()
// .then((message:string)=>{
// console.log(message);
// return Namaz_e_Magrib();
// }).then((message:string)=>{
// console.log(message);
// return Dua_e_Marib();
// }).then((message:string)=>{
// console.log(message);
// }).catch((error:string)=>{
// console.log(error);
// })

let NamazTime = async () => {
  try {
    let AzaanMagrib = await Azaan_E_Magrib();
    console.log(AzaanMagrib);
    let NamazMagrib = await Namaz_e_Magrib();
    console.log(NamazMagrib);
    let DuaMagrib = await Dua_e_Marib();
    console.log(DuaMagrib);
  } catch (Error) {
    console.log(Error);
  } finally {
    console.log("Namaz adda ho gayee");
  }
};
NamazTime();
