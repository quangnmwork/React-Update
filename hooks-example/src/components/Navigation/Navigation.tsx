import { Link } from "react-router-dom";

interface ItemNavigateProps {
  name: string;
  path: string;
}
const NavigationList: ItemNavigateProps[] = [
  { name: "Memo", path: "/memo" },
  {
    name: "Memo Boxes",
    path: "/boxes-memo",
  },
  {
    name: "Callback",
    path: "/callback",
  },
  {
    name: "Reducer",
    path: "/reducer",
  },
  { name: "Context", path: "/context" },
];

const Navigation = () => {
  return (
    <div className="text-center mt-5">
      <ul className="menu menu-horizontal bg-base-100 rounded-box mx-auto">
        {NavigationList.map((navigationItem, index) => (
          <li className="bg-blue-500 text-white" key={index}>
            <Link to={navigationItem.path}>{navigationItem.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
