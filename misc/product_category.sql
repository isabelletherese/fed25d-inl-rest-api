CREATE TABLE "product_category" (
  "id" int unsigned NOT NULL AUTO_INCREMENT,
  "product_id" int unsigned NOT NULL,
  "category_id" int unsigned NOT NULL,
  PRIMARY KEY ("id"),
  KEY "product_category_fk" ("product_id"),
  KEY "category_product_fk" ("category_id"),
  CONSTRAINT "category_product_fk" FOREIGN KEY ("category_id") REFERENCES "categories" ("id") ON DELETE CASCADE,
  CONSTRAINT "product_category_fk" FOREIGN KEY ("product_id") REFERENCES "products" ("id") ON DELETE CASCADE
);insert into `product_category` (`category_id`, `id`, `product_id`) values (4, 1, 1);
insert into `product_category` (`category_id`, `id`, `product_id`) values (1, 2, 1);
insert into `product_category` (`category_id`, `id`, `product_id`) values (4, 3, 2);
insert into `product_category` (`category_id`, `id`, `product_id`) values (2, 4, 2);
insert into `product_category` (`category_id`, `id`, `product_id`) values (4, 5, 3);
insert into `product_category` (`category_id`, `id`, `product_id`) values (3, 6, 3);
insert into `product_category` (`category_id`, `id`, `product_id`) values (6, 12, 6);
insert into `product_category` (`category_id`, `id`, `product_id`) values (2, 13, 6);
insert into `product_category` (`category_id`, `id`, `product_id`) values (7, 16, 8);
insert into `product_category` (`category_id`, `id`, `product_id`) values (1, 17, 8);
insert into `product_category` (`category_id`, `id`, `product_id`) values (8, 18, 9);
insert into `product_category` (`category_id`, `id`, `product_id`) values (1, 19, 9);
insert into `product_category` (`category_id`, `id`, `product_id`) values (6, 21, 11);
insert into `product_category` (`category_id`, `id`, `product_id`) values (3, 22, 11);
insert into `product_category` (`category_id`, `id`, `product_id`) values (5, 23, 12);
insert into `product_category` (`category_id`, `id`, `product_id`) values (1, 24, 12);
insert into `product_category` (`category_id`, `id`, `product_id`) values (14, 32, 2);
insert into `product_category` (`category_id`, `id`, `product_id`) values (16, 33, 1);
insert into `product_category` (`category_id`, `id`, `product_id`) values (13, 37, 20);
insert into `product_category` (`category_id`, `id`, `product_id`) values (4, 38, 21);
insert into `product_category` (`category_id`, `id`, `product_id`) values (14, 39, 21);
insert into `product_category` (`category_id`, `id`, `product_id`) values (15, 40, 22);
insert into `product_category` (`category_id`, `id`, `product_id`) values (15, 41, 23);
insert into `product_category` (`category_id`, `id`, `product_id`) values (2, 42, 24);
insert into `product_category` (`category_id`, `id`, `product_id`) values (8, 43, 24);
insert into `product_category` (`category_id`, `id`, `product_id`) values (3, 44, 25);
insert into `product_category` (`category_id`, `id`, `product_id`) values (4, 45, 25);
insert into `product_category` (`category_id`, `id`, `product_id`) values (1, 46, 26);
insert into `product_category` (`category_id`, `id`, `product_id`) values (7, 47, 26);
