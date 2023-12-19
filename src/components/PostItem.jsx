import React from 'react';
import DeleteButton from "./UI/buttons/DeleteButton";
import GradePost from "./GradePost";
import MainButton from "./UI/buttons/MainButton";
import {useNavigate} from "react-router-dom";
import { PanelLeftOpen } from 'lucide-react';
import { X } from 'lucide-react';

const PostItem = (props) => {
    const router = useNavigate();

    return (
        <div className="post">
            <div className="post__content">
                <div className="post__content__container">
                    <div className="post__title">
                        <span>{props.post.id}. {props.post.user}</span>
                        <strong>{props.post.title}</strong>
                        <span>{props.post.date}</span>
                    </div>
                    <div className="post__body">
                        {props.post.body}
                    </div>
                </div>

                <div className="post__btns__container">
                    <GradePost/>
                    <div className="post__btns">
                        <DeleteButton onClick={() => props.remove(props.post)}>
                            <X/>
                        </DeleteButton>
                        <MainButton onClick ={() => router(`/post/${props.post.id}`)}>
                            <PanelLeftOpen />
                        </MainButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;