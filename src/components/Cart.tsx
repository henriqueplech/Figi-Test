import React from 'react';
import { X, Leaf } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (product: CartItem['product'], quantity: number) => void;
}

export function Cart({ items, onUpdateQuantity }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Your Cart ({items.length})</h2>
      
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.product.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={item.product.image}
                alt={item.product.title}
                className="w-12 h-12 rounded object-contain bg-white"
              />
              <div>
                <h3 className="text-sm font-medium line-clamp-1" title={item.product.title}>
                  {item.product.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {item.quantity}x ${item.product.price.toFixed(2)}
                </p>
              </div>
            </div>
            <button
              onClick={() => onUpdateQuantity(item.product, 0)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {items.length > 0 && (
        <>
          <div className="mt-6 pt-4 border-t">
            <div className="flex justify-between">
              <span className="font-medium">Order Total</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
              <Leaf className="w-4 h-4" />
              <span>This is a carbon-neutral delivery</span>
            </div>
          </div>

          <button className="mt-4 w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 transition-colors">
            Confirm Order
          </button>
        </>
      )}

      {items.length === 0 && (
        <p className="text-gray-500 text-center py-4">Your cart is empty</p>
      )}
    </div>
  );
}