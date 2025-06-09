import { Link } from "react-router-dom";

function Breadcrumb({ items = [] }) {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {items.map((item, index) => (
                    <li key={index} className={`breadcrumb-item ${item.active ? "active" : ""}`} aria-current={item.active ? "page" : undefined}>
                        {item.active ? (
                            item.label
                        ) : (
                            <Link className="text-decoration-none" to={item.path}>
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}

export default Breadcrumb;
