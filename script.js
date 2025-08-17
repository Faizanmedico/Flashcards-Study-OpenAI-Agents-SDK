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
        {"q": "What is the OpenAI Agents SDK used for?", "a": "Building AI agents that can use tools and perform actions"},
        {"q": "Which programming language is most commonly used with the Agents SDK?", "a": "Python"},
        {"q": "What is the purpose of a tool in the Agents SDK?", "a": "To let the agent interact with external systems or perform actions"},
        {"q": "What does an agent typically consist of?", "a": "Goal, memory, tools, and reasoning ability"},
        {"q": "Which function is used to start running an agent?", "a": "runner.run()"},
        {"q": "What is the role of memory in an agent?", "a": "To store past interactions and context"},
        {"q": "What are tools usually defined as in the SDK?", "a": "Functions or APIs the agent can call"},
        {"q": "Which file usually stores API keys for safety?", "a": ".env"},
        {"q": "What is the difference between sync and async execution in Python?", "a": "Async allows non-blocking operations, sync does not"},
        {"q": "Why is error handling important in agents?", "a": "It ensures smooth recovery when tools or actions fail"}
    ],
    "Day 2": [
        {"q": "What does `agent.step()` do?", "a": "Runs a single reasoning-action cycle"},
        {"q": "What does `runner.run()` do?", "a": "Runs the agent until the task is completed"},
        {"q": "What is the benefit of structured tools?", "a": "They validate input and output with defined schemas"},
        {"q": "How are tool arguments usually validated?", "a": "Using JSON Schema"},
        {"q": "What is an output type?", "a": "The format the agent’s final answer should be in"},
        {"q": "Why are clear output types important?", "a": "They ensure reliable and predictable agent responses"},
        {"q": "What does memory allow agents to do?", "a": "Maintain context across multiple steps"},
        {"q": "What is the main purpose of an agent?", "a": "To achieve goals by reasoning and using tools"},
        {"q": "Which SDK object represents the agent itself?", "a": "Agent"},
        {"q": "Which SDK object manages the loop execution?", "a": "Runner"}
    ],
    "Day 3": [
        {"q": "What is tool registration?", "a": "The process of making tools available to an agent"},
        {"q": "Why do we register tools?", "a": "So the agent knows what tools it can use"},
        {"q": "What happens if an agent tries to call an unregistered tool?", "a": "It will fail with an error"},
        {"q": "What is a practical example of a tool?", "a": "A weather API or calculator function"},
        {"q": "What is prompt engineering in Agents SDK?", "a": "Shaping prompts to guide agent reasoning and tool use"},
        {"q": "How does the SDK connect to external APIs?", "a": "Through registered tools"},
        {"q": "What is a risk of letting agents call tools?", "a": "Security issues if tools are not sandboxed"},
        {"q": "What is a safe practice when building tools?", "a": "Validate inputs and restrict dangerous actions"},
        {"q": "What happens if a tool raises an exception?", "a": "The agent must handle it through error handling"},
        {"q": "What is Chainlit often used for?", "a": "Building front-end UIs for agents"}
    ],
    "Day 4": [
        {"q": "What does `asyncio` in Python provide?", "a": "Support for asynchronous programming"},
        {"q": "What does async I/O mean?", "a": "Multiple tasks can run without waiting for each other"},
        {"q": "How does sync execution differ from async?", "a": "Sync blocks tasks, async allows concurrency"},
        {"q": "Why is async useful in agents?", "a": "It helps handle multiple tool calls efficiently"},
        {"q": "Which Python keyword is used for async functions?", "a": "async def"},
        {"q": "Which keyword is used to wait for async results?", "a": "await"},
        {"q": "What happens if you forget to await an async function?", "a": "It returns a coroutine object instead of a result"},
        {"q": "What is an example of async usage in agents?", "a": "Calling multiple APIs at once"},
        {"q": "What is a coroutine?", "a": "A special Python function that can be paused and resumed"},
        {"q": "What is the event loop?", "a": "The core of asyncio that schedules and runs tasks"}
    ],
    "Day 5": [
        {"q": "What does the Agents SDK primarily enable?", "a": "Creating agents that can use tools and reason"},
        {"q": "Which component automates execution until completion?", "a": "Runner"},
        {"q": "Which component handles reasoning and tool usage?", "a": "Agent"},
        {"q": "Why are tools important?", "a": "They let the agent perform external actions"},
        {"q": "Why is memory useful?", "a": "It keeps track of past interactions"},
        {"q": "What is the role of output types?", "a": "To define the format of final results"},
        {"q": "Which part of the SDK runs a single cycle?", "a": "agent.step()"},
        {"q": "Which part of the SDK runs the whole loop?", "a": "runner.run()"},
        {"q": "Why is validation important for tools?", "a": "It ensures correct input/output"},
        {"q": "What does prompt engineering influence?", "a": "The way the agent reasons and uses tools"}
    ],
    "Day 6": [
        {"q": "What does the Agent object primarily represent?", "a": "The central AI agent with memory, goal, and actions"},
        {"q": "Which method executes a single step of the agent loop?", "a": "agent.step()"},
        {"q": "What is the difference between runner.run() and agent.step()?", "a": "runner.run() runs the full loop, agent.step() runs one iteration"},
        {"q": "What are structured tools in the Agents SDK?", "a": "Tools defined with arguments and types using JSON Schema"},
        {"q": "Why is defining tool argument schemas important?", "a": "It validates inputs and guides outputs"},
        {"q": "What is the role of Runner?", "a": "Executes the loop connecting agent and tools until task is done"},
        {"q": "How can agents handle external APIs?", "a": "Through registered tools that call the APIs"},
        {"q": "Which feature lets agents preserve state across conversations?", "a": "Memory"},
        {"q": "What are output types in the SDK?", "a": "The format in which the agent’s final result is returned"},
        {"q": "Why is error handling important in agent workflows?", "a": "To prevent crashes and recover from tool failures"}
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
