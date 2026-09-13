import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

const TOOL_CALL_INTERVAL = 10;
export const STEERING_MESSAGE =
	"are u overcomplicating? overengineering? lost the scope? not idiomatic n native? not following the codebase conventions? deviate from the task list instructions? please adjust your behavior as appropriate then continue, and finish the work/task as ur were instructed.";

export default function (pi: ExtensionAPI) {
	let toolCalls = 0;

	pi.on("message_start", (event) => {
		if (event.message.role === "user") toolCalls = 0;
	});

	pi.on("tool_execution_end", () => {
		toolCalls++;
		if (toolCalls % TOOL_CALL_INTERVAL !== 0) return;
		pi.sendMessage(
			{ customType: "tool-call-nudge", content: STEERING_MESSAGE, display: false },
			{ deliverAs: "steer" },
		);
	});
}
