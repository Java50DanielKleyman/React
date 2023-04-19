import { productsService } from "./config/products-service-config"
import productsConfig from "./config/products-config.json"
import { getCountFromServer } from "firebase/firestore";
import { getRandomElement } from "./util/random";

const categoriesArray = productsConfig.map(pc => {
    return pc.name.split("-")[0]
})
test("Random category exists", () => {
    const randomCategory = getRandomElement(categoriesArray);
    productsService.isCategoryExist(randomCategory).then(res => expect(res).toBeTruthy)
})
test("All categories exist", () => {
    const arrayOfPromises = categoriesArray.map(catName => {
        return productsService.isCategoryExist(catName);
    })
    Promise.all(arrayOfPromises).then((res) =>
        expect(res.every((elm) => elm)).toBeTruthy)
})




// test("setProducts test", () => {
//     productsService.setProducts().then(count => {
//         expect(count).toEqual(productsConfig.length);
//     })
// })
// test ("category bread exists", () => {
//     productsService.isCategoryExist("bread").then(res => expect(res).toBeTruthy())
// })
// test ("category kukureku doesnt exists", () => {
//     productsService.isCategoryExist("bread").then(res => expect(res).toBeFalsy());
// }) 