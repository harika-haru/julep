# This file was auto-generated by Fern from our API Definition.

import enum
import typing

T_Result = typing.TypeVar("T_Result")


class SuggestionTarget(str, enum.Enum):
    """
    Whether the suggestion is for the `agent` or a `user`
    """

    USER = "user"
    AGENT = "agent"

    def visit(self, user: typing.Callable[[], T_Result], agent: typing.Callable[[], T_Result]) -> T_Result:
        if self is SuggestionTarget.USER:
            return user()
        if self is SuggestionTarget.AGENT:
            return agent()
