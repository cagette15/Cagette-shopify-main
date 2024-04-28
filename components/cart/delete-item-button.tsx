import clsx from 'clsx';
import TrashIcon from 'components/icons/trash';
import LoadingDots from 'components/loading-dots';
import type { CartLineFragment } from 'lib/shopify';
import { useRouter } from 'next/navigation';
import { startTransition, useState } from 'react';

export default function DeleteItemButton({ item }: { item: CartLineFragment }) {
  const router = useRouter();
  const [removing, setRemoving] = useState(false);

  async function handleRemove() {
    setRemoving(true);

    const response = await fetch(`/api/cart`, {
      method: 'DELETE',
      body: JSON.stringify({
        lineId: item.id
      })
    });
    const data = await response.json();

    if (data.error) {
      alert(data.error);
      return;
    }

    setRemoving(false);

    startTransition(() => {
      router.refresh();
    });
  }
  return (
    <button
      aria-label="Remove cart item"
      onClick={handleRemove}
      disabled={removing}
      className={clsx(
        'ease flex min-w-[40px] max-w-[40px] items-center justify-center border border-second border-opacity-50 px-2 transition-all duration-200 hover:border-gray-800   hover:bg-gray-100',
        {
          'cursor-not-allowed px-0 text-second': removing
        }
      )}
    >
      {removing ? (
        <LoadingDots className="bg-second " />
      ) : (
        <TrashIcon className="hover:text-accent-3 mx-[1px] h-8 w-8 text-second" />
      )}
    </button>
  );
}
