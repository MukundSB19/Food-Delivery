// // components/FilterModal.tsx
// import React, { forwardRef, useCallback, useMemo, useRef, useState } from "react";
// import { View, Text, TouchableOpacity, Switch, Dimensions } from "react-native";
// import { BottomSheetModal, BottomSheetBackdrop } from "@gorhom/bottom-sheet";
// import Slider from "@react-native-community/slider";

// const SCREEN_HEIGHT = Dimensions.get("window").height;

// type FilterState = {
//     category: string | null;
//     price: number;
//     rating: number | null;
//     onlyOffers: boolean;
//     dietary: string[];
// };

  
//   type FilterModalProps = {
//     isOpen: boolean;
//     onClose: () => void;
//     initialFilters: FilterState;
//     onApply: (newFilters: FilterState) => void;
//   };

// type Props = {
//     isOpen: boolean;
//     onClose: () => void;
//     onApply: (filters: FilterState) => void;
//     initialFilters: FilterState;
// };

// const CATEGORIES = ["Fruits", "Vegetables", "Dairy", "Snacks"];
// const DIETARY = ["Vegan", "Vegetarian", "Gluten-Free"];

// const FilterModal = forwardRef<BottomSheetModal, FilterModalProps>(
//     ({ isOpen, onClose, initialFilters, onApply }, ref) => {
//         const bottomSheetRef = useRef<BottomSheetModal>(null);

//         const snapPoints = useMemo(() => [SCREEN_HEIGHT * 0.85], []);

//         const [category, setCategory] = useState(initialFilters.category);
//         const [price, setPrice] = useState(initialFilters.price);
//         const [rating, setRating] = useState(initialFilters.rating);
//         const [onlyOffers, setOnlyOffers] = useState(initialFilters.onlyOffers);
//         const [dietary, setDietary] = useState<string[]>(initialFilters.dietary);

//         const toggleDiet = (item: string) => {
//             setDietary((prev) =>
//                 prev.includes(item)
//                     ? prev.filter((d) => d !== item)
//                     : [...prev, item]
//             );
//         };

//         const applyFilters = () => {
//             onApply({ category, price, rating, onlyOffers, dietary });
//             bottomSheetRef.current?.dismiss();
//         };

//         const resetFilters = () => {
//             setCategory(null);
//             setPrice(1000);
//             setRating(null);
//             setOnlyOffers(false);
//             setDietary([]);
//         };

//         const renderBackdrop = useCallback(
//             (props: any) => (
//                 <BottomSheetBackdrop {...props} disappearsOnIndex={-1} />
//             ),
//             []
//         );

//         return (
//             <BottomSheetModal
//                 ref={bottomSheetRef}
//                 index={0}
//                 snapPoints={snapPoints}
//                 onDismiss={onClose}
//                 backdropComponent={renderBackdrop}
//                 backgroundStyle={{ backgroundColor: "#fff" }}
//             >
//                 <View className="px-4 pt-4 space-y-4">
//                     {/* Category */}
//                     <Text className="font-bold text-lg">Category</Text>
//                     <View className="flex-row flex-wrap gap-2">
//                         {CATEGORIES.map((cat) => (
//                             <TouchableOpacity
//                                 key={cat}
//                                 onPress={() =>
//                                     setCategory((prev) =>
//                                         prev === cat ? null : cat
//                                     )
//                                 }
//                                 className={`px-4 py-2 rounded-full ${category === cat
//                                         ? "bg-green-500"
//                                         : "bg-gray-200"
//                                     }`}
//                             >
//                                 <Text className="text-sm">{cat}</Text>
//                             </TouchableOpacity>
//                         ))}
//                     </View>

//                     {/* Price */}
//                     <Text className="font-bold text-lg pt-2">
//                         Max Price: ₹{price}
//                     </Text>
//                     <Slider
//                         minimumValue={0}
//                         maximumValue={1000}
//                         step={50}
//                         value={price}
//                         onValueChange={setPrice}
//                         minimumTrackTintColor="#22C55E"
//                         maximumTrackTintColor="#ccc"
//                     />

//                     {/* Ratings */}
//                     <Text className="font-bold text-lg pt-2">Minimum Rating</Text>
//                     <View className="flex-row gap-2">
//                         {[4, 3, 2].map((r) => (
//                             <TouchableOpacity
//                                 key={r}
//                                 onPress={() =>
//                                     setRating((prev) => (prev === r ? null : r))
//                                 }
//                                 className={`px-3 py-2 rounded-full ${rating === r ? "bg-yellow-400" : "bg-gray-200"
//                                     }`}
//                             >
//                                 <Text>⭐ {r}+</Text>
//                             </TouchableOpacity>
//                         ))}
//                     </View>

//                     {/* Offers */}
//                     <View className="flex-row items-center gap-2 pt-4">
//                         <Switch
//                             value={onlyOffers}
//                             onValueChange={setOnlyOffers}
//                             trackColor={{ false: "#ccc", true: "#22C55E" }}
//                             thumbColor="#fff"
//                         />
//                         <Text className="text-base">Only show offers</Text>
//                     </View>

//                     {/* Dietary */}
//                     <Text className="font-bold text-lg pt-4">
//                         Dietary Preferences
//                     </Text>
//                     <View className="flex-row flex-wrap gap-2">
//                         {DIETARY.map((diet) => (
//                             <TouchableOpacity
//                                 key={diet}
//                                 onPress={() => toggleDiet(diet)}
//                                 className={`px-4 py-2 rounded-full ${dietary.includes(diet)
//                                         ? "bg-green-600"
//                                         : "bg-gray-200"
//                                     }`}
//                             >
//                                 <Text className="text-white text-sm">{diet}</Text>
//                             </TouchableOpacity>
//                         ))}
//                     </View>

//                     {/* Buttons */}
//                     <View className="flex-row justify-between pt-6">
//                         <TouchableOpacity
//                             className="bg-gray-300 px-6 py-3 rounded-full"
//                             onPress={resetFilters}
//                         >
//                             <Text>Reset</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity
//                             className="bg-green-500 px-6 py-3 rounded-full"
//                             onPress={applyFilters}
//                         >
//                             <Text className="text-white font-bold">
//                                 Apply Filters
//                             </Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </BottomSheetModal>
//         );
//     }
// );

// export default FilterModal;



import React, { forwardRef, useMemo } from "react";
import { View, Text, Button } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

export type FilterState = {
    category: string | null;
    price: number;
    rating: number | null;
    onlyOffers: boolean;
    dietary: string[];
};

type FilterModalProps = {
    onClose: () => void;
    initialFilters: FilterState;
    onApply: (newFilters: FilterState) => void;
};

const FilterModal = forwardRef<BottomSheetModal, FilterModalProps>(
    ({ onClose, initialFilters, onApply }, ref) => {
        const snapPoints = useMemo(() => ["70%"], []);

        return (
            <BottomSheetModal
                ref={ref}
                index={0}
                snapPoints={snapPoints}
                onDismiss={onClose}
                backgroundStyle={{ borderRadius: 24 }}
            >
                <View className="p-4">
                    <Text className="text-lg font-bold mb-4">
                        Filter Options
                    </Text>
                    <Text>Category: {initialFilters.category ?? "None"}</Text>
                    <Text>Price: {initialFilters.price}</Text>
                    <Text>Rating: {initialFilters.rating ?? "Any"}</Text>

                    <Button
                        title="Apply Filters"
                        onPress={() => {
                            onApply(initialFilters);
                            onClose();
                        }}
                    />
                </View>
            </BottomSheetModal>
        );
    }
);

export default FilterModal;

// const FilterModal = forwardRef<BottomSheetModal, FilterModalProps>(
//     ({ onClose, initialFilters, onApply }, ref) => {
//         const snapPoints = useMemo(() => ["70%"], []);

//         return (
//             <BottomSheetModal
//                 ref={ref}
//                 index={0}
//                 snapPoints={snapPoints}
//                 onDismiss={onClose}
//                 backgroundStyle={{ borderRadius: 24 }}
//             >
//                 <View>
//                     <Text>Filter Options</Text>
//                 </View>
//             </BottomSheetModal>
//         );
//     }
// );
  
