class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.supir = document.getElementById('driver');
    this.tgl = document.getElementById('tanggal');
    this.wj = document.getElementById('waktuJ');
    this.penumpang = document.getElementById('penumpang');
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  run = () => {
    Car.list.forEach((car) => {
      let dateTime = this.tgl.value + "T" + this.wj.value;
      let formDate = Date.parse(dateTime);
      let waktu = Date.parse(car.availableAt);
      let numpang = this.penumpang.value;
      let drive = this.supir.value;

      if(drive == "true"){
        drive = true;
      }else {
        drive = false;
      }
  
      if (
        car.available == drive &&
        waktu >= formDate &&
        car.capacity >= numpang
      ) {
        const node = document.createElement("div");
        node.className = 'col-md-6 col-sm-12 col-lg-3';
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
      }
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}



// async load() {
//   const cars = await Binar.listcars();
//   car.init(cars);
// }


