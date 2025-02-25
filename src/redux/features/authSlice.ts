import { ProductCardProps } from "@/app/menu/_components/ProductCard";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
    items: ProductCardProps[];
}

const initialState: AuthState = {
    items: []
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ProductCardProps>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                // Si el producto ya está en el carrito, aumenta la cantidad
                existingItem.cantidad = (existingItem.cantidad ?? 1) + (action.payload.cantidad ?? 1);
            } else {
                // Si no está, agrégalo al carrito
                state.items.push({ ...action.payload, cantidad: action.payload.cantidad ?? 1 });
            }
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateQuantity: (state, action: PayloadAction<{ id: string, cantidad: number }>) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.cantidad = action.payload.cantidad;
            }
        }
    }
});

export const { addItem, removeItem, updateQuantity } = authSlice.actions;
export default authSlice.reducer;
