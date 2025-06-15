import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE_URL = "http://localhost:5173";

const ENDPOINTS = {
  courses: `${API_BASE_URL}/courses.json`,
};

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(ENDPOINTS.courses);
      if (!response.ok) throw new Error("Failed to fetch courses");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  courses: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    selectCourse: (state, action) => {
      const course = state.courses.find(course => course.id === action.payload);
      if (course) {
        course.isSelected = true;
      }
    },
    unSelectCourse: (state, action) => {
      const course = state.courses.find(course => course.id === action.payload);
      if (course) {
        course.isSelected = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.courses = action.payload;
      })
      .addCase("auth/logout", () => initialState); // Reset state on logout
  },
});

export const { selectCourse, unSelectCourse } = coursesSlice.actions;
export default coursesSlice.reducer;