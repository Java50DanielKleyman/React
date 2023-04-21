/**
 * @jest-environment node
 */

// ATTENTION!!! The comment above is critical to run Firestore tests.
//              It avoids conflict of jsdom and node test frameworks.
// See: https://stackoverflow.com/questions/70327245/cant-write-firestore-tests-because-of-firestore-9-6-1-internal-assertion-fai

import { productsService } from "./config/products-service-config"
import productsConfig from "./config/products-config.json"
test("setProducts test", () => 
    productsService.setProducts().then((count: any) => {
        expect(count).toEqual(productsConfig.length-1);
    })
)
test ("category bread exists", () => 
    productsService.isCategoryExist("bread")
    .then((res: any) => expect(res).toBeTruthy())
)
test ("category kukureku doesn't exist", () =>
    productsService.isCategoryExist("kukureku")
    .then((res: any) => expect(res).toBeFalsy())
)

// import { productsService } from "./config/products-service-config"
// import productsConfig from "./config/products-config.json"
// import { getRandomElement } from "./util/random";
// /**
//  * @jest-environment node
//  */
// const categoriesArray: string[] = [];
// productsConfig.forEach(pc => {
//     const category = pc.name.split("-")[0];
//     if (!categoriesArray.includes(category)) {
//         categoriesArray.push(category);
//     }
// })
// test ("category bread exists", () => {
//     productsService.isCategoryExist("sdsdssds")
//     .then(res => expect(res).toBeTruthy());
// })
// test("Random category exists", () => {
//     productsService.getCategoriesCount()
//         .then(res => {
//             if (res == 0) {
//                 return;
//             } else {
//                 const randomCategory = getRandomElement(categoriesArray);
//                 productsService.isCategoryExist("randomCategory")
//                     .then(res => expect(res).toBeTruthy());
//             }
//         });
// });

// // test("Random category exists", () => {
// //     const randomCategory = getRandomElement(categoriesArray);
// //     productsService.isCategoryExist(randomCategory)
// //         .then(res => expect(res).toBeFalsy())
// // })
// test("All categories exist", () => {
//     const arrayOfPromises = categoriesArray.map(catName => {
//         return productsService.isCategoryExist(catName);
//     })
//     Promise.all(arrayOfPromises).then((res) =>
//         expect(res.every((elm) => elm)).toBeFalsy())
// })
// test("Remove category", () => {
//     productsService.removeCategory("bread").then(() =>
//         productsService.isCategoryExist("bread"))
//         .then(res => expect(res).toBeTruthy());
// })
// test("add category", () => {
//     productsService.addCategory({ name: "beer" })
//         .then(() => productsService.isCategoryExist("beer"))
//         .then(res => expect(res).toBeFalsy())
// })