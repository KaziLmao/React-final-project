import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });
    const [fetchComments, isCommentLoading, commentError] = useFetching(async (id) => {
        const response = await PostService.getCommentsById(id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, []);

    return (
        <div className="main">
            <Header/>
            <div className="post">
                <div className="post__content">
                    <h3>Пост по ID = {params.id}</h3>
                    {isLoading
                        ? <Loader/>
                        : <div>
                            <div>
                                {post.id}. {post.title}
                            </div>
                            <div>
                                {post.body}
                            </div>
                    </div>
                    }
                    <h3>Комментарии</h3>
                    {isCommentLoading
                        ? <Loader/>
                        : <div>
                            {comments.map(comm =>
                                <div style={{marginTop:'15px'}}>
                                    <h5>{comm.email}</h5>
                                    <div>{comm.body}</div>
                                </div>
                            )}
                        </div>
                    }
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default PostIdPage;