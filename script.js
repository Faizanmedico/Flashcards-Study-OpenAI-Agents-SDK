const deckSelector = document.getElementById('deckSelector');
const flashcard = document.getElementById('flashcard');
const front = document.getElementById('front');
const back = document.getElementById('back');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const flipBtn = document.getElementById('flipBtn');

let currentDeck = [];
let currentIndex = 0;

const decks = {



    "Day 1": [
        {"q": "What is the OpenAI Agents SDK used for?", "a": "Building AI agents that can use tools and perform actions."},
        {"q": "Which method runs the agent in a loop until the task is done?", "a": "`runner.run()`"},
        {"q": "What does an agent primarily interact with?", "a": "Tools"},
        {"q": "What is the main role of a Runner?", "a": "To execute the agent’s reasoning loop until the task completes."},
        {"q": "What language is the Agents SDK written in?", "a": "Python"},
        {"q": "Which import brings in the Agent class?", "a": "`from openai import Agent`"},
        {"q": "What does the Agent class represent?", "a": "An AI entity that can reason, plan, and use tools."},
        {"q": "Which function is used to define custom tools?", "a": "Python functions decorated with `@tool`."},
        {"q": "What is a tool in the Agents SDK?", "a": "A callable function that the agent can use to perform an action."},
        {"q": "Can Agents SDK connect to external APIs?", "a": "Yes, through tools that wrap API calls."}
    ],
    "Day 2": [
        {"q": "What decorator is commonly used to define tools?", "a": "`@tool`"},
        {"q": "What is the purpose of structured tools?", "a": "They define input/output schemas for tool calls."},
        {"q": "Which argument passes tools to an Agent?", "a": "`tools=[...]`"},
        {"q": "Can tools have multiple arguments?", "a": "Yes, when defined with structured input."},
        {"q": "What is the main benefit of structured tools?", "a": "They ensure clarity in inputs/outputs."},
        {"q": "How does an agent decide which tool to call?", "a": "Through reasoning with the model."},
        {"q": "What is returned after a tool call?", "a": "The tool’s output/result."},
        {"q": "How can you log tool calls?", "a": "By enabling debugging or custom logging."},
        {"q": "Can a tool call another tool?", "a": "Yes, indirectly via the agent loop."},
        {"q": "What happens if a tool raises an error?", "a": "The agent can handle it gracefully or retry."}
    ],
    "Day 3": [
        {"q": "What is an agent’s core reasoning cycle?", "a": "Decide → Plan → Act → Observe → Repeat."},
        {"q": "Which function executes one reasoning step?", "a": "`agent.step()`"},
        {"q": "What happens if the task is incomplete after a step?", "a": "The agent takes another step."},
        {"q": "What is the advantage of using `runner.run()`?", "a": "Automates multiple steps until completion."},
        {"q": "What does agent memory store?", "a": "Conversation history, tool results, context."},
        {"q": "Is persistence supported in memory?", "a": "Yes, via custom memory backends."},
        {"q": "What is the difference between `agent.step()` and `runner.run()`?", "a": "`step()` is one iteration; `run()` continues until finished."},
        {"q": "How can you integrate Agents with a front-end?", "a": "Via APIs or frameworks like Chainlit/Streamlit."},
        {"q": "Can the SDK run multiple agents?", "a": "Yes, multi-agent orchestration is possible."},
        {"q": "What is a common use-case for Agents?", "a": "Automation, API orchestration, assistants."}
    ],
    "Day 4": [
        {"q": "Why are clear output types important?", "a": "To ensure predictable and structured responses."},
        {"q": "What format are outputs usually defined in?", "a": "JSON schema."},
        {"q": "What is the benefit of explicit schemas?", "a": "Prevents ambiguous responses."},
        {"q": "What happens if a tool output doesn’t match schema?", "a": "The SDK may raise a validation error."},
        {"q": "Why handle exceptions in agent workflows?", "a": "To avoid crashes and improve reliability."},
        {"q": "What mechanism allows retrying failed tool calls?", "a": "Custom error handling or retry logic."},
        {"q": "Can you customize error handling?", "a": "Yes, via exception blocks and custom logic."},
        {"q": "Why is logging important?", "a": "Helps debug agent reasoning and tool calls."},
        {"q": "How to avoid infinite loops?", "a": "Set step/iteration limits in Runner."},
        {"q": "Why should security be considered?", "a": "Agents may access external APIs or execute code."}
    ],
    "Day 5": [
        {"q": "What is tool chaining?", "a": "Using outputs of one tool as inputs to another."},
        {"q": "What is delegation in multi-agent systems?", "a": "One agent handing off a task to another."},
        {"q": "What’s a key challenge in multi-agent workflows?", "a": "Coordination and communication."},
        {"q": "What does persistence enable?", "a": "Saving agent state across sessions."},
        {"q": "Which feature enables long-term memory?", "a": "Custom memory backends (e.g., databases)."},
        {"q": "What’s the difference between short-term and long-term memory?", "a": "Short-term is per run; long-term is persistent."},
        {"q": "What is the benefit of modular tool design?", "a": "Reusability across different agents."},
        {"q": "What’s a potential risk of powerful tools?", "a": "Unintended side effects or misuse."},
        {"q": "What is grounding?", "a": "Ensuring agent actions align with real-world context."},
        {"q": "What’s the role of human-in-the-loop?", "a": "Humans review or approve agent actions."}
    ]






};

// Populate deck selector
for (let deck in decks) {
  let option = document.createElement('option');
  option.value = deck;
  option.textContent = deck;
  deckSelector.appendChild(option);
}

// Load first deck by default
loadDeck("Day 1");

deckSelector.addEventListener('change', (e) => {
  loadDeck(e.target.value);
});

function loadDeck(deckName) {
  currentDeck = decks[deckName];
  currentIndex = 0;
  renderCard();
}

function renderCard() {
  const card = currentDeck[currentIndex];
  front.textContent = card.q;
  back.textContent = card.a;
  flashcard.classList.remove('flipped');
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentDeck.length;
  renderCard();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + currentDeck.length) % currentDeck.length;
  renderCard();
});

flipBtn.addEventListener('click', () => {
  flashcard.classList.toggle('flipped');
});
