import {useState,React} from 'react'
import { API_URL } from '../../../constants';
import { useNavigate } from 'react-router-dom';

function NewPostForm () {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
      setTitle('');
      setBody('');
    // Send the new post to the API here.
     const response = await fetch(API_URL,{
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({title, body})
     });

     if (response.ok){
      const {id} = await response.json();
      navigate(`/posts/${id}`);
     }else {
      console.log('An error occurred.')
     }
  };

  return (
    <div>
      <h1>Create a new post</h1>
      
      <p>Please fill out the form below to create a new post.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='titleInput'>Title:</label>
            <input 
              type='text'
              id='titleInput'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
        </div>
      
      <div>
        <label htmlFor='bodyInput'>Body:</label>
          <textarea 
            type='text'
            id='bodyInput'
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
        </div>

        <div>
          <button type='submit'>Create post</button>
        </div>

    </form>
    </div>
  )
}

export default NewPostForm;