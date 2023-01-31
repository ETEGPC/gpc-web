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

interface IEvent {
  id: string,
  title: string,
  description: string,
  date: Date
};

interface IImage {
  id: string,
  imageUrl: string
}

interface INews {
  id: string,
  title: string,
  url: string,
  date: Date,
  image: IImage
}

export { IMessage, INotice, ISchedules, IEvent, INews };