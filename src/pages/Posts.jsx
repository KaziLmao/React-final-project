import React, {useEffect, useState} from 'react';
import '../styles/App.css';
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPagesCount} from "../utils/pages";
import Header from "../components/Header";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import PostForm from "../components/PostForm";
import MainButton from "../components/UI/buttons/MainButton";
import Loader from "../components/UI/loader/Loader";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/pagination";
import Footer from "../components/Footer";

const Posts = ({user}) => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit));
    })

    useEffect(() => {
        fetchPosts();
    }, [page]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const changePage = (page) => {
        setPage(page);
        fetchPosts(limit, page);
    }

    // console.log(user);

    return (
        <div className="main">
            <Header/>
            <div className="content-container">
                <div className="post-form">
                    <PostFilter
                        filter={filter}
                        setFilter={setFilter}
                    />
                    <MyModal visible={modal} setVisible={setModal}>
                        <PostForm user={user} create={createPost}/>
                    </MyModal>
                    <div className="add-post-btn">
                        <MainButton onClick={() => setModal(true)}>
                            Создать пост
                        </MainButton>
                    </div>
                </div>
                {postError &&
                    <h1>Произошла ошибка ${postError}</h1>
                }
                {isPostsLoading
                    ? <div className="loader-div"><Loader/></div>
                    : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Лента постов"}/>
                }
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    changePage={changePage}
                />
            </div>
            <Footer/>
        </div>
    );
};

export default Posts;