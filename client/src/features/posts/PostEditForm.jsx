import {useState,useEffect,React} from "react";
import { useParams, useNavigate} from "react-router-dom";
import { API_URL } from "../../../constants";

function PostEditForm(){
    const [post,setPost] = useState(null);
    const { id } = useParams();
    const [,setLoading] = useState(true);
    const [,setError]= useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        //fetch current post by id
        const fetchCurrentPost = async () => {
            try{
                const response = await fetch(`${API_URL}/${id}`);
                if (response.ok) {
                    const json = await response.json();
                    setPost(json);
                } else {
                    throw response;
                }
            } catch (e) {
                console.error('Error occurred:', e);
                setError(e.message);
            } finally {
                setLoading(false);
            }
        }
        fetchCurrentPost();
    }, [id]);



        const handlesubmit = async (e) => {  
            e.preventDefault();

            try{
                const response = await fetch(`${API_URL}/${id}`,
                    {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify({
                            title: post.title,
                            body: post.body,
                        }),

                });
                if (response.ok) {
                    const json = await response.json();
                    console.log('success:',json);
                    navigate(`/posts/${id}`);
                }else{
                    throw new Error(`Error updating post: ${response.status}`);

                }
                }catch(e){
                    console.error('Error occurred:', e);
                    setError(e.message);
                    
                     }
        };

        if(!post) return <h2>Loading...</h2>

    
    return(
        <div>
            <h2>Edit Post </h2>
            <form onSubmit={handlesubmit}>
                <div>
                    <label htmlFor="titleInput">Title:</label>
                    <br/>
                    <input 
                        type="text"
                        id="titleInput"
                        value={post.title}
                        onChange={(e) => setPost({...post, title: e.target.value})}
                        />
                </div>

                <div>
                    <label htmlFor="bodyInput">Body:</label>
                    <br/>
                    <textarea 
                        id="bodyInput"
                        value={post.body}
                        onChange={(e) => setPost({...post, body: e.target.value})}
                        />
                </div>

                <div>
                    <button type="submit">Save</button>
                  
                </div>
            </form>
        </div>
    )   
}

export default PostEditForm;