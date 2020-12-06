interface User {
  name: string;
  id: number;
}

type NoticeType = 'email'|'sms';

class User {
  constructor(user:{name:string,id:number}) {
    this.name = user.name
    this.id = user.id 
  }

  set setName(value:string) {
    this.name = value
  }
}

class UserSettings {
  noticeType: NoticeType;
  #user: User;

  constructor(user:User, noticeType:NoticeType) {
    this.#user = user
    this.noticeType = noticeType
  }

  set setNoticeType(value:NoticeType) {
    this.noticeType = value
  }

  get getNoticeType(){
    return this.noticeType
  }
}


const bob = new User({name:'bob',id: 1})

const bobSettings = new UserSettings(bob, 'email')

bobSettings.setNoticeType = 'email'

console.log(bob)

console.log(bobSettings)
