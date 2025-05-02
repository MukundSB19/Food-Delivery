import { Text, View, FlatList, SafeAreaView } from "react-native";

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
    data: DataItem[] | null;
};
// definition of the Item, which will be rendered in the FlatList
const Item: React.FC<ItemProps> = ({
    name,
    details,
}: {
    name: string;
    details: string;
}) => (
    <View className="m-[30] border-b-2 border-b-[#d9dbda]">
        <Text className="text-lg mb-1 italic">{name}</Text>
        <Text>{details}</Text>
    </View>
);

// the filter
const List: React.FC<ListProps> = ({ searchPhrase, setClicked, data }) => {
    const renderItem = ({ item }: { item: DataItem }) => {
        // when no input, show all
        if (searchPhrase === "") {
            return <Item name={item.name} details={item.details} />;
        }
        // filter of the name
        if (
            item.name
                .toUpperCase()
                .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
        ) {
            return <Item name={item.name} details={item.details} />;
        }
        // filter of the description
        if (
            item.details
                .toUpperCase()
                .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
        ) {
            return <Item name={item.name} details={item.details} />;
        }
        return null;
    };

    return (
        <SafeAreaView className="w-full h-4/5 m-[10]">
            <View
                onStartShouldSetResponder={() => {
                    setClicked(false);
                    return true;
                }}
            >
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    maxToRenderPerBatch={2}
                />
            </View>
        </SafeAreaView>
    );
};

export default List;
