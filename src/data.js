export const userDate = {
  name: "Player",
  lang: "rus",
  stage: 1,
  hiro: {
    1: { buy: false, lvl: 1 },
    2: { buy: false, lvl: 1 },
    3: { buy: false, lvl: 1 },
    4: { buy: false, lvl: 1 },
    5: { buy: false, lvl: 1 },
  },
  resursed: { gold: 100 },
  goldmultip: null,
  dps: 0,
  dpsMultip: 1,
  dpc: 1,
  dpcMultip: 1,
  styled: "defoult",
};
export const leftList = [
  {
    nam: {
      rus: "Монстр",
      eng: "Monster",
    },
    src: "/leftNavBar/skillet.svg",
    descr: "monsterblock",
  },
  {
    nam: {
      rus: "Герой",
      eng: "Hiro",
    },
    src: "/leftNavBar/armhead.svg",
    descr: "hiroblock",
  },
  {
    nam: {
      rus: "Лаборатория",
      eng: "Laboratory",
    },
    src: "/leftNavBar/lab.svg",
    descr: "Labblock",
  },
  {
    nam: {
      rus: "Замок",
      eng: "Castl",
    },
    src: "/leftNavBar/castl.svg",
    descr: "castlblock",
  },
  {
    nam: {
      rus: "Настройки",
      eng: "Settings",
    },
    src: "/leftNavBar/sett.svg",
    descr: "settlblock",
  },
];
export const SettingsList = {
  input: {
    rus: "Введите желаемое имя",
    eng: "Enter the desired name",
  },
  btn: {
    rus: "Подтвердить",
    eng: "Confirm",
  },
  styled: [
    {
      styl: "defoult",
      langu: {
        rus: "Варвары и драконы",
        eng: "Barbarians and Dragons",
      },
    },
  ],
  language: [
    ["rus", "Русский"],
    ["eng", "English"],
  ],
};
export const monstrList = {
  defoult: {
    1: {
      name: "Nieves",
      src: "/monster/default/monster1.png",
    },
    2: { name: "Edna", src: "/monster/default/monster2.png" },
    3: { name: "Ezorreod", src: "/monster/default/monster3.png" },
    4: { name: "Sprinkles", src: "/monster/default/monster4.png" },
  },
};
export const hiroCardList = [
  {
    id: 1,
    name: { defoult: "Drak Doomstr" },
    src: { defoult: "/hiropict/hiroavatar/hiro1avatar.png" },
    pricBuy: 1,
    baseDps: 1,
    priceUppMultiplicator: 1.05,
  },
  {
    id: 2,
    name: { defoult: "Vrog Scream" },
    src: { defoult: "/hiropict/hiroavatar/hiro2avatar.png" },
    pricBuy: 1000,
    baseDps: 26,
    priceUppMultiplicator: 1.07,
  },
  {
    id: 3,
    name: { defoult: "Bront Thund" },
    src: { defoult: "/hiropict/hiroavatar/hiro3avatar.png" },
    pricBuy: 450000,
    baseDps: 200,
    priceUppMultiplicator: 1.09,
  },
  {
    id: 4,
    name: { defoult: "Ragnar Windr" },
    src: { defoult: "/hiropict/hiroavatar/hiro4avatar.png" },
    pricBuy: 53100000,
    baseDps: 500,
    priceUppMultiplicator: 1.11,
  },
  {
    id: 5,
    name: { defoult: "Karnok Eart" },
    src: { defoult: "/hiropict/hiroavatar/hiro5avatar.png" },
    pricBuy: 641600000,
    baseDps: 1634,
    priceUppMultiplicator: 1.08,
  },
];
export const hiroCardGold = {
  buy: {
    rus: "Купить за ",
    eng: "Buy in ",
  },
  up: {
    rus: "Улучшить на ",
    eng: "Upp by ",
  },
};
export const laboratoryList = {
  up: {
    rus: ["Улучшить ", "за", "Купить"],
    eng: ["Upp", "by", "buy"],
  },
  dps: { defoult: "" },
  dpc: { default: "" },
  goldmultip: { default: "" },
};

export function sahflkhsfsaal() {
  userDate.lang = localStorage.lang;
}
export function okr(nu) {
  String(Math.floor(nu)).length > 4
    ? (nu = String(Number(nu).toExponential(1)).replace("+", ""))
    : (nu = Math.round(nu * 10) / 10);

  return nu;
}
try {
  Object.entries(JSON.parse(localStorage.userd)).forEach(
    ([key, value]) => (userDate[key] = value)
  );
} catch (err) {
  console.log(localStorage);
}
