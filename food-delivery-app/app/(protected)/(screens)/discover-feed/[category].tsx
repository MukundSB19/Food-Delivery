import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";


interface Fruit {
  name: string;
  vitamin: string;
  guide: string;
  
}

interface Vegetable {
  name: string;
}

interface Dairy {
  name: string;
}

interface Grain {
  name: string;
}

interface Spice {
  name: string;
}

interface ProductItem {
  category: "Fruits" | "Vegetables" | "Dairy" | "Grains" | "Spices";
  id: number;
  data: Fruit[] | Vegetable[] | Dairy[] | Grain[] | Spice[];
}


const DATA = [
  {
    category: " Fruits ",
    id: 1,

    data: [
      {
        name: "Orange",
        id:1,
        // vitamin: "Vitamin C, B1, Folate",
        // guide: "Best Time to Eat Morning or Mid-Morning",
      },
      {
        name: "Mango",
        id:2,
        // vitamin: "Vitamin A,C,E and B6",
        // guide: "Best Time to Eat Midday",
      },
      {
        name: "Grapes",
        id:3,
        // vitamin: "Vitamin C,K",
        // guide: "Best Time to Eat  Mid-Morning or Afternoon",
      },
      {
        name: "Blueberries",
        id:4,
        // vitamin: "Vitamin C,k",
        // guide: "Best Time to Eat Snack Time / Afternoon",
      },
      {
        name: "Banana",
        id:5,
        // vitamin: "Vitamin B6, Vitamin C",
        // guide: "Best Time to Eat Morning or Mid-Morning",
      },
    ],
  },
  {
    category: "Vegetables",
    id: 2,

    data: [
      {
        name: "Carrot",
        id:1,
      },
      {
        name: "Broccoli",
        id:2,
      },
      {
        name: "Spinach",
        id:3,
      },
      {
        name: "Tomato",
        id:4,
      },
      {
        name: "potato",
        id:5,
      },
    ],
  },
  {
    category: "Dairy",
    id: 3,

    data: [
      {
        name: "Milk",
        id:1,
      },
      {
        name: "Cheese",
        id:1,
      },
      {
        name: "Butter",
        id:1,
      },
      {
        name: "Yogurt",
      },
      {
        name: "Cream",
      },
    ],
  },
  {
    category: "Grains",
    id: 4,

    data: [
      {
        name: "Rice",
      },
      {
        name: "Wheat",
      },
      {
        name: "Oats",
      },
      {
        name: "Barley",
      },
      {
        name: "Millet",
      },
    ],
  },
  {
    category: "Spices",
    id: 5,

    data: [
      {
        name: "Cumin",
      },
      {
        name: "Turmeric",
      },
      {
        name: "Cinnamon",
      },
      {
        name: "Paprika",
      },
      {
        name: "Black Pepper",
      },
    ],
  },
];


interface ProductData {
  name:string
}
const category = () => {

  const renderItem = ({ item }: { item: ProductData }) => {
  
     console.log(item)
   return (<Text>
    {item.name}
   </Text>)

};



  return (
    <SafeAreaView>
      <Text className="text-2xl">{DATA[0].category}</Text>
      <Text>
        Handpicked straight from the farms, our selection of popular fruits
        brings you the freshest and juiciest flavours just as nature intended
      </Text>
      <FlatList   data={DATA[0].data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.name}
                    maxToRenderPerBatch={2} />

      
    </SafeAreaView>
  );
};

export default category;
