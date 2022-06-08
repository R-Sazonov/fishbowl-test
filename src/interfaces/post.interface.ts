import { MessageTypeEnum } from "../enums/message-type.enum";

export interface Post {
  reactionCounters: { [key: string]: number },
  sign: any,
  likesCount: number,
  messageType: MessageTypeEnum,
  messageData: any,
  text: string,
  date: Date,
  feedName: string,
  feedIcon: string,
}
