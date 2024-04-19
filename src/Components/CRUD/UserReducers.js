import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../CRUD/Data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      // console.log(action)
    },
    updateUser(state, action) {
      const { id, name, email } = action.payload;
      console.log("updateuser id,name,email", id, name, email);
      const userToUpdate=state.find(user=>user.id==id)
      if(userToUpdate){
        userToUpdate.name=name;
        userToUpdate.email=email;
      }
    },
    deleteUser(state, action) {
      const {id}=action.payload;
      const deleteUser=state.find(user=>user.id==id)
      if(deleteUser){
        return state.filter(row=>row.id!=id)
      }
    },
  },
});

export const { addUser, updateUser,deleteUser } = userSlice.actions;
export default userSlice.reducer;
