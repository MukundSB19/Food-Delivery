import { View, Modal, ModalProps, } from 'react-native'




const LocationModal = ( {children,...props}:ModalProps ) => {
  return (
    <View className='flex-1 justify-center items-center' >
    
    <Modal
      
      {...props}
    >
      {children}
    </Modal>
  </View>
  )
}

export default LocationModal