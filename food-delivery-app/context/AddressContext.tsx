import  React,{ createContext, useState }  from "react";
import { DeliveryAddress } from "@/types"



type AddressContextType = {
  addresses: DeliveryAddress[];
  addAddress: (address: DeliveryAddress) => void;
  deleteAddress: (address: DeliveryAddress) => void;
  updateAddress: (address: DeliveryAddress) => void;
};

const AddressContext=createContext <AddressContextType|undefined>(undefined);
 const AddressProvider=({children}:{children:React.ReactNode}) => {
    const [addresses,setAddresses] =useState<DeliveryAddress[]>([]);

    const addAddress =(address:DeliveryAddress)=>{
        setAddresses(prev=>[...prev,address]);
    }
    
 }
