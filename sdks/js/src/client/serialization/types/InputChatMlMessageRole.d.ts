/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as JulepApi from "../../api";
import * as core from "../../core";
export declare const InputChatMlMessageRole: core.serialization.Schema<serializers.InputChatMlMessageRole.Raw, JulepApi.InputChatMlMessageRole>;
export declare namespace InputChatMlMessageRole {
    type Raw = "user" | "assistant" | "system" | "function_call";
}
