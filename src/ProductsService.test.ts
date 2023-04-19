import { productsService } from "./config/products-service-config"
import productsConfig from "./config/products-config.json"
import { getCountFromServer } from "firebase/firestore";
import { getRandomElement } from "./util/random";

test("Random category exists", () => {
    const categoriesArray = productsConfig.map(pc => {
        return pc.name.split("-")[0]
    })
    const randomCategoryName = getRandomElement(categoriesArray);
    productsService.isCategoryExist(randomCategoryName).then(res => expect(res).toBeTruthy)
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