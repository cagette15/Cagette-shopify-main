import { SortFilterItem } from 'lib/constants';
import FilterItemDropdown from './dropdown';
import { FilterItem } from './item';

export type ListItem = SortFilterItem | PathFilterItem;
export type PathFilterItem = { title: string; path: string; subCategories?: PathFilterItem[] };

function FilterItemList({ list }: { list: ListItem[] }) {
  return (
    <div className="hidden md:block">
      {list.map((item: ListItem, i) => (
        <FilterItem key={i} item={item} />
      ))}
    </div>
  );
}

export default function FilterList({ list, title }: { list: ListItem[]; title?: string }) {
  return (
    <>
      <nav className="col-span-2 w-full flex-none px-2 py-2 md:py-4">
        {title ? (
          <h3 className="mb-4 hidden w-1/3 border-b-2 border-solid border-[#704242] font-semibold uppercase text-black md:block">
            {title}
          </h3>
        ) : null}{' '}
        <div className="rounded-md border p-4">
          <ul className="hidden md:block">
            <FilterItemList list={list} />
          </ul>
          <ul className="md:hidden ">
            <FilterItemDropdown list={list} />
          </ul>
          <div> </div>
        </div>
      </nav>
    </>
  );
}
