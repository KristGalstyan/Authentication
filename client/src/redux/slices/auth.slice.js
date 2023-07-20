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

export const fetchRegistr = createAsyncThunk(
  'fetchRegistr/auth',
  async (params) => {
    return $api.post('/registration', params)
  }
)

export const fetchLogout = createAsyncThunk(
  'fetch/authLogout',
  async (params) => {
    return $api.post('/logout', params)
  }
)

export const checkAuth = createAsyncThunk('fetch/checkAuth', async () => {
  return $api.get('/refresh', { withCredentials: true })
})
export const fetchSocial = createAsyncThunk(
  'fetch/socialAuthLogin',
  async (param) => {
    return $api.post('/auth/fb', {
      id: param.id,
      name: param.name,
      avatar: param.avatar
    })
  }
)

const authSlice = createSlice({
  name: 'Sign',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.loading = false
        localStorage.setItem('token', action.payload.data.accessToken)
        state.data = action.payload.data.user
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(fetchRegistr.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchRegistr.fulfilled, (state, action) => {
        state.loading = false
        localStorage.setItem('token', action.payload.data.accessToken)
        state.data = action.payload.data.user
      })
      .addCase(fetchRegistr.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(checkAuth.pending, (state) => {
        state.loading = true
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.loading = false
        localStorage.setItem('token', action.payload.data.accessToken)
        state.data = action.payload.data.user
      })

      .addCase(checkAuth.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(fetchSocial.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchSocial.fulfilled, (state, action) => {
        state.loading = false
        localStorage.setItem('token', action.payload.data.accessToken)
        state.data = action.payload.data
      })
      .addCase(fetchSocial.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(fetchLogout.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchLogout.fulfilled, (state) => {
        state.loading = false
        localStorage.removeItem('token')
        state.data = false
      })
      .addCase(fetchLogout.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export const { reducer } = authSlice
