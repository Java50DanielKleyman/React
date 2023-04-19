import { productsService } from "./config/products-service-config"
import productsConfig from "./config/products-config.json"
import { getRandomElement } from "./util/random";

const categoriesArray: string[] = [];
productsConfig.forEach(pc => {
    const category = pc.name.split("-")[0];
    if (!categoriesArray.includes(category)) {
        categoriesArray.push(category);
    }
})
test("Random category exists", () => {
    productsService.getCategoriesCount()
        .then(res => {
            if (res == 0) {
                return;
            } else {
                const randomCategory = getRandomElement(categoriesArray);
                productsService.isCategoryExist("randomCategory")
                    .then(res => expect(res).toBeTruthy());
            }
        });
});

// test("Random category exists", () => {
//     const randomCategory = getRandomElement(categoriesArray);
//     productsService.isCategoryExist(randomCategory)
//         .then(res => expect(res).toBeFalsy())
// })
test("All categories exist", () => {
    const arrayOfPromises = categoriesArray.map(catName => {
        return productsService.isCategoryExist(catName);
    })
    Promise.all(arrayOfPromises).then((res) =>
        expect(res.every((elm) => elm)).toBeFalsy())
})
test("Remove category", () => {
    productsService.removeCategory("bread").then(() =>
        productsService.isCategoryExist("bread"))
        .then(res => expect(res).toBeTruthy());
})
test("add category", () => {
    productsService.addCategory({ name: "beer" })
        .then(() => productsService.isCategoryExist("beer"))
        .then(res => expect(res).toBeFalsy())
})

