import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <Link to={'/'}>
                <img className="w-full" src="/images/error-404-Page.gif" alt="" />
            </Link>
        </div>
    );
};

export default NotFoundPage;