import axios from 'axios'

const $article = axios.create({
  baseURL: 'https://www.escook.cn/'
})

export default $article
