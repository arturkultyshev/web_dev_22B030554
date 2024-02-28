export interface Product {
  id: number;
  category_id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  address: string;
  rating: number;
  likes: number;
}

export const products = [
  {
    id: 1,
    category_id: 1,
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
    rating: 5.0,
    likes: 0
  },
  {
    id: 2,
    category_id: 1,
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
    rating: 5.0,
    likes: 0
  },
  {
    id: 3,
    category_id: 1,
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
    rating: 5.0,
    likes: 0
  },
  {
    id: 4,
    category_id: 1,
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
    rating: 5.0,
    likes: 0
  },
  {
    id: 5,
    category_id: 1,
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
    rating: 5.0,
    likes: 0
  },
  {
    id: 6,
    category_id: 2,
    name: 'DELL XPS 17 9720 210-BDVI-5 серебристый',
    price: 2999990,
    description: 'диагональ экрана: 17.0 дюйм\n' +
      'процессор: Intel Core i7-12700H\n' +
      'видеокарта: NVIDIA GeForce RTX 3060\n' +
      'размер оперативной памяти: 32.0 Гб\n' +
      'тип жесткого диска: SSD\n' +
      'общий объем накопителей: 1024.0 Гб',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hcd/h14/67723634376734.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/dell-xps-17-9720-210-bdvi-5-serebristyi-108372599/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNQwh9w5Ew4EaZg8l9yX2CMtFQB4jDnWh74-1tq9qH72sd6Wup0gC1BoCMp8QAvD_BwE',
    rating: 5.0,
    likes: 0

  },
  {
    id: 7,
    category_id: 2,
    name: 'Apple MacBook Pro 16 2023 Z1AF001AF темно-серый',
    price: 2878000,
    description: 'диагональ экрана: 16.2 дюйм\n' +
      'процессор: Apple M3 Max\n' +
      'видеокарта: Apple M3 Max 40-Core\n' +
      'размер оперативной памяти: 64.0 Гб\n' +
      'тип жесткого диска: SSD\n' +
      'общий объем накопителей: 1024.0 Гб',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h81/h32/85013694644254.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2023-z1af001af-temno-seryi-116216398/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNQwh9w5Ew4EaZg8l9yX2CMtFQB4jDnWh74-1tq9qH72sd6Wup0gC1BoCMp8QAvD_BwE',
    rating: 5.0,
    likes: 0
  },
  {
    id: 8,
    category_id: 2,
    name: 'ASUS ROG Flow Z13 GZ301ZC-LD130W черный',
    price: 2799990,
    description: 'диагональ экрана: 13.4 дюйм\n' +
      'процессор: Intel Core i7-12700H\n' +
      'видеокарта: NVIDIA GeForce RTX 3050\n' +
      'размер оперативной памяти: 16.0 Гб\n' +
      'тип жесткого диска: SSD\n' +
      'общий объем накопителей: 512.0 Гб',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h98/h48/65439955746846.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/asus-rog-flow-z13-gz301zc-ld130w-chernyi-107462689/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNQwh9w5Ew4EaZg8l9yX2CMtFQB4jDnWh74-1tq9qH72sd6Wup0gC1BoCMp8QAvD_BwE',
    rating: 5.0,
    likes: 0
  },
  {
    id: 9,
    category_id: 2,
    name: 'ASUS Rog Strix Scar 18 G834JY-N6038W 90NR0CG1-M004N0 черный',
    price: 2799990,
    description: 'диагональ экрана: 18.0 дюйм\n' +
      'процессор: Intel Core i9-13980HX\n' +
      'видеокарта: NVIDIA GeForce RTX 4090\n' +
      'размер оперативной памяти: 32.0 Гб\n' +
      'тип жесткого диска: SSD\n' +
      'общий объем накопителей: 2000.0 Гб',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he7/h5e/80569304547358.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/asus-rog-strix-scar-18-g834jy-n6038w-90nr0cg1-m004n0-chernyi-110148074/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNQwh9w5Ew4EaZg8l9yX2CMtFQB4jDnWh74-1tq9qH72sd6Wup0gC1BoCMp8QAvD_BwE',
    rating: 5.0,
    likes: 0
  },
  {
    id: 10,
    category_id: 2,
    name: 'Lenovo Legion 9 16IRX8 83AG003URK черный',
    price: 2754990,
    description: 'диагональ экрана: 16.0 дюйм\n' +
      'процессор: Intel Core i9-13980HX\n' +
      'видеокарта: GeForce RTX 4090\n' +
      'размер оперативной памяти: 64.0 Гб\n' +
      'тип жесткого диска: SSD\n' +
      'общий объем накопителей: 2048.0 Гб',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he7/h4b/85260736266270.png?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/lenovo-legion-9-16irx8-83ag003urk-chernyi-116932168/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNQwh9w5Ew4EaZg8l9yX2CMtFQB4jDnWh74-1tq9qH72sd6Wup0gC1BoCMp8QAvD_BwE',
    rating: 5.0,
    likes: 0
  },
  {
    id: 11,
    category_id: 3,
    name: 'Audeze LCD-MX4 черный',
    price: 1749999,
    description: 'тип: наушники\n' +
      'вид: накладные\n' +
      'подключение: с проводом\n' +
      'тип акустического оформления: открытые\n' +
      'тип крепления: оголовье\n' +
      'система активного шумоподавления: Нет\n' +
      'микрофон: Нет',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h8a/80102040436766.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/audeze-lcd-mx4-chernyi-109896043/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNQwh9w5Ew4EaZg8l9yX2CMtFQB4jDnWh74-1tq9qH72sd6Wup0gC1BoCMp8QAvD_BwE',
    rating: 5.0,
    likes: 0
  },
  {
    id: 12,
    category_id: 3,
    name: 'Meze EMPYREAN черно-коричневый',
    price: 1350000,
    description: 'тип: наушники\n' +
      'вид: накладные\n' +
      'подключение: с проводом\n' +
      'тип акустического оформления: открытые\n' +
      'тип крепления: оголовье\n' +
      'система активного шумоподавления: Нет\n' +
      'микрофон: Нет',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf5/h93/85129922969630.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/meze-empyrean-cherno-korichnevyi-116518149/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNQwh9w5Ew4EaZg8l9yX2CMtFQB4jDnWh74-1tq9qH72sd6Wup0gC1BoCMp8QAvD_BwE',
    rating: 5.0,
    likes: 0
  },
  {
    id: 13,
    category_id: 3,
    name: 'Lunacy DP-HS-1005a черный',
    price: 730000,
    description: 'тип: гарнитура\n' +
      'вид: накладные\n' +
      'подключение: с проводом\n' +
      'тип акустического оформления: закрытые\n' +
      'тип крепления: оголовье\n' +
      'система активного шумоподавления: Нет\n' +
      'микрофон: Да',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h67/h19/84852442005534.png?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/lunacy-dp-hs-1005a-chernyi-115804052/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNQwh9w5Ew4EaZg8l9yX2CMtFQB4jDnWh74-1tq9qH72sd6Wup0gC1BoCMp8QAvD_BwE',
    rating: 5.0,
    likes: 0
  },
  {
    id: 14,
    category_id: 3,
    name: 'Bang & Olufsen BeoPlay H95 синий',
    price: 560480,
    description: 'тип: наушники\n' +
      'вид: накладные\n' +
      'подключение: беспроводное\n' +
      'тип акустического оформления: закрытые\n' +
      'тип крепления: оголовье\n' +
      'система активного шумоподавления: Да\n' +
      'микрофон: Да',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h28/h32/64461708263454.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/bang-olufsen-beoplay-h95-sinii-106485672/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNQwh9w5Ew4EaZg8l9yX2CMtFQB4jDnWh74-1tq9qH72sd6Wup0gC1BoCMp8QAvD_BwE',
    rating: 5.0,
    likes: 0
  },
  {
    id: 15,
    category_id: 3,
    name: 'Bowers & Wilkins PX7 S2 черный',
    price: 468999,
    description: 'тип: наушники\n' +
      'вид: накладные\n' +
      'подключение: беспроводное\n' +
      'тип акустического оформления: закрытые\n' +
      'тип крепления: оголовье\n' +
      'система активного шумоподавления: Да\n' +
      'микрофон: Да',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he7/h74/79182839808030.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/bowers-wilkins-px7-s2-chernyi-109494933/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNQwh9w5Ew4EaZg8l9yX2CMtFQB4jDnWh74-1tq9qH72sd6Wup0gC1BoCMp8QAvD_BwE',
    rating: 5.0,
    likes: 0
  },
  {
    id: 16,
    category_id: 4,
    name: 'ZOWIE EC1-CW черный',
    price: 101564,
    description: 'тип сенсора: оптическая светодиодная\n' +
      'тип подключения: беспроводная\n' +
      'интерфейс: USB\n' +
      'дизайн: для правой руки\n' +
      'игровая: Нет\n' +
      'разрешение оптического сенсора: 3200.0 dpi',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h97/h5b/83155263782942.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/zowie-ec1-cw-chernyi-112855113/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNQwh9w5Ew4EaZg8l9yX2CMtFQB4jDnWh74-1tq9qH72sd6Wup0gC1BoCMp8QAvD_BwE',
    rating: 5.0,
    likes: 0
  },
  {
    id: 17,
    category_id: 4,
    name: 'ASUS ROG SPATHA X черный',
    price: 97604,
    description: 'тип сенсора: оптическая светодиодная\n' +
      'тип подключения: беспроводная\n' +
      'интерфейс: USB, ,Bluetooth\n' +
      'дизайн: для правой руки\n' +
      'игровая: Да\n' +
      'разрешение оптического сенсора: 19000.0 dpi',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h54/h05/64313623937054.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/asus-rog-spatha-x-chernyi-103552379/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNQwh9w5Ew4EaZg8l9yX2CMtFQB4jDnWh74-1tq9qH72sd6Wup0gC1BoCMp8QAvD_BwE',
    rating: 5.0,
    likes: 0
  },
  {
    id: 18,
    category_id: 4,
    name: 'Logitech KDA G305 белый',
    price: 90000,
    description: 'тип сенсора: оптическая светодиодная\n' +
      'тип подключения: беспроводная\n' +
      'интерфейс: USB\n' +
      'дизайн: для правой руки\n' +
      'игровая: Нет\n' +
      'разрешение оптического сенсора: 12000.0 dpi\n' +
      'количество программируемых клавиш: 6',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h85/h3a/66107814379550.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/logitech-kda-g305-belyi-107709942/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNQwh9w5Ew4EaZg8l9yX2CMtFQB4jDnWh74-1tq9qH72sd6Wup0gC1BoCMp8QAvD_BwE',
    rating: 5.0,
    likes: 0
  },
  {
    id: 19,
    category_id: 4,
    name: 'Microsoft Arc mouse черный',
    price: 89990,
    description: 'тип сенсора: оптическая светодиодная\n' +
      'тип подключения: беспроводная\n' +
      'интерфейс: USB\n' +
      'дизайн: для правой и левой руки\n' +
      'игровая: Нет\n' +
      'разрешение оптического сенсора: 1000.0 dpi',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h8e/h98/63776501989406.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/microsoft-arc-mouse-chernyi-9101353/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNQwh9w5Ew4EaZg8l9yX2CMtFQB4jDnWh74-1tq9qH72sd6Wup0gC1BoCMp8QAvD_BwE',
    rating: 5.0,
    likes: 0
  },
  {
    id: 20,
    category_id: 4,
    name: 'ASUS ProArt MD300 черный',
    price: 89990,
    description: 'тип сенсора: оптическая светодиодная\n' +
      'тип подключения: беспроводная\n' +
      'интерфейс: Bluetooth, ,USB, ,радиоканал\n' +
      'дизайн: для правой руки\n' +
      'игровая: Нет\n' +
      'разрешение оптического сенсора: 4200.0 dpi',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h78/hf6/82849492107294.jpg?format=gallery-medium',
    address: 'https://kaspi.kz/shop/p/asus-proart-md300-chernyi-112574696/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNQwh9w5Ew4EaZg8l9yX2CMtFQB4jDnWh74-1tq9qH72sd6Wup0gC1BoCMp8QAvD_BwE',
    rating: 5.0,
    likes: 0
  },
];
