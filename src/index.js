import {model} from './model'
import {Site} from './classes/site'
import {Sidebar} from './classes/sidebar'
import './styles/main.css'

// const site = document.querySelector('#site')  // Оптимизируем код вынося работу с DOM деревом в отдельную переменную

const site = new Site('#site')

const updateCallback = newBlock => {
  model.push(newBlock)
  site.render(model)
}

new Sidebar('#panel', updateCallback)

site.render(model)