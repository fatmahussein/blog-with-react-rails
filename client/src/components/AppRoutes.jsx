import React from "react";
import { Routes, Route } from "react-router-dom";

import PostsLists from "../features/posts/PostsLists";
import PostsDetails from "../features/posts/PostsDetail";
import NewPostForm from "../features/posts/newPostForm";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PostsLists />} />
            <Route path="/new" element={< NewPostForm />} />
            <Route path="/posts/:id" element={<PostsDetails />} />
        </Routes>
    );
}

export default AppRoutes;