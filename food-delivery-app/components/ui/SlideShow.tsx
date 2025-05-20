import { useRef } from "react";
import { Image, View } from "react-native";
import Swiper from "react-native-swiper";
import { Slideshow } from "@/types";
import CustomButton from "./CustomButton";

const SlideShow = ({ slideObject }: { slideObject: Slideshow[] }) => {
    const swiperRef = useRef<Swiper>(null);
    return (
        <Swiper
            className="h-[230px]"
            ref={swiperRef}
            loop={true}
            dot={<View className="w-4 h-4 mx-1 bg-white rounded-full " />}
            activeDot={
                <View className="w-4 h-4 mx-1 rounded-full bg-slate-600" />
            }
            autoplay={true}
        >
            {slideObject.map((item) => (
                <View
                    key={item.id}
                    className="flex items-center justify-center w-full px-8 "
                >
                    <Image
                        className="w-full rounded-[24] "
                        source={item.image}
                        resizeMode="cover"
                    />
                    {item.id % 2 === 0 && (
                        <CustomButton
                            title="Order"
                            className="absolute bottom-5 left-3 ml-[10%] p-3"
                            disabled={false}
                        />
                    )}
                    {item.id % 2 === 1 && (
                        <CustomButton
                            title="Order"
                            className="absolute bottom-5 right-3 mr-[10%] p-3"
                            disabled={false}
                        />
                    )}
                </View>
            ))}
        </Swiper>
    );
};

export default SlideShow;
