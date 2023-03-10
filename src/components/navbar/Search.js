import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {searched} from "../../features/filter/filterVideoSlice";
import {useNavigate,useMatch} from "react-router-dom";

export default function Search() {
    const dispatch = useDispatch();
    const {search} = useSelector(state => state.filter);
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const match = useMatch("/");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searched(input));

        if(!match) navigate("/");


    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
                onChange={(e) => setInput(e.target.value)}
                value={input}
            />
        </form>
    );
}
