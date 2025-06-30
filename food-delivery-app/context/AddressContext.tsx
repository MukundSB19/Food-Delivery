import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";
import { DeliveryAddress } from "@/types";

export const DEFAULT_TYPES = ["home", "office", "friend's house"] as const;
export type AddressType = (typeof DEFAULT_TYPES)[number];

type DeliveryAddressContextType = {
  addresses: DeliveryAddress[];
  selectedAddressId: string | null;
  selectedAddress: DeliveryAddress | null;
  addAddress: (address: Omit<DeliveryAddress, "id">) => void;
  updateAddress: (
    id: string,
    updatedData: Partial<Omit<DeliveryAddress, "id">>
  ) => void;
  deleteAddress: (id: string) => void;
  selectAddress: (id: string) => void;
};

const DeliveryAddressContext = createContext<
  DeliveryAddressContextType | undefined
>(undefined);

const STORAGE_KEY = "user_delivery_addresses";

export const DeliveryAddressProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [addresses, setAddresses] = useState<DeliveryAddress[]>([]);
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

  const addAddress = (address: Omit<DeliveryAddress, "id">) => {
    // prevent duplicate types (label/type)
    if (addresses.some((a) => a.label === address.label)) {
      alert(`You already have an address labeled "${address.label}".`);
      return;
    }

    const newAddress: DeliveryAddress = { ...address, id: uuidv4() };
    setAddresses((prev) => [...prev, newAddress]);
    setSelectedAddressId(newAddress.id);
  };

  const updateAddress = (
    id: string,
    updatedData: Partial<Omit<DeliveryAddress, "id">>
  ) => {
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
    if (addresses.find((a) => a.id === id)) {
      setSelectedAddressId(id);
    }
  };

  const selectedAddress =
    addresses.find((addr) => addr.id === selectedAddressId) || null;

  return (
    <DeliveryAddressContext.Provider
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
    </DeliveryAddressContext.Provider>
  );
};

export const useDeliveryAddress = () => {
  const context = useContext(DeliveryAddressContext);
  if (!context)
    throw new Error(
      "useDeliveryAddress must be used within a DeliveryAddressProvider"
    );
  return context;
};
