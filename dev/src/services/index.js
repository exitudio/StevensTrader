import getProduct from './getProduct'
import getProducts from './getProducts'
import login from './login'
import postProduct from './postProduct'
import signup from './signup'

export function initServices(app){
  console.log("init service...")
  app.use('/services',getProduct)
  app.use('/services',getProducts)
  app.use('/services',login)
  app.use('/services',postProduct)
  app.use('/services',signup)
}


