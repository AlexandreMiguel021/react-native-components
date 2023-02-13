export type ToastPosition = 'top' | 'bottom'
export type FeedbackType = 'error' | 'success' | 'warn' | 'info'
export type ToastConfig = {
  time?: number
  position?: ToastPosition
}

export type ToastProps = {
  type: FeedbackType
  message: unknown
  id: string
  firstRender: boolean
  config?: ToastConfig
}

export interface IToastInitialState {
  toast: ToastProps[]
  toastPosition: ToastPosition
}

export const toastInitialState: IToastInitialState = {
  toast: [],
  toastPosition: 'top'
}
