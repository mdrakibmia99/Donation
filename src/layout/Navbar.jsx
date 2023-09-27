import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
            <div className="navbar justify-between container mx-auto">


                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to={"/"}>Home</NavLink></li>
                            <li><NavLink to={"/donation"}>Donation</NavLink></li>
                            <li><NavLink to={"/statistic"}>Statistics</NavLink></li>

                        </ul>
                    </div>
                    <div className="h-[72px]">
                        <Link to={"/"}>
                            <img src="/images/Logo.png" className="h-full" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/donation"}>Donation</NavLink></li>
                        <li><NavLink to={"/statistic"}>Statistics</NavLink></li>
                    </ul>
                </div>
            </div>
    );
};

export default Navbar;