import Tag from "./Tag";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchTag} from "../../features/tags/tagsSlice";
import Loading from "../ui/Loading";
import VideoGridItem from "../grid/VideoGridItem";

export default function Tags() {
    const dispatch = useDispatch();
    const {tags, isLoading} = useSelector(state => state.tags);

    let content;
    if(isLoading) content =  <Loading />;


    if (!isLoading && tags?.length > 0){
        content = tags.map(tag =>
            <Tag key={tag.id} tag={tag} />
        )
    }

    useEffect(() => {
       dispatch(fetchTag());
    }, [dispatch])


    return (
        <section>
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
                {content}
            </div>
        </section>
    );
}
