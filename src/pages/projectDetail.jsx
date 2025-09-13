import {useParams} from "react-router";

export default function projectDetail() {
    const {id} = useParams();

    return (
        <section className= "ProjectDetail">
            <h1> Project detail ID: {id}</h1>
        </section>
    );
}