import { IEvent } from "./api"

export interface ICalendar {
  onChangeMonth: (month: number, year: string) => void
  events: IEvent[]
}