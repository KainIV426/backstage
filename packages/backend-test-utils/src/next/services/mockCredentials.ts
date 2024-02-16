/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  BackstageCredentials,
  BackstageNonePrincipal,
  BackstageServicePrincipal,
  BackstageUserPrincipal,
} from '@backstage/backend-plugin-api';

export const DEFAULT_MOCK_USER_ENTITY_REF = 'user:default/mock';
export const DEFAULT_MOCK_SERVICE_SUBJECT = 'external:test-service';

export const MOCK_USER_TOKEN = 'mock-user-token';
export const MOCK_USER_TOKEN_PREFIX = 'mock-user-token:';
export const MOCK_INVALID_USER_TOKEN = 'mock-invalid-user-token';
export const MOCK_SERVICE_TOKEN = 'mock-service-token';
export const MOCK_SERVICE_TOKEN_PREFIX = 'mock-service-token:';
export const MOCK_INVALID_SERVICE_TOKEN = 'mock-invalid-service-token';

function validateUserEntityRef(ref: string) {
  if (!ref.match(/^.+:.+\/.+$/)) {
    throw new TypeError(
      `Invalid user entity reference '${ref}', expected <kind>:<namespace>/<name>`,
    );
  }
}

/**
 * @public
 */
export namespace mockCredentials {
  /**
   * Creates a mocked credentials object for a unauthenticated principal.
   */
  export function none(): BackstageCredentials<BackstageNonePrincipal> {
    return {
      $$type: '@backstage/BackstageCredentials',
      principal: { type: 'none' },
    };
  }

  /**
   * Creates a mocked credentials object for a user principal.
   *
   * The default user entity reference is 'user:default/mock'.
   */
  export function user(
    userEntityRef: string = DEFAULT_MOCK_USER_ENTITY_REF,
  ): BackstageCredentials<BackstageUserPrincipal> {
    validateUserEntityRef(userEntityRef);
    return {
      $$type: '@backstage/BackstageCredentials',
      principal: { type: 'user', userEntityRef },
    };
  }

  /**
   * Utilities related to user credentials.
   */
  export namespace user {
    /**
     * The payload that can be encoded into a mock user token.
     */
    export type TokenPayload = { userEntityRef?: string };

    /**
     * Creates a mocked user token. If a payload is provided it will be encoded
     * into the token and forwarded to the credentials object when authenticated
     * by the mock auth service.
     */
    export function token(userEntityRef?: string): string {
      if (userEntityRef) {
        validateUserEntityRef(userEntityRef);
        return `${MOCK_USER_TOKEN_PREFIX}${JSON.stringify({ userEntityRef })}`;
      }
      return MOCK_USER_TOKEN;
    }

    /**
     * Returns an authorization header with a mocked user token. If a payload is
     * provided it will be encoded into the token and forwarded to the
     * credentials object when authenticated by the mock auth service.
     */
    export function header(userEntityRef?: string): string {
      return `Bearer ${token(userEntityRef)}`;
    }

    export function invalidToken(): string {
      return MOCK_INVALID_USER_TOKEN;
    }

    export function invalidHeader(): string {
      return `Bearer ${invalidToken()}`;
    }
  }

  /**
   * Creates a mocked credentials object for a service principal.
   *
   * The default subject is 'external:test-service'.
   */
  export function service(
    subject: string = DEFAULT_MOCK_SERVICE_SUBJECT,
  ): BackstageCredentials<BackstageServicePrincipal> {
    return {
      $$type: '@backstage/BackstageCredentials',
      principal: { type: 'service', subject },
    };
  }

  /**
   * Utilities related to service credentials.
   */
  export namespace service {
    /**
     * The payload that can be encoded into a mock service token.
     */
    export type TokenPayload = {
      subject?: string;
      targetPluginId?: string;
    };

    /**
     * Creates a mocked service token. If a payload is provided it will be
     * encoded into the token and forwarded to the credentials object when
     * authenticated by the mock auth service.
     */
    export function token(payload?: TokenPayload): string {
      if (payload) {
        const { subject, targetPluginId } = payload; // for fixed ordering
        return `${MOCK_SERVICE_TOKEN_PREFIX}${JSON.stringify({
          subject,
          targetPluginId,
        })}`;
      }
      return MOCK_SERVICE_TOKEN;
    }

    /**
     * Returns an authorization header with a mocked service token.  If a
     * payload is provided it will be encoded into the token and forwarded to
     * the credentials object when authenticated by the mock auth service.
     */
    export function header(payload?: TokenPayload): string {
      return `Bearer ${token(payload)}`;
    }

    export function invalidToken(): string {
      return MOCK_INVALID_SERVICE_TOKEN;
    }

    export function invalidHeader(): string {
      return `Bearer ${invalidToken()}`;
    }
  }
}
