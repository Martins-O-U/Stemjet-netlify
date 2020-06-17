import axios from 'axios';
import * as types from "./action-types"

export const getPostedBlogById = id => async dispatch => {

    try {
        const { data } = await axios.get(
            `https://stem-jet-db.herokuapp.com/api/blogs/${id}`
        );

        dispatch({
            type: types.GET_SINGLE_BLOG_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: types.GET_SINGLE_BLOG_FAILURE,
            payload: error.message || 'Something went wrong.',
        });
    }
};

export const getAllPostedBlogs = id => async dispatch => {

    try {
        const { data } = await axios.get(
            "https://stem-jet-db.herokuapp.com/api/blogs"
        );

        dispatch({
            type: types.GET_ALL_BLOG_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: types.GET_ALL_BLOG_FAILURE,
            payload: error.message || 'Something went wrong.',
        });
    }
};


// export const deleteCompanyReview = id => async dispatch => {
//   dispatch({
//     type: types.DELETE_COMPANY_REVIEWS,
//   });

//   try {
//     await axios.delete(
//       `${process.env.REACT_APP_BACKEND_URL}/companyreviews/${id}`,
//       {
//         withCredentials: true,
//       }
//     );

//     dispatch({
//       type: types.DELETE_COMPANY_REVIEWS_SUCCESS,
//       payload: id,
//     });
//   } catch (error) {
//     dispatch({
//       type: types.DELETE_COMPANY_REVIEWS_FAILURE,
//       payload: error.message || 'Something went wrong.',
//     });
//   }
// };

// export const updateCompanyReview = update => async dispatch => {
//   dispatch({
//     type: types.UPDATE_COMPANY_REVIEWS,
//   });

//   try {
//     const { data } = await axios.patch(
//       `${process.env.REACT_APP_BACKEND_URL}/companyreviews/${update.id}`,
//       update,
//       {
//         withCredentials: true,
//       }
//     );

//     dispatch({
//       type: types.UPDATE_COMPANY_REVIEWS_SUCCESS,
//       payload: data,
//     });

//     openNotification('Review Edited Successfully');
//   } catch (error) {
//     dispatch({
//       type: types.UPDATE_COMPANY_REVIEWS_FAILURE,
//       payload: error.message || 'Something went wrong.',
//     });
//     failureNotification('Review could not be Edited');
//   }
// };


// export const addInterviewReview = (review, id, history) => async dispatch => {
//   dispatch({
//     type: types.ADD_INTERVIEW_REVIEW,
//   });

//   try {
//     const response = await axios.post(
//       `${process.env.REACT_APP_BACKEND_URL}/interviewreviews/`,
//       { ...review, user_id: id }
//     );
//     dispatch({
//       type: types.ADD_INTERVIEW_REVIEW_SUCCESS,
//       payload: response.data,
//     });
//     history.push({ pathname: '/reviews', state: 2 });
//     openNotification('Review Added Successfully! ');
//   } catch (error) {
//     dispatch({
//       type: types.ADD_INTERVIEW_REVIEW_FAILURE,
//       payload: error.message || 'Something went wrong.',
//     });
//     failureNotification('Review could not be added');
//   }
// };

