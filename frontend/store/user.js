import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  pageLoaded: false,
  register: false,
  login: false,
  magicLinkSent: false,
  deleteAccountModal: false,
  id: undefined,
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  phone: undefined,
  yearsOfExperience: undefined,
  country: undefined,
  skills: [],
  workHistory: [],
  certifications: [],
  education: [],
  idealJobDescription: undefined,
  matches: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    registerModalVisible(state, action) {
      state.register = true;
    },
    registerModalHidden(state) {
      state.register = false;
    },
    loginModalVisible(state, action) {
      state.login = true;
    },
    loginModalHidden(state) {
      state.login = false;
    },
    magicLinkModalVisible(state, action) {
      state.magicLinkSent = true;
    },
    magicLinkSentModalHidden(state) {
      state.magicLinkSent = false;
    },
    deleteAccountModalVisible(state, action) {
      state.deleteAccountModal = true;
    },
    deleteAccountModalHidden(state) {
      state.deleteAccountModal = false;
    },
    setUserData(state, action) {
      if (action.payload._id) {
        state.id = action.payload._id;
      }
      if (action.payload.firstName) {
        state.firstName = action.payload.firstName;
      }
      if (action.payload.lastName) {
        state.lastName = action.payload.lastName;
      }
      if (action.payload.email) {
        state.email = action.payload.email;
      }
      if (action.payload.phone) {
        state.phone = action.payload.phone;
      }
      if (action.payload.yearsOfExperience) {
        state.yearsOfExperience = action.payload.yearsOfExperience;
      }
      if (action.payload.country) {
        state.country = action.payload.country;
      }
      if (action.payload.skills) {
        state.skills = action.payload.skills;
      }
      if (action.payload.workHistory) {
        state.workHistory = action.payload.workHistory;
      }
      if (action.payload.certifications) {
        state.certifications = action.payload.certifications;
      }
      if (action.payload.education) {
        state.education = action.payload.education;
      }
      if (action.payload.idealJobDescription) {
        state.idealJobDescription = action.payload.idealJobDescription;
      }
      if (action.payload.matches) {
        state.matches = action.payload.matches;
      }
    },
    clearUserData(state) {
      state.id = undefined;
      state.firstName = undefined;
      state.lastName = undefined;
      state.email = undefined;
      state.phone = undefined;
      state.yearsOfExperience = undefined;
      state.country = undefined;
      state.skills = [];
      state.workHistory = [];
      state.certifications = [];
      state.education = [];
      state.idealJobDescription = undefined;
    },
    pageLoaded(state) {
      state.pageLoaded = true;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
