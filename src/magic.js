import { Magic } from 'magic-sdk';
import { NearExtension } from "@magic-ext/near";
import { OAuthExtension } from '@magic-ext/oauth';

export const magic = new Magic("pk_live_EEB603C17EFB2AFC", {
  extensions: [
      new NearExtension({ 
        rpcUrl: '' 
      }),
      new OAuthExtension()
  ]}
);