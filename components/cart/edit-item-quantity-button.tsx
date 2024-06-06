import { useRouter } from 'next/navigation';
import { startTransition, useState } from 'react';

import clsx from 'clsx';
import MinusIcon from 'components/icons/minus';
import PlusIcon from 'components/icons/plus';
import type { CartLineFragment } from 'lib/shopify';
import LoadingDots from '../loading-dots';

export default function EditItemQuantityButton({
  item,
  type
}: {
  item: CartLineFragment;
  type: 'plus' | 'minus';
}) {
  const router = useRouter();
  const [editing, setEditing] = useState(false);

  async function handleEdit() {
    setEditing(true);
    console.log("PUT 22",item)
    const response = await fetch(`/api/cart?lineId=${item.id}`, {
      method: type === 'minus' && item.quantity - 1 === 0 ? 'DELETE' : 'PUT',
      headers:{
        'X-line':item.id
      },
      body: JSON.stringify({
        lineId: item.id,
        variantId: item.merchandise.id,
        quantity: type === 'plus' ? item.quantity + 1 : item.quantity - 1
      })
    });

    const data = await response.json();

    if (data.error) {
      alert(data.error);
      return;
    }

    setEditing(false);

    startTransition(() => {
      router.refresh();
    });
  }
  return (
    <button
      aria-label={type === 'plus' ? 'Increase item quantity' : 'Reduce item quantity'}
      onClick={handleEdit}
      disabled={editing}
      className={clsx(
        'ease flex min-w-[36px] max-w-[36px] items-center justify-center border border-second border-opacity-50 px-2 transition-all duration-200 hover:border-gray-800 hover:bg-gray-100   ',
        {
          'cursor-not-allowed': editing,
          'ml-auto': type === 'minus'
        }
      )}
    >
      {editing ? (
        <LoadingDots className="bg-second " />
      ) : type === 'plus' ? (
        <PlusIcon className="h-4 w-4 text-second" />
      ) : (
        <MinusIcon className="h-4 w-4 text-second" />
      )}
    </button>
  );
}
