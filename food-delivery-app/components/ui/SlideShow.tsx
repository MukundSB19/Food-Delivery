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
            dot={<View className="w-2 h-2 mx-1 bg-white rounded-full " />}
            activeDot={
                <View className="w-2 h-2 mx-1 rounded-full bg-slate-600" />
            }
            autoplay={true}
        >
            {slideObject.map((item) => (
                <View
                    key={item.id}
                    className="flex items-center justify-center w-full "
                >
                    <Image
                        className="w-full h-full  "
                        source={item.image}
                        resizeMode="cover"
                    />
                    {item.id % 2 === 0 && (
                        <CustomButton
                            title="Order"
                            className="absolute bottom-5 left-3 ml-[7%] p-3"
                            disabled={false}
                        />
                    )}
                    {item.id % 2 === 1 && (
                        <CustomButton
                            title="Order"
                            className="absolute bottom-5 right-3 mr-[7%] p-3"
                            disabled={false}
                        />
                    )}
                </View>
            ))}
        </Swiper>
    );
};

export default SlideShow;
