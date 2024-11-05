import React from "react";
import { Routes, Route } from "react-router-dom";

import PostsLists from "../features/posts/PostsLists";
import PostsDetails from "../features/posts/PostsDetail";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PostsLists />} />
            <Route path="/new" element={<h1>New Post</h1>} />
            <Route path="/posts/:id" element={<PostsDetails />} />
        </Routes>
    );
}

export default AppRoutes;