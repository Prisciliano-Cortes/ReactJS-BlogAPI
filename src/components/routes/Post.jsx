import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const Post = () => {
    let params = useParams();

    const { data, error, loading } = useFetch(
        "https://jsonplaceholder.typicode.com/posts/" + params.id
    );

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error !== "") {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            <h1>
                {data.id} - {data.title}
            </h1>
            <p>{data.body}</p>
        </div>
    );
};

export default Post;