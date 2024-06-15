
import express from 'express'
import session from 'express-session'

// @types\express-serve-static-core\index.d.ts
declare global {
    declare namespace Express {
        // These open interfaces may be extended in an application-specific manner via declaration merging.
        // See for example method-override.d.ts (https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/method-override/index.d.ts)
        interface Request {
            user?: { name: string }
        }
        interface Request {
            placki?: { name: string }
        }
        // interface Response {}
        // interface Locals {}
        // interface Application {}
    }
}

// @types\express-session\index.d.ts
declare module 'express-session' {
    interface SessionData {
        views: number;

        /**
         * Lubie placki!
         */
        placki: number
    }
}