import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <div className={'flex-none'}>
            <Link to={'/'} className="text-xl font-bold">KnowledgeCube</Link>
        </div>
    )
}

export default Logo;
