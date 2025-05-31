import React, { useState, useEffect } from "react";
import { Text, SafeAreaView } from "react-native";
import List from "../components/List";
import SearchBar from "./SearchBar";
type DataItem = {
    id: string;
    name: string;
    details: string;
};


const SearchFunctionality = () => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [fakeData, setFakeData] = useState<DataItem[] | null>(null);

    // *get data from the fake api endpoint
    useEffect(() => {
        const getData = async () => {
            const apiResponse = await fetch(
                "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
            );
            const data: DataItem[] = await apiResponse.json();
            setFakeData(data);
        };
        getData();
    }, []);

    return (
        <SafeAreaView className="items-center justify-center">
            {!clicked && (
                <Text className="w-full mt-[20] text-sm ml-[10%] font-bold">
                    Previous search 
                </Text>
            )}
            <SearchBar
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                clicked={clicked}
                setClicked={setClicked}
            />
            {
                <List
                    searchPhrase={searchPhrase}
                    data={fakeData}
                    setClicked={setClicked}
                />
            }
        </SafeAreaView>
    );
};

export default SearchFunctionality;
