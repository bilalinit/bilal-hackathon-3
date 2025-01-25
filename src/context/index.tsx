"use client";
import { StaticImageData } from "next/image";
import { createContext, useState, useContext, useEffect } from "react";

export interface CartItem {
  _id: string; 
  imageUrl: string | StaticImageData; 
  title: string;
  description: string; 
  price: number;
  quantity: number; 
}

interface AppContextType {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  AddToCart: (product: CartItem) => void;
  RemoveFromCart: (id: string) => void;
}


const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

 
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error parsing cart data from localStorage", error);
      }
    }
  }, []);

  
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const AddToCart = (product: CartItem) => {
    const existingProduct = cart.find((item) => item._id === product._id);

    let updatedCart;
    if (existingProduct) {
      
      updatedCart = cart.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }  
          : item
      );
    } else {
     
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart); 
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
  };


  const RemoveFromCart = (id: string) => {
    const existingProduct = cart.find((item) => item._id === id);

    let updatedCart;
    if (existingProduct && existingProduct.quantity > 1) {
     
      updatedCart = cart.map((item) =>
        item._id === id
          ? { ...item, quantity: item.quantity - 1 }  
          : item
      );
    } else {
      
      updatedCart = cart.filter((item) => item._id !== id);
    }

    setCart(updatedCart); 
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
  };

  return (
    <AppContext.Provider value={{ cart, setCart, AddToCart, RemoveFromCart }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppWrapper");
  }

  return context;
}
