"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
};

type CartContextType = {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);

    // Charger le panier au démarrage
    useEffect(() => {
        const savedCart = localStorage.getItem('garanches_cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
        setIsInitialized(true);
    }, []);

    // Sauvegarder à chaque modification
    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('garanches_cart', JSON.stringify(cart));
        }
    }, [cart, isInitialized]);

    const addToCart = (item: CartItem) => {
        setCart(prev => {
            const existing = prev.find(i => i.id === item.id);
            const quantityToAdd = item.quantity || 1;

            if (existing) {
                return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + quantityToAdd } : i);
            }
            return [...prev, { ...item, quantity: quantityToAdd }];
        });
    };

    const removeFromCart = (id: string) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity <= 0) return removeFromCart(id);
        setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
    };

    const clearCart = () => setCart([]);

    const totalItems = isInitialized ? cart.reduce((acc, item) => acc + item.quantity, 0) : 0;
    const totalPrice = isInitialized ? cart.reduce((acc, item) => acc + (item.price * item.quantity), 0) : 0;

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within a CartProvider");
    return context;
};
