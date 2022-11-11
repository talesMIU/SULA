interface FrontEnvironment{
    production: boolean;
    SULA_API: string;
    ambiServ: string;
    courServ: string;
    mainServ: string;
    notiServ: string;
    scheServ: string;
    subjServ: string;
    userServ: string;
  }

export interface Environment extends FrontEnvironment {};

export const commonEnv: Environment = {
    production: false,
    SULA_API: 'https://api-sula.herokuapp.com/',
    ambiServ: 'ambient',
    courServ: 'course',
    mainServ: 'ambientMaintenance',
    notiServ: 'notification',
    scheServ: 'schedule',
    subjServ: 'subject',
    userServ: 'user'
}