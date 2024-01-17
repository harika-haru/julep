/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as JulepApi from "../../api";
import * as core from "../../core";
export declare const Session: core.serialization.ObjectSchema<serializers.Session.Raw, JulepApi.Session>;
export declare namespace Session {
    interface Raw {
        id: string;
        user_id: string;
        agent_id: string;
        situation?: string | null;
        summary?: string | null;
        created_at?: string | null;
        updated_at?: string | null;
    }
}
