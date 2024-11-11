import React from "react";
import { Routes, Route } from "react-router-dom";

import PostsLists from "../features/posts/PostsLists";
import PostsDetails from "../features/posts/PostsDetail";
import NewPostForm from "../features/posts/newPostForm";
import PostEditForm from "../features/posts/PostEditForm";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PostsLists />} />
            <Route path="/new" element={< NewPostForm />} />
            <Route path="/posts/:id" element={<PostsDetails />} />
            <Route path="/posts/:id/edit" element={<PostEditForm />} />
        </Routes>
    );
}

export default AppRoutes;