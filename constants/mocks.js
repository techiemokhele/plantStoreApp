//declare app categories
const categories = [
  {
    id: "plants",
    name: "Plants",
    tags: ["products", "inspirations"],
    count: 147,
    image: require("../assets/icons/plants.png"),
  },
  {
    id: "seeds",
    name: "Seeds",
    tags: ["products", "shop"],
    count: 16,
    image: require("../assets/icons/seeds.png"),
  },
  {
    id: "flowers",
    name: "Flowers",
    tags: ["products", "inspirations"],
    count: 68,
    image: require("../assets/icons/flowers.png"),
  },
  {
    id: "sprayers",
    name: "Sprayers",
    tags: ["products", "shop"],
    count: 17,
    image: require("../assets/icons/sprayers.png"),
  },
  {
    id: "pots",
    name: "Pots",
    tags: ["products", "shop"],
    count: 47,
    image: require("../assets/icons/pots.png"),
  },
  {
    id: "fertilizers",
    name: "fertilizers",
    tags: ["products", "shop"],
    count: 47,
    image: require("../assets/icons/fertilizers.png"),
  },
];

//declare app products
const products = {
  id: 1,
  name: "16 Best Plants That Thrive In Your Bedroom",
  description:
    "Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.",
  tags: ["Interior", "27 m²", "Ideas"],
  images: [
    require("../assets/images/plants_1.png"),
    require("../assets/images/plants_2.png"),
    require("../assets/images/plants_3.png"),
    // showing only 3 images, show +6 for the rest
    require("../assets/images/plants_1.png"),
    require("../assets/images/plants_2.png"),
    require("../assets/images/plants_3.png"),
    require("../assets/images/plants_1.png"),
    require("../assets/images/plants_2.png"),
    require("../assets/images/plants_3.png"),
  ],
};

//declare app products
const explore = [
  //images
  require("../assets/images/explore_1.png"),
  require("../assets/images/explore_2.png"),
  require("../assets/images/explore_3.png"),
  require("../assets/images/explore_4.png"),
  require("../assets/images/explore_5.png"),
  require("../assets/images/explore_6.png"),
];

//declare app profile
const profile = {
  username: "Mokhele Plants",
  location: "South Africa",
  email: "contact@mokheleplants.co.za",
  avatar: require("../assets/images/avatar.png"),
  budget: 10000,
  monthly_cap: 5000,
  notification: true,
  newsletter: false,
};

//export constant mocks
export { categories, products, explore, profile };
