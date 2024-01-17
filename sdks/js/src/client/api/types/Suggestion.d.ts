/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as JulepApi from "..";
export interface Suggestion {
    /** Suggestion created at (RFC-3339 format) */
    createdAt?: Date;
    /** Whether the suggestion is for the `agent` or a `user` */
    target: JulepApi.SuggestionTarget;
    /** The content of the suggestion */
    content: string;
    /** The message that produced it */
    messageId: string;
    /** Session this suggestion belongs to */
    sessionId: string;
}
