import React from 'react';
import { create } from 'zustand';
import api from '../utils/api';

const useAuthStore = create(set=>({
    // 로그인 했으면 아이디가, 비로그인이면 null
    // undefined는 뭐임? 아직 미확인 상태
    username: undefined,

    // authStore에 로그인 정보가 들어있는데 이상태는 F5키 누르면 사라짐
    // 앱이 리로딩 되면 로그인 상태를 확인하게 하겠다
    checkAuth: async() => {
        try {
            const response = await api.get('/api/auth/check');
            set(state => ({...state, username: response.data.username}));
        } catch (err) {
            console.log(err);
            set(state => ({...state, username: null}))
        }
    },

    // 로그인 성공했을 때 아이디를 set
    setUsername : (param) => set(state => ({...state, username: param})),

    resetUsername: () => set(state => ({...state, username: null}))
}))

export default useAuthStore;