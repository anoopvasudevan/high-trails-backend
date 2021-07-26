const mongoose = require("mongoose");

const Bike = require("./models/bikes");

const bikes = [
  {
    name: "Allez",
    make: "Specialized",
    category: "Road Bike",
    images: [
      "https://images.unsplash.com/photo-1561642445-b789b9a7e6f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1070&q=80",
      "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1570169043013-de63774bbf97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1567448400815-59d0a6cdb52d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      "https://images.unsplash.com/photo-1561642445-b789b9a7e6f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1070&q=80",
      "https://images.unsplash.com/photo-1574965234283-2f20a4cffa43?ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80",
    ],
    price: "30000",
    size: 40,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    name: "Zipp",
    make: "Ribble",
    category: "Road Bike",
    images: [
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1008&q=80",
      "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1561642445-b789b9a7e6f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1070&q=80",
      "https://images.unsplash.com/photo-1574965234283-2f20a4cffa43?ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80",
    ],
    price: "15000",
    size: 40,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    name: "Mountain Goat",
    make: "Fox",
    category: "Mountain",
    images: [
      "https://images.unsplash.com/photo-1559112438-6817033d3080?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1574965234283-2f20a4cffa43?ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80",
    ],
    price: "15000",
    size: 40,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    name: "NH 47",
    make: "EpoCa",
    category: "Road Bike",
    images: [
      "https://images.unsplash.com/photo-1588879169484-8fe78d21080a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
      "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1570169043013-de63774bbf97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    ],
    price: "3000",
    size: 40,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    name: "e-Bike",
    make: "Cosmo",
    category: "Hybrid",
    images: [
      "https://images.unsplash.com/photo-1560203452-a76df38ba8fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80",
      "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1570169043013-de63774bbf97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1567448400815-59d0a6cdb52d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      "https://images.unsplash.com/photo-1561642445-b789b9a7e6f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1070&q=80",
      "https://images.unsplash.com/photo-1574965234283-2f20a4cffa43?ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80",
    ],
    price: "30000",
    size: 40,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    name: "Ez",
    make: "Level",
    category: "Hybrid",
    images: [
      "https://images.unsplash.com/photo-1578769097022-d50d81c9d5f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
      "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1570169043013-de63774bbf97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1567448400815-59d0a6cdb52d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      "https://images.unsplash.com/photo-1561642445-b789b9a7e6f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1070&q=80",
      "https://images.unsplash.com/photo-1574965234283-2f20a4cffa43?ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80",
    ],
    price: "16000",
    size: 40,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    name: "Mountain King",
    make: "Fox",
    category: "Mountain",
    images: [
      "https://images.unsplash.com/photo-1588879169484-8fe78d21080a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
    ],
    price: "55000",
    size: 40,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    name: "Tesla",
    make: "Hero",
    category: "Hybrid",
    images: [
      "https://images.unsplash.com/photo-1588879169484-8fe78d21080a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
      "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1570169043013-de63774bbf97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1567448400815-59d0a6cdb52d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      "https://images.unsplash.com/photo-1561642445-b789b9a7e6f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1070&q=80",
      "https://images.unsplash.com/photo-1574965234283-2f20a4cffa43?ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80",
    ],
    price: "32000",
    size: 40,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    name: "Streets",
    make: "Specialized",
    category: "Road Bike",
    images: [
      "https://images.unsplash.com/photo-1588879169484-8fe78d21080a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
      "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    ],
    price: "5500",
    size: 40,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    name: "Urban",
    make: "Level",
    category: "Road Bike",
    images: [
      "https://images.unsplash.com/photo-1597600193293-771ce12ebd44?ixlib=rb-1.2.1&auto=format&fit=crop&w=1063&q=80",
      "https://images.unsplash.com/photo-1567448400815-59d0a6cdb52d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      "https://images.unsplash.com/photo-1561642445-b789b9a7e6f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1070&q=80",
      "https://images.unsplash.com/photo-1574965234283-2f20a4cffa43?ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80",
    ],
    price: "7800",
    size: 40,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    name: "The Ranger",
    make: "Level",
    category: "Mountain",
    images: [
      "https://images.unsplash.com/photo-1570106335104-fd2fe80c632e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1048&q=80",
    ],
    price: "11000",
    size: 40,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    name: "Champion",
    make: "Hero",
    category: "BMX",
    images: [
      "https://images.unsplash.com/photo-1562129340-c8edaf803bc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1570169043013-de63774bbf97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1567448400815-59d0a6cdb52d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    ],
    price: "3500",
    size: 40,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
];

const seedDB = async () => {
  try {
    await Bike.deleteMany({});
    console.log("Deleted all bikes in the DB");
  } catch (err) {
    console.log(err);
  }

  let newBike = {};

  bikes.forEach(async (bike) => {
    newBike = new Bike(bike);
    try {
      await newBike.save();
    } catch (err) {
      console.log("New bike could not be saved in the DB");
    }
  });
};

module.exports = seedDB;
