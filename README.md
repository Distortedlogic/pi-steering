# pi-tool-call-nudge

A Pi extension that counts agent tool calls between user messages.

At tool calls 10, 20, 30, and every later multiple of 10, it queues this hidden steering message:

> are u overcomplicating? overengineering? lost the scope? not idiomatic n native? not following the codebase conventions? deviate from the task list instructions? please adjust your behavior as appropriate then continue, and finish the work/task as ur were instructed.

Each user message resets the count. The reminder uses Pi's native steering queue and does not start a separate turn.

## Install

```sh
pi install git:github.com/Distortedlogic/pi-tool-call-nudge
```
