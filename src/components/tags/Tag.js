import {useDispatch, useSelector} from "react-redux";
import{tagSelected,tagRemoved} from "../../features/filter/filterVideoSlice";

export default function Tag({tag = {}}) {
     const {id,title} = tag;
     const dispatch = useDispatch();
     const {tags:selectedTags} = useSelector(state => state.filter);

     const isSelected = selectedTags.includes(title);

     const handleSelect = () => {
         if(isSelected) dispatch(tagRemoved(title));
         else dispatch(tagSelected(title));
     }

     const style = isSelected ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600";


    return (
        <div
            className={`px-4 py-1 rounded-full cursor-pointer ${style}`}
            onClick={handleSelect}
        >
            {title}
        </div>
    );
}

{
    /* <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
redux
</div> */
}
