import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { $api } from '../../axios'

const initialState = {
  data: null,
  load: true,
  error: null
}

export const fetchLogin = createAsyncThunk(
  'fetchLogin/auth',
  async (params) => {
    return $api.post('/login', params)
  }
)
