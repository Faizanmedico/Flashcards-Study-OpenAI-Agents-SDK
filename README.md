# Flashcards-Study-OpenAI-Agents-SDK

Each deck will appear in the selector:

📘 Day 1 – Agents Basics

📗 Day 2 – Agent Tools

📙 Day 3 – Agent Workflows

📕 Day 4 – Error Handling & Output Types

📓 Day 5 – Advanced Concepts

Each deck will contain the exact 10 Q&A pairs you’ve been studying with me.

❓ What does runner.run() do?
✅ Runs the agent in a loop until the task is complete.

❓ Which method is used for a single-step call?
✅ agent.invoke()

❓ What is the purpose of defining tools in the Agents SDK?
✅ To let agents perform actions (e.g., call APIs, fetch data).

❓ Which decorator is used to register tools?
✅ @tool

❓ What is the function of the Runner in the SDK?
✅ It manages the execution loop between goals and tools.

❓ Which Python feature powers async tool execution?
✅ asyncio

❓ Why should we define clear output types for agents?
✅ To structure responses and avoid ambiguity.

❓ What is tool calling in the Agents SDK?
✅ When the agent decides to use a tool to fulfill a request.

❓ How can an agent handle external API data?
✅ By defining a tool that fetches and returns the API data.

❓ What is one way to handle errors in agent workflows?
✅ Use exception handling inside tools.

❓ What is the purpose of the Runner in the Agents SDK?
✅ To execute the agent’s reasoning loop with tools.

❓ Which function is typically used to register tools with the agent?
✅ @tool

❓ What happens if you don’t provide any tools to an agent?
✅ The agent can still reason but cannot perform actions.

❓ Which of the following is TRUE about tools in the Agents SDK?
✅ Tools can be simple Python functions.

❓ What is the role of the memory in an agent?
✅ To store and recall past conversations or facts.

❓ Which of these is an example of a tool call?
✅ {"tool": "search", "input": "weather in Karachi"}

❓ How does the agent know when to stop reasoning in runner.run(goal="...")?
✅ When the goal is achieved or reasoning ends.

❓ What is a “structured tool” in the SDK?
✅ A tool with clearly defined input and output schemas.

❓ What does agent.plan() return?
✅ A single step of reasoning or action proposal.

❓ Why is error handling important in tool-using agents?
✅ Because tools can fail or return unexpected outputs.

❓ What is the main purpose of the Agent class in the SDK?
✅ To manage goals, memory, and tool usage for an AI agent.

❓ In which file is the agent usually defined in a project?
✅ agent.py

❓ What does the goal parameter in runner.run(goal="...") represent?
✅ The high-level task or instruction for the agent.

❓ Which method would you use for running an agent continuously until completion?
✅ runner.run()

❓ What role do docstrings play in tool definitions?
✅ They provide descriptions to guide the LLM in using tools.

❓ Which decorator makes a Python function into a tool?
✅ @tool

❓ Why should tools have well-defined argument types?
✅ To help the model generate correct function call inputs.

❓ What is the function of the Runner class?
✅ To execute the interaction loop between agent and tools.

❓ What should you always check before allowing an agent to execute a tool with external effects?
✅ Tool security and safety risks.

❓ What does agent.invoke(goal="Summarize today’s news") do?
✅ Runs one cycle of reasoning and tool usage.

❓ What is the purpose of the tool decorator in OpenAI Agents SDK?
✅ To register a function as a callable tool.

❓ What is the role of openai.Runner in an agent project?
✅ It manages the execution loop for agent tasks.

❓ Which method is used to manually test how an agent responds to a goal?
✅ agent.invoke(goal)

❓ What does setting verbose=True in the agent config do?
✅ Displays detailed agent-tool interaction logs.

❓ What file is commonly used to define custom tool functions?
✅ tools.py

❓ What is a best practice when designing tools for agents?
✅ Include clear docstrings for every tool.

❓ Which component is responsible for converting tool outputs into agent-friendly messages?
✅ The SDK internally.

❓ Why is it important to define the expected return type of a tool?
✅ To help LLM format responses correctly.

❓ What does an agent need to function besides a goal?
✅ A list of registered tools.

❓ What is a valid use case for OpenAI Agents SDK?
✅ Automating workflows using API tools.

❓ What is the main class used to define an AI agent in the OpenAI Agents SDK?
✅ Agent

❓ What is the purpose of the Runner class?
✅ To control the agent’s execution flow.

❓ How are external functions provided to the agent in the SDK?
✅ As tools.

❓ What must a tool function include to be a valid tool?
✅ Type annotations for input/output.

❓ Which OpenAI model is commonly used in the SDK for reasoning and tool selection?
✅ gpt-4

❓ What happens if the agent needs more information to proceed?
✅ It asks follow-up questions.

❓ In what format should a tool function return its output?
✅ Plain text.

❓ How is tool usage tracked in the SDK workflow?
✅ Through ToolCall and ToolOutput events.

❓ What is a typical agent loop flow in the SDK?
✅ Think → Choose Tool → Execute Tool → Reflect.

❓ How can you test an agent interactively during development?
✅ Using a runner.run() session.

❓ What is the OpenAI Agents SDK used for?
✅ Building AI agents that can use tools and perform actions.

❓ Which method is used to run the agent’s goal-execution loop?
✅ runner.run()

❓ In the Agents SDK, what is the purpose of defining tools?
✅ To allow agents to access and use external capabilities.

❓ What decorator is used to define a tool in the OpenAI Agents SDK?
✅ @tool

❓ What file typically holds the main logic for an agent?
✅ run.py

❓ Which component defines how an agent behaves and responds to inputs?
✅ Agent class.

❓ What is the purpose of the input_type and output_type in an agent?
✅ To validate and structure data sent to and from the agent.

❓ What does the goal parameter define in an agent?
✅ The overall objective or task to accomplish.

❓ What happens if an agent doesn't have any tools defined?
✅ It can still answer with language, but cannot take actions.

❓ In a multi-agent setup, what is the benefit of using handoff()?
✅ It passes the task to another agent.

❓ What does a tool_call in the OpenAI Agents SDK represent?
✅ A request by the agent to use an external tool.

❓ Which file typically contains tool registration and runner execution?
✅ main.py

❓ How do you register multiple tools in an agent?
✅ Use a tools list in the agent.tools parameter.

❓ What does the goal parameter define in Agent(goal=..., tools=[...])?
✅ The task or objective the agent should complete.

❓ What is the purpose of tool.hidden = True in the Agents SDK?
✅ Prevent the tool from being seen by the agent.

❓ Which model types are supported by OpenAI Agents SDK?
✅ GPT models supporting tool use.

❓ How does the agent know when to stop running in runner.run()?
✅ When the goal is completed.

❓ What Python type must a tool function return in the SDK?
✅ ToolOutput.

❓ Which SDK class manages the conversation and goal-solving loop?
✅ Runner.

❓ In the Agents SDK, what happens if no tool matches the agent's tool_call?
✅ The runner raises a ToolNotFoundError.

❓ Which function initializes the agent’s reasoning cycle with a goal?
✅ runner.run(goal=...)

❓ What is the role of ToolCallResult in the SDK?
✅ Captures output of a tool call.

❓ Which of the following is not a valid argument for the @tool decorator?
✅ icon.

❓ What does infer_schema=True do when defining a tool?
✅ Converts function signature to parameter schema automatically.

❓ What is the purpose of AgentContext?
✅ Maintain state across agent steps (tools, memory, history).

❓ If an agent fails to parse a tool output, what might be the issue?
✅ Output is not JSON serializable.

❓ Which type of value should a ToolCallResult return?
✅ Python dictionary or string.

❓ What happens if multiple tools are returned in one reasoning step?
✅ All are executed sequentially.

❓ How can you enable debugging or trace visibility?
✅ set_tracing_enabled(True).

❓ What does AgentFinish usually contain?
✅ Message to show to user (final answer).

❓ What does the OpenAI Agents SDK primarily help developers build?
✅ Agent-based AI applications.

❓ Which part of an agent defines its “personality” and behavior?
✅ Instructions/Prompts.

❓ What does runner.add_agent() do in the SDK?
✅ Registers an agent with the runner.

❓ Why might developers define multiple tools for an agent?
✅ To give the agent different capabilities.

❓ Which format is most common for structured tool input/output?
✅ JSON.

❓ If an agent encounters a failing tool, what should ideally happen?
✅ The agent should handle it gracefully with error handling.

❓ What is one benefit of async execution in agents?
✅ Handling multiple tasks concurrently.

❓ In agent collaboration, how do agents usually communicate?
✅ Through shared memory/state.

❓ Why is defining output types important in the SDK?
✅ It ensures clarity and structured responses.

❓ What is the ultimate goal of using the OpenAI Agents SDK?
✅ To create flexible, tool-using AI agents.

❓ In the OpenAI Agents SDK, what is the role of the Agent class?
✅ To define agent behavior, memory, and tools.

❓ What is the purpose of the Runner in the SDK?
✅ Executes agent interactions and workflows.

❓ Which of the following best describes “tool calling”?
✅ Allowing the agent to call external APIs or functions.

❓ In multi-agent systems, how do agents typically interact?
✅ Through message passing or delegation of tasks.

❓ What does “memory” in the Agents SDK allow an agent to do?
✅ Remember past conversations and context.

❓ Which programming paradigm does the Agents SDK rely heavily on?
✅ Asynchronous (async/await) programming.

❓ Why is error handling important in agent workflows?
✅ To ensure smooth recovery from failed tool/API calls.

❓ What’s a real-world example of using tool calling in an agent?
✅ Checking the weather via an external API.

❓ Which file usually contains reusable helper logic in an SDK project structure?
✅ lib/.

❓ What is one major advantage of multi-agent workflows?
✅ Specialization of agents for different tasks.

❓ What does the Agent class primarily define?
✅ The agent’s reasoning loop and available tools.

❓ Which OpenAI SDK function is commonly used for creating a simple agent prompt interaction?
✅ agent.invoke().

❓ In the Agents SDK, what is the role of the Runner?
✅ To orchestrate the conversation loop and manage tool calls.

❓ What is the benefit of using structured outputs in an agent?
✅ They ensure responses follow a predictable JSON schema.

❓ Which method keeps the agent running continuously until the task is solved?
✅ runner.run().

❓ Why is error handling important in agent workflows?
✅ To avoid crashing when tools fail or give unexpected results.

❓ How can the OpenAI Agents SDK integrate with frontend apps like Chainlit?
✅ By exposing the agent runner as an API endpoint.

❓ What is the security risk if an agent has unrestricted tool access?
✅ It could execute harmful commands or leak sensitive data.

❓ Which type of applications can benefit most from the Agents SDK?
✅ Interactive apps needing reasoning + external tools.

❓ In OpenAI Agents SDK, what is a tool?
✅ Any external function, API, or system action the agent can call.

❓ What does the agent.invoke() method do?
✅ Executes the agent once with given input.

❓ Which file usually holds the agent’s configuration in larger projects?
✅ config.json.

❓ What does a Runner in the SDK primarily manage?
✅ Input/output flow and execution loop.

❓ What is the main advantage of separating tools into a tools.py file?
✅ Cleaner structure and reusability.

❓ In error handling, which is the best approach inside a tool function?
✅ Catch and return user-friendly error messages.

❓ Which parameter often defines the expected response type of an agent?
✅ response_format.

❓ How can agents be connected to front-end apps like Streamlit or Next.js?
✅ Using SDK APIs and HTTP routes.

❓ What is the role of tool calling in the SDK?
✅ Allows agents to dynamically use external functions.

❓ If you want an agent to store and reuse context, which feature is needed?
✅ Memory.

❓ Which concept ensures that the agent does not return unstructured or random output?
✅ Output schemas.

❓ What does the Agent object primarily represent?
✅ The central AI agent with memory, goal, and actions.

❓ Which method executes a single step of the agent loop?
✅ agent.step().

❓ What is the difference between runner.run() and agent.step()?
✅ runner.run() runs the full loop until task completion, while agent.step() runs one iteration.

❓ What are “structured tools” in the Agents SDK?
✅ Tools defined with arguments and types using JSON Schema.

❓ Why is defining tool argument schemas important?
✅ It helps validate inputs and guide the agent’s outputs.

❓ In the SDK, what is the role of Runner?
✅ Executes the loop that connects the agent with tools until the task is done.

❓ How can agents handle external APIs?
✅ Through registered tools that call the APIs.

❓ Which feature lets agents preserve state across conversations?
✅ Agent memory.

❓ What are “output types” in the SDK?
✅ The format in which the agent’s final result is returned.

❓ Why is error handling important in agent workflows?
✅ To prevent crashes when tools fail or unexpected inputs occur.


