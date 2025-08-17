import {PassedInitialConfig} from 'angular-auth-oidc-client';

console.log(window.location.origin)
export const authConfig: PassedInitialConfig = {
  config: {
    authority: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_ulA2pvrb9',
    redirectUrl: window.location.origin,
    clientId: '6misso5js82ttqn9dlqh2b97cn',
    scope: 'phone openid email',
    responseType: 'code',
  }
}
