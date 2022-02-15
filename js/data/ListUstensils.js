import { recipes } from "./Data.js"
import {createDropdown} from '../Models/listsDropdown.js'
import { filters } from "./Filters.js"
export const getListOfUstensils = (filter) => {
  let listOfUstensils = []
  recipes.map(recipe => {
    recipe.ustensils.map(ustensil => {
      if(!listOfUstensils.includes(ustensil.toLowerCase())){
        if(ustensil.toLowerCase().includes(filter)){
          listOfUstensils.push(ustensil.toLowerCase())
        }
      }
    })
  })
  return listOfUstensils
}
const inputUstensils = document.getElementById("input-ustensil")
inputUstensils.addEventListener('keyup', function(){
  createDropdown(getListOfUstensils(inputUstensils.value), 'listUstensils')
  filters.ustensil = inputUstensils.value
  console.log(filters)
  createTemplate(filters)
})