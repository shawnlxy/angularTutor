import { Component } from '@angular/core';
import {Dish, Ingredient} from '../../shared/dish.model';

@Component({
  // select: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html', // you can put real html here
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
    ingreName: string;
    dishName: string;
    ingre_list: Set<Ingredient> = new Set();
    selected_ingre: Set<Ingredient> = new Set();
    menuDishes: Dish[] = [];

    addIngre(name: string) {
      const ingre = new Ingredient(name);
      this.ingre_list.add(ingre);
    }

    selectInMenu(ingre: Ingredient) {
      if (this.selected_ingre.has(ingre)) {
        this.selected_ingre.delete(ingre);
      } else {
        this.selected_ingre.add(ingre);
      }
      ingre.select_ingre();
    }

    addDish(name: string) {
      const dish = new Dish(name);
      dish.addRecipe(this.selected_ingre);
      this.menuDishes.push(dish);
    }

    checkRecipe() {
      for (const dish of this.menuDishes) {
        if (isEqual(this.selected_ingre, dish.recipe)) {
          alert('you can cook ' + dish.name);
          return;
        }
      }
      alert('No such dish');
    }
}

function isEqual(a, b) {
  if (a.size !== b.size) {
    return false;
  }
  for (const s of Array.from(a.values())) {
    if (!b.has(s)) {
      return false;
    }
  }
  return true;
}
