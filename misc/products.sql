CREATE TABLE "products" (
  "id" int unsigned NOT NULL AUTO_INCREMENT,
  "title" varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  "description" varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  "stock" int NOT NULL,
  "image" text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  "price" decimal(10,2) NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY ("id")
);insert into `products` (`created_at`, `description`, `id`, `image`, `price`, `stock`, `title`) values ('2026-08-20 12:34:26', 'Fullfoder för vuxna hundar, alla storlekar', 1, 'https://example.com/images/torrfoder-hund.jpg', '549.00', 25, 'Torrfoder Kyckling & Ris 12kg');
insert into `products` (`created_at`, `description`, `id`, `image`, `price`, `stock`, `title`) values ('2026-08-20 12:34:26', 'Smakrikt våtfoder för katt', 2, 'https://example.com/images/vatfoder-katt.jpg', '29.00', 60, 'Våtfoder Lax i sås 400g');
insert into `products` (`created_at`, `description`, `id`, `image`, `price`, `stock`, `title`) values ('2026-08-20 12:34:26', 'Fiberrikt hö för kanin och marsvin', 3, 'https://example.com/images/timotejho.jpg', '39.00', 45, 'Timotejhö 1kg');
insert into `products` (`created_at`, `description`, `id`, `image`, `price`, `stock`, `title`) values ('2026-08-20 12:34:26', 'Mysig, sluten bädd för katt', 6, 'https://example.com/images/kattgrotta.jpg', '249.00', 20, 'Kattgrotta i filt');
insert into `products` (`created_at`, `description`, `id`, `image`, `price`, `stock`, `title`) values ('2026-08-20 12:34:26', 'Studsig hundleksak med ljud', 8, 'https://example.com/images/gnisterboll.jpg', '89.00', 42, 'Gnisterboll i gummi');
insert into `products` (`created_at`, `description`, `id`, `image`, `price`, `stock`, `title`) values ('2026-08-20 12:34:26', 'Halsband med reflex för säkerhet i mörker', 9, 'https://example.com/images/halsband.jpg', '129.00', 65, 'Reflexhalsband, justerbart');
insert into `products` (`created_at`, `description`, `id`, `image`, `price`, `stock`, `title`) values ('2026-08-20 12:34:26', 'Mysig bädd för kanin, marsvin eller hamster', 11, 'https://example.com/images/halmbadd.jpg', '99.00', 30, 'Halmbädd, mjuk fyllning');
insert into `products` (`created_at`, `description`, `id`, `image`, `price`, `stock`, `title`) values ('2026-08-20 12:34:26', 'Naturligt tuggben, håller tänderna rena', 12, 'https://example.com/images/tuggben.jpg', '49.00', 120, 'Tuggben av nöthud');
insert into `products` (`created_at`, `description`, `id`, `image`, `price`, `stock`, `title`) values ('2026-08-21 09:28:17', 'Stabilt klösträd med två liggplattform och dinglande boll', 20, 'https://example.com/images/klostrad-nino.jpg', '899.00', 8, 'Klösträd Nino, 120 cm');
insert into `products` (`created_at`, `description`, `id`, `image`, `price`, `stock`, `title`) values ('2026-08-21 09:28:17', 'Portionspåsar med kyckling i gelé, för vuxen katt', 21, 'https://example.com/images/vatfoder-kyckling-24pack.jpg', '219.00', 22, 'Våtfoder Kyckling 24-pack');
insert into `products` (`created_at`, `description`, `id`, `image`, `price`, `stock`, `title`) values ('2026-08-21 09:28:17', 'Rymlig lådan med kolfilter och skopa ingår', 22, 'https://example.com/images/kattlada-xl.jpg', '449.00', 6, 'Kattlåda med lock, XL');
insert into `products` (`created_at`, `description`, `id`, `image`, `price`, `stock`, `title`) values ('2026-08-21 09:28:17', 'Fångar sand innan den sprids i hemmet', 23, 'https://example.com/images/kattladematta.jpg', '79.00', 27, 'Kattlådematta');
insert into `products` (`created_at`, `description`, `id`, `image`, `price`, `stock`, `title`) values ('2026-08-21 09:49:10', 'Justerbart halsband i mjukt tyg med säkerhetsspänne och liten pingla', 24, NULL, '79.00', 28, 'Halsband med bjällra');
insert into `products` (`created_at`, `description`, `id`, `image`, `price`, `stock`, `title`) values ('2026-08-21 09:49:49', 'Näringsrik blandning med solros, hirs och majs för undulater och kanariefåglar', 25, NULL, '65.00', 15, 'Fröblandning för burfåglar');
insert into `products` (`created_at`, `description`, `id`, `image`, `price`, `stock`, `title`) values ('2026-08-21 09:50:40', 'Studsig och lätt att få syn på, flyter på vatten', 26, 'https://example.com/images/apportleksak.jpg', '119.00', 37, 'Apportleksak i gummi');
