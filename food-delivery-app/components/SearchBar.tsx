import {
    TextInput,
    View,
    Keyboard,
    TouchableOpacity,
    Text,
} from "react-native";
import { Feather } from "@expo/vector-icons";

type SearchBarProps = {
    clicked: boolean;
    searchPhrase: string;
    setSearchPhrase: (value: string) => void;
    setClicked: (value: boolean) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
    clicked,
    searchPhrase,
    setSearchPhrase,
    setClicked,
}) => {
    return (
        <View className="m-4 justify-start items-center flex-row w-[90%]">
            <View
                className={
                    clicked
                        ? "p-3 flex-row w-[80%] bg-[#d9dbda] rounded-xl items-center justify-evenly "
                        : "p-3 flex-row w-[95%] bg-[#d9dbda] rounded-xl items-center"
                }
            >
                {/* search Icon */}
                <Feather
                    name="search"
                    size={20}
                    color="black"
                    style={{ marginLeft: 1 }}
                />
                {/* Input field */}
                <TextInput
                    className="text-lg ml-2 w-[90%]"
                    placeholder="Search"
                    value={searchPhrase}
                    onChangeText={setSearchPhrase}
                    onFocus={() => {
                        setClicked(true);
                    }}
                />
            </View>
            {/* cancel button, depending on whether the search bar is clicked or not */}
            {clicked && (
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            Keyboard.dismiss();
                            setClicked(false);
                        }}
                    >
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};
export default SearchBar;
