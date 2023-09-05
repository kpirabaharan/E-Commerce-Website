'use client';

import { MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ExpandIcon, ShoppingCartIcon } from 'lucide-react';

import { Product } from '@/types';
import usePreviewModal from '@/hooks/usePreviewModal';
import useCart from '@/hooks/useCart';

import { Button } from '@/components/ui/button';

import Currency from '@/components/Currency';

interface ProductCardProps {
  data: Product;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const router = useRouter();
  const { addItem } = useCart();
  const { onOpen } = usePreviewModal();

  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };

  const onPreview = (e: MouseEvent) => {
    e.stopPropagation();
    onOpen(data);
  };

  const onAddToCart = (e: MouseEvent) => {
    e.stopPropagation();
    addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className='bg-white dark:bg-secondary group cursor-pointer rounded-xl border p-3 space-y-3'
    >
      {/* Images and Actions */}
      <div
        className={`aspect-square relative rounded-xl bg-secondary dark:bg-primary-foreground`}
      >
        <Image
          className='rounded-xl'
          src={data.images[0].url}
          alt='product'
          fill
        />
        <div
          className='opacity-0 group-hover:opacity-100 transition duration-300
          absolute bottom-2 w-full'
        >
          <div className='flex gap-x-2 justify-center'>
            <Button
              size={'rounded-icon'}
              variant={'outline'}
              onClick={onPreview}
            >
              <ExpandIcon size={20} />
            </Button>
            <Button
              size={'rounded-icon'}
              variant={'outline'}
              onClick={onAddToCart}
            >
              <ShoppingCartIcon size={20} />
            </Button>
          </div>
        </div>
      </div>
      {/* Description and Price */}
      <div className='flex justify-between w-full'>
        <div>
          <p className='font-semibold text-lg'>{data.name}</p>
          <p className='text-sm text-muted-foreground'>{data.category.name}</p>
        </div>
        <Currency className='font-semibold text-lg' value={data.price} />
      </div>
    </div>
  );
};

export default ProductCard;
