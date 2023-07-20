import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../redux/slices/todo.slice'
import { bindActionCreators } from '@reduxjs/toolkit'

const rootActions = {
  ...actions
}

export const useAction = () => {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
