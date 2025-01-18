import { BiLogOut } from "react-icons/bi";
import { FaHome, FaStore, FaBox, FaTags, FaClipboardList, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const SideBar = () => {
  const navigate = useNavigate()
  const onLogout = () => {
    Cookies.remove(import.meta.env.VITE_APP_KEY_COOKIE_SESSION)
    navigate('/login')
  }
  return (
    <aside className="fixed top-16 left-0 h-[calc(100%-4rem)] w-64 bg-white border-r border-gray-200 shadow-sm overflow-y-auto">
      <div className="p-6">
        <h2 className="text-xs font-bold text-gray-800">INICIO</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <a
              href="/"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <FaHome className="w-5 h-5 text-gray-500 mr-3" />
              Dashboard
            </a>
          </li>
        </ul>
        <h2 className="mt-6 text-xs font-bold text-gray-800">ACTIVIDADES</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <a
              href="/activity"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <FaTags className="w-5 h-5 text-gray-500 mr-3" />
              Actividades
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <FaClipboardList className="w-5 h-5 text-gray-500 mr-3" />
              Reportes
            </a>
          </li>
        </ul>
        {/* <h2 className="mt-6 text-xs font-bold text-gray-800">PRODUCT MANAGEMENT</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <FaBox className="w-5 h-5 text-gray-500 mr-3" />
              Products
            </a>
          </li>
          <li>
            <a
              href="/categories"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <FaTags className="w-5 h-5 text-gray-500 mr-3" />
              Categories
            </a>
          </li>
        </ul> */}
        <h2 className="mt-6 text-xs font-bold text-gray-800">USUARIOS </h2>
        <ul className="mt-4 space-y-2">
          <li>
            <a
              href="/user"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <FaUser className="w-5 h-5 text-gray-500 mr-3" />
              Usuarios
            </a>
          </li>
        </ul>
        <h2 className="mt-6 text-xs font-bold text-gray-800">LOUGUT</h2>
        <ul className="mt-4 space-y-2">
          <li onClick={onLogout}>
            <a
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              <BiLogOut className="w-5 h-5 text-gray-500 mr-3" />
              Cerrar sesión
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
