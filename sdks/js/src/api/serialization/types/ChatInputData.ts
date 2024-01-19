/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as JulepApi from "../../api";
import * as core from "../../core";

export const ChatInputData: core.serialization.ObjectSchema<serializers.ChatInputData.Raw, JulepApi.ChatInputData> =
    core.serialization.object({
        messages: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("..")).InputChatMlMessage)
        ),
        tools: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).Tool)).optional(),
        toolChoice: core.serialization.property(
            "tool_choice",
            core.serialization.lazy(async () => (await import("..")).ToolChoiceOption).optional()
        ),
    });

export declare namespace ChatInputData {
    interface Raw {
        messages: serializers.InputChatMlMessage.Raw[];
        tools?: serializers.Tool.Raw[] | null;
        tool_choice?: serializers.ToolChoiceOption.Raw | null;
    }
}