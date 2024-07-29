class Cook {
  setNext(handler) {
  }

  doFood(request) {
  }
}

class AbstractHandler extends Cook {
  #next_handler = null;

  setNext(handler) {
    this.#next_handler = handler;

    return handler;
  }

  doFood(request) {
    if (this.#next_handler) {
      return this.#next_handler.doFood(request);
    } else {
      return null;
    }
  }
}

class CookHandler extends AbstractHandler {

  doFood(request) {
    if (request === 'Simple') {
      return `Cook can do ${request}`;
    } else {
      return super.doFood(request)
    }
  }
}


class SousChefHandler extends AbstractHandler {

  doFood(request) {
    if (request === 'Sushi') {
      return `Sous can do ${request}`;
    } else {
      return super.doFood(request)
    }
  }
}


class ChefHandler extends AbstractHandler {

  doFood(request) {
    if (request === 'Meat') {
      return `Chef can do ${request}`;
    } else {
      return super.doFood(request)
    }
  }
}

class FishChefHandler extends AbstractHandler {

  doFood(request) {
    if (request === 'Fish') {
      return `Fish chef can do ${request}`;
    } else {
      return super.doFood(request)
    }
  }
}


function clientCode(cook) {
  for (let food of ['Simple', 'Sushi', 'Meat', 'Fish', 'False']) {
    console.log(`Client: Who can do a ${food}?`);

    let result = cook.doFood(food);
  
    if (result) {
      console.log(`     ${result}`);
    } else {
      console.log(`${food} was left untouched `)
    }
  }
}


const simple = new CookHandler();
const sous = new SousChefHandler();
const chef = new ChefHandler();
const fish = new FishChefHandler();

simple.setNext(sous).setNext(chef).setNext(fish);

console.log('Simple > Sous > Chef > Fish');

clientCode(simple);

console.log('Souse > Chef > Fish');

clientCode(sous)

console.log('Chef > Fish');

clientCode(chef)
