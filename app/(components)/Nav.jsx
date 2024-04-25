import Link from "next/link";
import { faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = () => {
  return (
    <>
      <nav className="py-4 px-48 flex justify-between">
        <div>
          <Link href="/" className="font-bold text-xl">
            Ta.Ya
          </Link>
        </div>
        <div className="flex">

          <div className="border-l border-r">
            <Link href="/new" className="px-8">
              New
            </Link>
          </div>

          <div className="border-l border-r">
            <Link href="/collection" className="px-8">
              Collection
            </Link>
          </div>

          <div className="border-l border-r">
            <Link href="/shop" className="px-8">
              Shop
            </Link>
          </div>
        </div>
        <div>
        <div className="border-l border-r">
          <Link href="/delete" className="px-4 flex">
            <FontAwesomeIcon icon={faTrashAlt} className="h-4 w-4" />
          </Link>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Nav;
