/* eslint-disable import/prefer-default-export */
import { UPDATE_EMAIL, getAction } from './type.actions';

export const UpdateEmailAction = (data) => getAction(UPDATE_EMAIL, data);
