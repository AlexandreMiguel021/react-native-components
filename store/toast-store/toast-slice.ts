import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toastInitialState, ToastProps } from './toast-initial-state'

export const toastSlice = createSlice({
  name: 'toast',
  initialState: toastInitialState,
  reducers: {
    showToast(state, action: PayloadAction<Omit<ToastProps, 'id' | 'firstRender'>>) {
      const toastExist = state.toast.some(
        (item) => item.message === action.payload.message
      )

      if (toastExist) return

      state.toast.push({
        ...action.payload,
        id: Date.now().toString(),
        firstRender: true
      })

      state.toastPosition = action.payload.config?.position ?? 'top'
    },
    closeToast(state, action: PayloadAction<string>) {
      const items = state.toast.filter((item) => item.id !== action.payload)
      state.toast = items.map((item) => ({
        ...item,
        firstRender: false
      }))
    }
  }
})

export const { showToast, closeToast } = toastSlice.actions
export default toastSlice.reducer
