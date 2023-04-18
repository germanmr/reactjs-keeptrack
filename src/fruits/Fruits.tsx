import { Fruit } from "./Fruit";

function FruitListItem(props : any) {
    const fruit = props.fruit;
    return <li key={fruit.id}>{fruit.name}</li>;
}

export function FruitList(props : any) {
    const fruitListItems = props.fruits.map((fruit : Fruit) => (
      <FruitListItem fruit={fruit} />
    ));
    return <ul>{fruitListItems}</ul>;
}
  

