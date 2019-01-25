export class Ingredient {
  selected: boolean;
  name: string;
  constructor(name: string) {
    this.name = name;
    this.selected = false;
  }
  public select_ingre() {
    this.selected = !this.selected;
  }
}

export class Dish {
  name: string;
  recipe: Set<Ingredient>;
  constructor(name: string) {
    this.name = name;
    this.recipe = new Set();
  }

  public addRecipe(selected_ingre: Set<Ingredient>) {
    if (selected_ingre.size === 0) {
      alert('Please select ingredients');
      return;
    }
    for (const item of Array.from(selected_ingre.values())) {
      this.recipe.add(item);
    }
  }

}
