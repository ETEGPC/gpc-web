import { IEvent } from "./api"
import { ReactElement, MouseEvent } from 'react';

export interface ICalendar {
  onChangeMonth: (month: number, year: string) => void
  events: IEvent[]
}

export interface IMenuItems {
  icon: ReactElement
  linkText: string
  handleOnclick: (e?: string | MouseEvent ) => void
}

export interface IMenuItemProps {
  items: IMenuItems[]
}