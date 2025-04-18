import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";

// Define the type for individual data items
type DataItem = {
  id: string;
  name: string;
  details: string;
};

// Props for Item component
type ItemProps = {
  name: string;
  details: string;
};

// Props for List component
type ListProps = {
  searchPhrase: string;
  setClicked: (value: boolean) => void;
  data: DataItem[]|null;
};
// definition of the Item, which will be rendered in the FlatList
const Item:React.FC<ItemProps> = ({ name, details }:{name:string,details:string}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text >{details}</Text>
  </View>
);

// the filter
const List:React.FC<ListProps> = ({ searchPhrase, setClicked, data})=> { 
  const renderItem = ({ item }:{item:DataItem}) => {
    // when no input, show all
    if (searchPhrase === "") {
      return <Item name={item.name} details={item.details} />;
    }
    // filter of the name
    if (item.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.name} details={item.details} />;
    }
    // filter of the description
    if (item.details.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.name} details={item.details} />;
    }
    return null
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          setClicked(false);
          return true
        }}
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});