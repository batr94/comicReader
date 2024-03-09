import { createListenerMiddleware } from '@reduxjs/toolkit';
import { RootState, AppDispatch } from '../index';

const listenerMiddleware = createListenerMiddleware();
export const startListening = listenerMiddleware.startListening.withTypes<
  RootState,
  AppDispatch
>();

export default listenerMiddleware;

