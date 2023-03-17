import { Product, ProductList, ProductListConfig } from 'src/types/product.type'
import { SuccesResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const URL = 'product'

export const productApi = {
  getProducts(params: ProductListConfig) {
    return http.get<SuccesResponse<ProductList>>(URL, {
      params
    })
  },
  getProductDetail(id: string) {
    return http.get<SuccesResponse<Product>>(`${URL}/${id}`)
  }
}
