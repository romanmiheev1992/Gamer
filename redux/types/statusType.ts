import { formStatusType } from "../../interfaces/dataInterfase"

export interface StatusType {
    status: any
}

export enum StatusAction {
    GET_STATUS = 'GET_STATUS',
    DELETE_STATUS = 'DELETE_STATUS'
}

export interface GetStatus {
    type: StatusAction.GET_STATUS,
    payload: any
}

export interface DeleteStatus {
    type: StatusAction.DELETE_STATUS,
}

export type StatusActions = GetStatus | DeleteStatus



