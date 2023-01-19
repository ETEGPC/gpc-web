interface IMessage {
  id: string,
  room: string,
  author: string,
  message: string,
  createdAt: Date
};

interface INotice {
  id: string,
  title: string,
  description: string
};

interface ISchedules {
  id: string,
  url: string,
  schoolClass: string
};

export { IMessage, INotice, ISchedules };