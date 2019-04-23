import { Component } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { ApiService } from './api/services';
import { CurrentUserProfile } from './api/models';

/**
 * OAuth Configuration
 */
export const authConfig: AuthConfig = {
  // important set to false
  oidc: false,
  responseType: 'token',
  clientId: 'Put yout client ID HERE',
  redirectUri: window.location.origin,
  loginUrl: 'https://accounts.spotify.com/authorize',
  logoutUrl: ' https://accounts.spotify.com/en/logout ',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
  // see https://developer.spotify.com/documentation/general/guides/scopes/
  scope: 'user-read-private user-read-email user-read-recently-played',
  dummyClientSecret: 'replace with your client secret',
  requireHttps: false,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  profile: CurrentUserProfile;
  isAuthenticated = false;

  constructor(private oauthService: OAuthService, private spot: ApiService) {
    this.oauthService.configure(authConfig);
    this.oauthService.setStorage(sessionStorage);

    // esto es necesario por que carga las variables de sesion con el token retornado
    this.oauthService.tryLogin().then(success => {
      if (success) {
        this.isAuthenticated = true;
        // console.info('TOKEN DE ACCESO', this.oauthService.getAccessToken());
      } else {
        this.isAuthenticated = false;
      }
    }).catch(error => console.error('Error al hacer login ', error));
  }

  login() { this.oauthService.initImplicitFlow(); }
  logout() { this.oauthService.logOut(); }

  /**
   * Busca los datos del usuario logueado en spotify
   */
  getData() {
    this.spot
      .getMe()
      .subscribe(data => {
        this.profile = data;
      });
  }

  get givenName() {
    const claims = this.oauthService.getIdentityClaims();

    if (!claims) {
      return null;
    }
    return claims['name'];
  }
}
