const vendingMachine1 = {
  snacks: [
    {
      name: "Kit Kat",
      price: 6,
    },
    {
      name: "Lays Chips",
      price: 20,
    },
    {
      name: "apple",
      price: 12,
    },
  ],

  vend(input) {
    console.log("Vending", vendingMachine1.snacks[input]);
    console.log("Vending", this.snacks[input]);
  },
};

vendingMachine1.vend(2);
