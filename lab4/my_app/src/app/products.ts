export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'ASUS ROG Phone 7 Ultimate 16 ГБ/512 ГБ белый',
    price: 1399990,
    description: 'технология NFC: Да\n' +
        'цвет: белый\n' +
        'тип экрана: AMOLED, сенсорный, Corning Gorilla Glass 5\n' +
        'диагональ: 6.78 дюйм\n' +
        'размер оперативной памяти: 16 ГБ\n' +
        'процессор: 8-ядерный Qualcomm Snapdragon 8 Gen 2\n' +
        'объем встроенной памяти: 512.0 ГБ\n' +
        'емкость аккумулятора: 6000.0 мАч',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h95/82488958910494.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/asus-rog-phone-7-ultimate-16-gb-512-gb-belyi-112311809/?c=750000000',
    rating: 5.0
  },
  {
    id: 2,
    name: 'Samsung Galaxy Z Fold5 5G 12 ГБ/1024 ГБ голубой + подарок',
    price: 1200000,
    description: 'технология NFC: Да\n' +
        'цвет: голубой\n' +
        'тип экрана: Dynamic AMOLED 2X\n' +
        'диагональ: 7.6 дюйм\n' +
        'размер оперативной памяти: 12 ГБ\n' +
        'процессор: 8-ядерный Snapdragon 8 Gen 3\n' +
        'объем встроенной памяти: 1024.0 ГБ\n' +
        'емкость аккумулятора: 4400.0 мАч',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9e/hb0/84932074799134.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/samsung-galaxy-z-fold5-5g-12-gb-1024-gb-goluboi-podarok-115938082/?c=750000000',
    rating: 5.0
  },
  {
    id: 3,
    name: 'Samsung Galaxy Fold 12 ГБ/512 ГБ серебристый',
    price: 1050000,
    description: 'технология NFC: Да\n' +
        'цвет: серебристый\n' +
        'тип экрана: цветной AMOLED, 16.78 млн цветов, сенсорный\n' +
        'диагональ: 4.6 дюйм\n' +
        'размер оперативной памяти: 12 ГБ\n' +
        'процессор: Qualcomm Snapdragon 855\n' +
        'объем встроенной памяти: 512.0 ГБ\n' +
        'емкость аккумулятора: 4380.0 мАч',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd6/h30/63823902212126.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/samsung-galaxy-fold-12-gb-512-gb-serebristyi-100015658/?c=750000000',
    rating: 5.0
  },
  {
    id: 4,
    name: 'Xiaomi 13 Ultra 5G 16 ГБ/1024 ГБ черный',
    price: 1000000,
    description: 'технология NFC: Да\n' +
        'цвет: черный\n' +
        'тип экрана: AMOLED, сенсорный, Gorilla Glass Victus\n' +
        'диагональ: 6.73 дюйм\n' +
        'размер оперативной памяти: 16 ГБ\n' +
        'процессор: 8-ядерный Qualcomm Snapdragon 8 Gen 2\n' +
        'объем встроенной памяти: 1024.0 ГБ\n' +
        'емкость аккумулятора: 5000.0 мАч',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd3/hda/81333697871902.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/xiaomi-13-ultra-5g-16-gb-1024-gb-chernyi-110917676/?c=750000000',
    rating: 5.0
  },
  {
    id: 5,
    name: 'Sony Xperia PRO-I 12/512 Гб черный',
    price: 999990,
    description: 'технология NFC: Да\n' +
        'цвет: черный\n' +
        'тип экрана: HDR OLED сенсорный, мультитач\n' +
        'диагональ: 6.5 дюйм\n' +
        'размер оперативной памяти: 12 ГБ\n' +
        'процессор: Snapdragon 888 5G\n' +
        'объем встроенной памяти: 512.0 ГБ\n' +
        'емкость аккумулятора: 4500.0 мАч',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h67/h7f/64366308098078.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/sony-xperia-pro-i-12-512-gb-chernyi-103455910/?c=750000000',
    rating: 5.0
  },
  {
    id: 6,
    name: 'OPPO Find N3 16 ГБ/512 ГБ золотистый',
    price: 999900,
    description: 'технология NFC: Да\n' +
        'цвет: золотистый\n' +
        'тип экрана: OLED, сенсорный\n' +
        'диагональ: 7.82 дюйм\n' +
        'размер оперативной памяти: 16 ГБ\n' +
        'процессор: 8-ядерный Snapdragon 8 Gen 2\n' +
        'объем встроенной памяти: 512.0 ГБ\n' +
        'емкость аккумулятора: 4805.0 мАч',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hcd/h4c/84634174554142.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/oppo-find-n3-16-gb-512-gb-zolotistyi-115053268/?c=750000000',
    rating: 5.0
  },
  {
    id: 7,
    name: 'Apple iPhone 14 Pro 1Tb Dual Sim серебристый',
    price: 998899,
    description: 'технология NFC: Да\n' +
        'цвет: серебристый\n' +
        'тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 6-ядерный Apple A16 Bionic\n' +
        'объем встроенной памяти: 1024.0 ГБ\n' +
        'емкость аккумулятора: 3125.0 мАч',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hbd/h99/65888074367006.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-1tb-dual-sim-serebristyi-107622222/?c=750000000',
    rating: 5.0
  },
  {
    id: 8,
    name: 'HONOR Magic V2 16 ГБ/512 ГБ фиолетовый + подарок',
    price: 997799,
    description: 'технология NFC: Да\n' +
        'цвет: фиолетовый\n' +
        'тип экрана: OLED, сенсорный\n' +
        'диагональ: 6.43 дюйм\n' +
        'размер оперативной памяти: 16 ГБ\n' +
        'процессор: 8-ядерный Snapdragon 8 Gen 2\n' +
        'объем встроенной памяти: 512.0 ГБ\n' +
        'емкость аккумулятора: 5000.0 мАч',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h4b/hc9/85033660088350.png?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/honor-magic-v2-16-gb-512-gb-fioletovyi-podarok-116265226/?c=750000000',
    rating: 5.0
  },
  {
    id: 9,
    name: 'Samsung Galaxy S24 Ultra 5G 12 ГБ/1024 ГБ серый + подарок',
    price: 990000,
    description: 'технология NFC: Да\n' +
        'цвет: серый\n' +
        'тип экрана: Dynamic AMOLED 2X\n' +
        'диагональ: 6.8 дюйм\n' +
        'размер оперативной памяти: 12 ГБ\n' +
        'процессор: 8-ядерный Snapdragon 8 Gen 3\n' +
        'объем встроенной памяти: 1024.0 ГБ\n' +
        'емкость аккумулятора: 5000.0 мАч',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h7a/h43/84952667095070.png?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-1024-gb-seryi-podarok-116004801/?c=750000000',
    rating: 5.0
  },
  {
    id: 10,
    name: 'Xiaomi Mix Fold 3 China version 16 ГБ/512 ГБ черный',
    price: 974000,
    description: 'технология NFC: Да\n' +
        'цвет: черный\n' +
        'тип экрана: AMOLED сенсорный, Gorilla Glass Victus 2\n' +
        'диагональ: 8.025 дюйм\n' +
        'размер оперативной памяти: 16 ГБ\n' +
        'процессор: 8-ядерный Qualcomm Snapdragon 8 Gen 2\n' +
        'объем встроенной памяти: 512.0 ГБ\n' +
        'емкость аккумулятора: 4800.0 мАч',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h57/hb4/84136433254430.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/xiaomi-mix-fold-3-china-version-16-gb-512-gb-chernyi-113693701/?c=750000000',
    rating: 5.0
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/