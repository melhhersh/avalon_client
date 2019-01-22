// import React from 'react';
// import thunkMiddleware from 'redux-thunk';
// import axios from 'axios';
// import {applyMiddleware} from 'redux';

// const ALL_STATE = 'ALL_STATE';
// const CREATE_ROOM = 'CREATE_ROOM';
// const JOIN_ROOM = 'JOIN_ROOM';
// const ALL_PLAYERS = 'ALL_PLAYERS';
// const UPDATE_STATE = 'UPDATE_STATE';
// const SEND_VOTE = 'SEND_VOTE'

// const initialState = {state: {}, players: {}, roomName: ''}

// export const gotAllState = (state) => {
//   return {
//     type: ALL_STATE,
//     state
//   }
// }

// export const updateState = (state) => {
//     return {
//       type: UPDATE_STATE,
//       state
//     }
//   }

// export const gotAllPlayers= (players) => {
//     return {
//       type: ALL_PLAYERS,
//       players
//     }
//   }

// export const createRoom = (roomName) => {
//   return {
//     type: CREATE_ROOM,
//     roomName
//   }
// }

// export const createdRoom = (players, roomName, name) => {
//   return async (dispatch) => {
//     const { data } = await axios({
//         method: 'post',
//         url:'http://192.168.0.111:5000/api/create',
//         data:{
//             numPlayers: players,
//             roomName,
//             name
//       }
//     })
//     dispatch(createRoom(roomName))
//   }
// }

// export const joinRoom = (room) => {
//     return {
//       type: JOIN_ROOM,
//       roomName: room.roomName
//     }
//   }
  
//   export const joinedRoom = (roomName, name) => {
//     return async (dispatch) => {
//         const { data } = await axios({
//             method: 'post',
//             url:'http://192.168.0.111:5000/api/join',
//             data:{
//               roomName,
//               name,
//             }
//           })
//     }
//   }

//   export const sendVote = (vote) =>{
//       return{
//           type: SEND_VOTE,
//           vote
//       }
//   }

//   export const sentVote = (vote, name, id) =>{
//       return async (dispatch) => {
//           const { data } =  await axios({
//             method: 'post',
//             url:'http://192.168.0.111:5000/api/vote',
//             data:{
//               id,
//               vote,
//               name
//             }
//           })
//       }
//   }

// const Reducer = (state = initialState, action) => {
//   switch (action.type){
//     case ALL_STATE:
//       return {
//         state: action.state
//       }
//     case CREATE_ROOM:
//       return {
//         ...state, roomName: action.roomName
//       }
//     case ALL_PLAYERS:
//       return {
//         ...state, players: action.players
//       }
//     case UPDATE_STATE:
//       return {
//         ...state, state: action.state
//       }
//     default:
//     return state
//   }
// }

// export default Reducer
