import axios from 'axios';

const API_URL = "http://localhost:4003/posts";

export const getAllPosts = async () => axios.get(API_URL);
export const getPostById = async (id) => axios.get(`${API_URL}/${id}`);
export const createPost = async (post) => axios.post(API_URL, post);
export const updatePost = async (id, updatedPost) =>axios.put(`${API_URL}/${id}`, updatedPost);
export const deletePost = async (id) => axios.delete(`${API_URL}/${id}`);
