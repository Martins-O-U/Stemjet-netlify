import * as types from '../Actions/action-types';

const initialState = [];
const initialState2 = [];

export const SingleBlogPost = (state = initialState, action) => {
    switch (action.type) {

        case types.GET_SINGLE_BLOG_SUCCESS:
            return action.payload;

        case types.GET_SINGLE_BLOG_FAILURE:
            return action.payload;

        default:
            return state;
    }
};

export const AllBlogPost = (state = initialState2, action) => {
    switch (action.type) {

        case types.GET_ALL_BLOG_SUCCESS:
            return action.payload;

        case types.GET_ALL_BLOG_FAILURE:
            return action.payload;

        default:
            return state;
    }
};
