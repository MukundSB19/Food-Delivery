import { View, Text, ModalProps, Modal } from 'react-native'


const PaymentModal = ({children , ...props}:ModalProps) => {
  return (
     <Modal {...props}>
              <View className="flex-1 justify-center items-center bg-[rgba(0,0,0,0.5)]">
                <View className="w-[380] p-[20] bg-white rounded-3xl items-center ">
                  <View className="flex flex-row items-center w-full justify-between px-3">
                    <Text className="color-fontPrimary-0 font-regularFont tracking-tighter2 text-3xl">
                      Add Your Address
                    </Text>
                    {children}
                  </View>
                  <View>
                    
                  </View>
                </View>
              </View>
            </Modal>
  )
}

export default PaymentModal