import React from 'react';
import { ShoppingCart, Plus, Minus, Star } from 'lucide-react';
import { Product, CartItem } from '../types';

interface ProductCardProps {
  product: Product;
  cartItem?: CartItem;
  onAddToCart: (product: Product) => void;
  onUpdateQuantity: (product: Product, quantity: number) => void;
}

export function ProductCard({ product, cartItem, onAddToCart, onUpdateQuantity }: ProductCardProps) {
  return (
    <div className="relative group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-square overflow-hidden rounded-lg mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-700 line-clamp-2" title={product.title}>
          {product.title}
        </h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center text-yellow-400">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{product.rating.rate}</span>
          </div>
          <span className="text-sm text-gray-400">({product.rating.count} reviews)</span>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}</p>
      </div>
      
      {cartItem ? (
        <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white rounded-full shadow-lg p-1">
          <button
            onClick={() => onUpdateQuantity(product, cartItem.quantity - 1)}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-6 text-center">{cartItem.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(product, cartItem.quantity + 1)}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => onAddToCart(product)}
          className="absolute bottom-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
        >
          <ShoppingCart className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}