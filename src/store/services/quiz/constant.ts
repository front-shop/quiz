export const moduleName = 'quizes';

export interface IQuestion {
  question: string,
  choices: string[] | []
}

export interface IQuizItem {
  id?: string,
  img?: string,
  title?: string,
  description?: string,
  questions?: IQuestion[] | [],
  answerResult?: string[] | []
}

export enum EStatusType {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Failed = 'failed'
}
