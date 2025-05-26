import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";

const DEFAULT_LABELS = ["home", "office", "friend's house"] as const;
type Label = (typeof DEFAULT_LABELS)[number];

type Address = {
  id: string;
  label: Label;
  fullAddress: string;
  latitude: number;
  longitude: number;
};

type AddressContextType = {
  addresses: Address[];
  selectedAddressId: string | null;
  selectedAddress: Address | null;
  addAddress: (address: Omit<Address, "id">) => void;
  updateAddress: (
    id: string,
    updatedData: Partial<Omit<Address, "id">>
  ) => void;
  deleteAddress: (id: string) => void;
  selectAddress: (id: string) => void;
};

const AddressContext = createContext<AddressContextType | undefined>(undefined);

const STORAGE_KEY = "user_addresses";

export const AddressProvider = ({ children }: { children: ReactNode }) => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(
    null
  );

  useEffect(() => {
    const loadAddresses = async () => {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        setAddresses(parsed.addresses || []);
        setSelectedAddressId(parsed.selectedAddressId || null);
      }
    };
    loadAddresses();
  }, []);

  useEffect(() => {
    const saveAddresses = async () => {
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ addresses, selectedAddressId })
      );
    };
    saveAddresses();
  }, [addresses, selectedAddressId]);

  const addAddress = (address: Omit<Address, 'id'>) => {
    // prevent duplicate labels
    if (addresses.some((a) => a.label === address.label)) {
      alert(`You already have an address labeled "${address.label}".`);
      return;
    }
  
    const newAddress: Address = { ...address, id: uuidv4() };
    setAddresses((prev) => [...prev, newAddress]);
    setSelectedAddressId(newAddress.id);
  };
  
  const updateAddress = (id: string, updatedData: Partial<Omit<Address, 'id'>>) => {
    if (updatedData.label) {
      const isLabelUsed = addresses.some(
        (a) => a.label === updatedData.label && a.id !== id
      );
      if (isLabelUsed) {
        alert(`You already have an address labeled "${updatedData.label}".`);
        return;
      }
    }
  
    setAddresses((prev) =>
      prev.map((addr) => (addr.id === id ? { ...addr, ...updatedData } : addr))
    );
  };

  const deleteAddress = (id: string) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
    if (selectedAddressId === id) setSelectedAddressId(null);
  };

  const selectAddress = (id: string) => {
    if (addresses.find((a) => a.id === id)) setSelectedAddressId(id);
  };

  const selectedAddress =
    addresses.find((addr) => addr.id === selectedAddressId) || null;

  return (
    <AddressContext.Provider
      value={{
        addresses,
        selectedAddressId,
        selectedAddress,
        addAddress,
        updateAddress,
        deleteAddress,
        selectAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => {
  const context = useContext(AddressContext);
  if (!context)
    throw new Error("useAddress must be used within an AddressProvider");
  return context;
};
