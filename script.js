const masterPool = [
    // --- DSA (1-25) ---
    { q: "What is the time complexity of building a heap of n elements?", a: ["O(n log n)", "O(n)", "O(log n)", "O(n^2)"], correct: "O(n)" },
    { q: "Which data structure is used for implementing Recursion?", a: ["Queue", "Stack", "Linked List", "Tree"], correct: "Stack" },
    { q: "What is the worst-case time complexity of searching in a Hash Table?", a: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], correct: "O(n)" },
    { q: "Which algorithm is used to find the shortest path in a weighted graph?", a: ["BFS", "Dijkstra's", "DFS", "Kruskal's"], correct: "Dijkstra's" },
    { q: "In a Binary Search Tree, which traversal gives sorted order?", a: ["Pre-order", "Post-order", "In-order", "Level-order"], correct: "In-order" },
    { q: "What is the space complexity of an adjacency matrix for a graph with V vertices?", a: ["O(V)", "O(V^2)", "O(E+V)", "O(E)"], correct: "O(V^2)" },
    { q: "Which data structure is needed to implement LRU Cache efficiently?", a: ["Array", "Stack", "Hash Map + Doubly Linked List", "Queue"], correct: "Hash Map + Doubly Linked List" },
    { q: "What is the time complexity of Binary Search?", a: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], correct: "O(log n)" },
    { q: "Which sorting algorithm is stable and has O(n log n) complexity?", a: ["QuickSort", "MergeSort", "SelectionSort", "HeapSort"], correct: "MergeSort" },
    { q: "A 'Deque' allows insertion/deletion at:", a: ["Front only", "Rear only", "Both Front and Rear", "Middle only"], correct: "Both Front and Rear" },
    { q: "What is the height of a balanced binary tree with n nodes?", a: ["O(n)", "O(log n)", "O(sqrt(n))", "O(n^2)"], correct: "O(log n)" },
    { q: "Which traversal uses a Queue?", a: ["DFS", "BFS", "In-order", "Pre-order"], correct: "BFS" },
    { q: "Kadane’s algorithm is used to find:", a: ["Shortest Path", "Maximum Subarray Sum", "Minimum Spanning Tree", "Topological Sort"], correct: "Maximum Subarray Sum" },
    { q: "What is the best case time complexity of Bubble Sort?", a: ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"], correct: "O(n)" },
    { q: "Which data structure is used in a Compiler to check syntax?", a: ["Queue", "Stack", "Graph", "Hash Table"], correct: "Stack" },
    { q: "Floyd-Warshall algorithm is an example of:", a: ["Greedy", "Dynamic Programming", "Backtracking", "Divide & Conquer"], correct: "Dynamic Programming" },
    { q: "Minimum Spanning Tree can be found using:", a: ["Prim's", "Dijkstra's", "Bellman-Ford", "Floyd-Warshall"], correct: "Prim's" },
    { q: "What is a 'Splay Tree'?", a: ["Heap", "Self-adjusting BST", "AVL Tree", "B-Tree"], correct: "Self-adjusting BST" },
    { q: "In a Max-Heap, where is the largest element?", a: ["Last leaf", "Root", "Left child of root", "Right child of root"], correct: "Root" },
    { q: "Time complexity to insert at the head of a Singly Linked List?", a: ["O(n)", "O(log n)", "O(1)", "O(n^2)"], correct: "O(1)" },
    { q: "Red-Black Tree is a type of:", a: ["Self-balancing BST", "Min-Heap", "Trie", "B-Tree"], correct: "Self-balancing BST" },
    { q: "Which algorithm uses a 'Pivot' element?", a: ["MergeSort", "QuickSort", "BubbleSort", "InsertionSort"], correct: "QuickSort" },
    { q: "What is the load factor of a Hash Table?", a: ["Size/Capacity", "Capacity/Size", "Size+Capacity", "None"], correct: "Size/Capacity" },
    { q: "What is a 'Circular Queue' used for?", a: ["Infinite storage", "Efficient memory reuse", "Sorting", "Searching"], correct: "Efficient memory reuse" },
    { q: "A Tree with no nodes is called:", a: ["Null Tree", "Empty Tree", "Rootless Tree", "Binary Tree"], correct: "Empty Tree" },

    // --- BLOCKCHAIN (26-50) ---
    { q: "What is the first block in a blockchain called?", a: ["Alpha Block", "Genesis Block", "Primary Block", "Root Block"], correct: "Genesis Block" },
    { q: "Which consensus mechanism does Bitcoin currently use?", a: ["Proof of Stake", "Proof of Work", "Proof of Authority", "Proof of History"], correct: "Proof of Work" },
    { q: "What is a Smart Contract?", a: ["Legal Paper", "Self-executing digital code", "A hardware device", "Mining software"], correct: "Self-executing digital code" },
    { q: "What is 'Gas' in Ethereum?", a: ["Real Fuel", "Transaction fee unit", "Storage capacity", "Mining speed"], correct: "Transaction fee unit" },
    { q: "What is a '51% Attack'?", a: ["Hacking a wallet", "Controlling majority mining power", "Spamming the network", "DDOS attack"], correct: "Controlling majority mining power" },
    { q: "Which data structure is used to verify transactions in blocks?", a: ["Binary Tree", "Merkle Tree", "B-Tree", "Linked List"], correct: "Merkle Tree" },
    { q: "What is a 'Double Spend'?", a: ["Spending same coin twice", "Higher transaction fee", "Dual wallet setup", "Mining two blocks"], correct: "Spending same coin twice" },
    { q: "Solidity is a programming language for:", a: ["Bitcoin mining", "Ethereum Smart Contracts", "Hyperledger", "Database management"], correct: "Ethereum Smart Contracts" },
    { q: "What is a 'Cold Wallet'?", a: ["Software on phone", "Offline storage", "Exchanges", "Browser extension"], correct: "Offline storage" },
    { q: "What is 'Mining' in Blockchain?", a: ["Digging gold", "Validating transactions", "Deleting blocks", "Creating new wallets"], correct: "Validating transactions" },
    { q: "What is a 'Hard Fork'?", a: ["Minor update", "Backward incompatible protocol change", "System crash", "Hardware wallet"], correct: "Backward incompatible protocol change" },
    { q: "Which blockchain is known for 'Proof of History'?", a: ["Ethereum", "Bitcoin", "Solana", "Cardano"], correct: "Solana" },
    { q: "What is 'IPFS' used for?", a: ["Transaction speed", "Decentralized storage", "Mining", "Smart contracts"], correct: "Decentralized storage" },
    { q: "The process of hiding transaction details is called:", a: ["Hashing", "Obfuscation", "Zero Knowledge Proof", "Sharding"], correct: "Zero Knowledge Proof" },
    { q: "What is 'DAO'?", a: ["Digital Auto Organism", "Decentralized Autonomous Organization", "Data Access Object", "Direct Alpha Order"], correct: "Decentralized Autonomous Organization" },
    { q: "What is the max supply of Bitcoin?", a: ["10 Million", "100 Million", "21 Million", "Infinite"], correct: "21 Million" },
    { q: "A blockchain that anyone can join is:", a: ["Private", "Permissioned", "Public", "Consortium"], correct: "Public" },
    { q: "What is 'Halving' in Bitcoin?", a: ["Cutting block reward by 50%", "Splitting the chain", "Reducing price", "Increasing speed"], correct: "Cutting block reward by 50%" },
    { q: "What is an 'NFT'?", a: ["New Fast Token", "Non-Fungible Token", "Next Finance Tool", "None"], correct: "Non-Fungible Token" },
    { q: "Which hashing algorithm does Bitcoin use?", a: ["MD5", "SHA-256", "Ethash", "Scrypt"], correct: "SHA-256" },
    { q: "What is 'Stablecoin'?", a: ["High volatile coin", "Pegged to an asset (e.g. USD)", "Coin for mining", "Free coin"], correct: "Pegged to an asset (e.g. USD)" },
    { q: "The ledger in a blockchain is:", a: ["Centralized", "Distributed", "Private only", "Temporary"], correct: "Distributed" },
    { q: "What is 'ERC-20'?", a: ["A Bitcoin upgrade", "Ethereum token standard", "Mining pool", "Wallet name"], correct: "Ethereum token standard" },
    { q: "What is 'Sharding' in blockchain?", a: ["Breaking chain into smaller pieces", "Deleting old data", "Merging two chains", "Mining tool"], correct: "Breaking chain into smaller pieces" },
    { q: "What is 'Hyperledger'?", a: ["Public Blockchain", "Enterprise private blockchain", "Crypto exchange", "A smart contract"], correct: "Enterprise private blockchain" },

    // --- MERN STACK (51-75) ---
    { q: "In MERN, what does 'E' stand for?", a: ["Engine", "Express", "Elastic", "Electron"], correct: "Express" },
    { q: "What is 'JSX' in React?", a: ["JavaScript XML", "JSON Extension", "Java Syntax", "Scripting Engine"], correct: "JavaScript XML" },
    { q: "MongoDB is which type of database?", a: ["Relational", "NoSQL (Document)", "Graph", "Time-series"], correct: "NoSQL (Document)" },
    { q: "What is the default port for Create-React-App?", a: ["5000", "8080", "3000", "4000"], correct: "3000" },
    { q: "Which hook is used for side effects in React?", a: ["useState", "useContext", "useEffect", "useMemo"], correct: "useEffect" },
    { q: "What is 'Redux' used for?", a: ["API fetching", "Global state management", "Styling", "Database routing"], correct: "Global state management" },
    { q: "What is the purpose of 'Mongoose'?", a: ["Frontend framework", "ODM for MongoDB", "Testing tool", "Web server"], correct: "ODM for MongoDB" },
    { q: "Which command is used to install all dependencies from package.json?", a: ["npm start", "npm install", "npm run", "npm init"], correct: "npm install" },
    { q: "What is 'Middleware' in Express?", a: ["Frontend UI", "Database query", "Code that runs between req and res", "A type of server"], correct: "Code that runs between req and res" },
    { q: "Virtual DOM improves performance by:", a: ["Deleting HTML", "Updating only changed parts", "Using C++", "Running offline"], correct: "Updating only changed parts" },
    { q: "What does 'npm' stand for?", a: ["New Package Manager", "Node Package Manager", "Network Protocol Manager", "None"], correct: "Node Package Manager" },
    { q: "Node.js is built on which engine?", a: ["SpiderMonkey", "V8", "Chakra", "Gecko"], correct: "V8" },
    { q: "How do you pass data from parent to child in React?", a: ["State", "Props", "Context", "Hooks"], correct: "Props" },
    { q: "What is 'CORS'?", a: ["Security Protocol", "Cross-Origin Resource Sharing", "Database query", "Router type"], correct: "Cross-Origin Resource Sharing" },
    { q: "Which method is used to send data to server in Express?", a: ["GET", "POST", "FETCH", "PUSH"], correct: "POST" },
    { q: "What is 'Helmet' in Express used for?", a: ["Performance", "Security headers", "Routing", "Logging"], correct: "Security headers" },
    { q: "Purpose of 'body-parser'?", a: ["Styling", "Parse incoming request bodies", "Database backup", "Image upload"], correct: "Parse incoming request bodies" },
    { q: "React 'Keys' are important for:", a: ["Styling", "Helping React identify list changes", "Defining IDs", "Security"], correct: "Helping React identify list changes" },
    { q: "Node.js is single-threaded or multi-threaded?", a: ["Single-threaded", "Multi-threaded", "Neither", "Depends on OS"], correct: "Single-threaded" },
    { q: "What is 'Nodemon'?", a: ["Database tool", "Tool to restart server automatically", "Frontend framework", "Testing library"], correct: "Tool to restart server automatically" },
    { q: "Purpose of 'useContext' hook?", a: ["Handling events", "Avoid prop drilling", "API calls", "Local state"], correct: "Avoid prop drilling" },
    { q: "How to handle errors in async/await?", a: ["if/else", "try/catch", "switch", "while loop"], correct: "try/catch" },
    { q: "What is 'Prop Drilling'?", a: ["Deep nesting of props", "A performance hook", "A CSS trick", "Database link"], correct: "Deep nesting of props" },
    { q: "Which HTTP status means 'Not Found'?", a: ["200", "500", "404", "403"], correct: "404" },
    { q: "The 'package-lock.json' file is for:", a: ["Editing code", "Locking exact versions of dependencies", "Storing passwords", "License"], correct: "Locking exact versions of dependencies" },

    // --- SYSTEM DESIGN (76-100) ---
    { q: "What is 'Vertical Scaling'?", a: ["Adding more machines", "Adding more power to existing machine", "Splitting DB", "Caching"], correct: "Adding more power to existing machine" },
    { q: "What is 'Horizontal Scaling'?", a: ["Adding more machines", "Upgrading RAM", "Deleting data", "Using better CPU"], correct: "Adding more machines" },
    { q: "What does 'Load Balancer' do?", a: ["Store files", "Distribute traffic across servers", "Compile code", "Encrypt data"], correct: "Distribute traffic across servers" },
    { q: "What is 'CDN'?", a: ["Code Delivery Network", "Content Delivery Network", "Central Data Node", "None"], correct: "Content Delivery Network" },
    { q: "What is 'Caching'?", a: ["Deleting data", "Storing data in fast temporary memory", "Permanent backup", "Sorting data"], correct: "Storing data in fast temporary memory" },
    { q: "What is 'Microservices' architecture?", a: ["One large app", "App split into small independent services", "Using small computers", "Database type"], correct: "App split into small independent services" },
    { q: "CAP theorem stands for Consistency, Availability and:", a: ["Performance", "Partition Tolerance", "Precision", "Privacy"], correct: "Partition Tolerance" },
    { q: "What is a 'Reverse Proxy'?", a: ["Server for clients", "Server for internal network privacy/security", "Database link", "Internet provider"], correct: "Server for internal network privacy/security" },
    { q: "What is 'Database Replication'?", a: ["Deleting data", "Copying data across multiple servers", "Indexing", "Scaling vertically"], correct: "Copying data across multiple servers" },
    { q: "Purpose of 'Redis'?", a: ["Primary database", "In-memory cache", "Frontend library", "Operating system"], correct: "In-memory cache" },
    { q: "What is 'Latency'?", a: ["Speed of data", "Time delay in processing request", "Storage size", "Number of users"], correct: "Time delay in processing request" },
    { q: "What is 'Throughput'?", a: ["Network speed", "Number of requests processed per second", "Error rate", "RAM size"], correct: "Number of requests processed per second" },
    { q: "What is 'SQL Sharding'?", a: ["Vertical scaling", "Horizontal partitioning of database", "Backup", "Encryption"], correct: "Horizontal partitioning of database" },
    { q: "What is 'Message Queue' (e.g. RabbitMQ)?", a: ["Sorting messages", "Asynchronous communication between services", "Storing logs", "Email server"], correct: "Asynchronous communication between services" },
    { q: "What is 'Rate Limiting'?", a: ["Reducing speed", "Limiting number of requests from a user", "Pricing model", "Memory limit"], correct: "Limiting number of requests from a user" },
    { q: "What is 'Idempotency' in APIs?", a: ["Fast execution", "Multiple same requests result in same state", "Random output", "Secure connection"], correct: "Multiple same requests result in same state" },
    { q: "What is 'Heartbeat' in distributed systems?", a: ["User pulse", "Signal to check if a node is alive", "Data speed", "System clock"], correct: "Signal to check if a node is alive" },
    { q: "Purpose of 'ZooKeeper'?", a: ["Managing animals", "Distributed configuration and coordination", "Image storage", "Styling"], correct: "Distributed configuration and coordination" },
    { q: "What is 'Blue-Green Deployment'?", a: ["Using two identical environments", "Designing colors", "Slow updates", "Manual testing"], correct: "Using two identical environments" },
    { q: "What is 'DNS'?", a: ["Data Node System", "Domain Name System", "Digital Network Server", "None"], correct: "Domain Name System" },
    { q: "What is 'Sticky Sessions'?", a: ["Permanent login", "Routing a user to same server consistently", "Cached data", "Error logs"], correct: "Routing a user to same server consistently" },
    { q: "What is 'Circuit Breaker' pattern?", a: ["Stop power", "Preventing cascading failures by stopping calls to failing service", "Faster API", "Security"], correct: "Preventing cascading failures by stopping calls to failing service" },
    { q: "What is 'Elasticity'?", a: ["Fixed size", "System's ability to grow/shrink based on demand", "Stretching code", "High RAM"], correct: "System's ability to grow/shrink based on demand" },
    { q: "What is 'NoSQL' primarily used for?", a: ["Fixed schema", "Unstructured and big data scaling", "Small apps", "Legacy systems"], correct: "Unstructured and big data scaling" },
    { q: "What is 'Consistency' in CAP?", a: ["Data is always available", "Every read receives most recent write", "System never fails", "Fast response"], correct: "Every read receives most recent write" }
];

let usedQuestionIndices = new Set();
let candidates = [];
let currentCandIdx = 0;
let currentQIdx = 0;
let score = 0;
let timer;
let timeLeft = 10;
let playerQuestions = [];
let selectedOption = null;

const forms = document.querySelectorAll(".quiz-form");
forms.forEach((form, idx) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const user = Object.fromEntries(data.entries());
        user.score = 0;
        user.id = idx;
        candidates.push(user);

        const elements = form.querySelectorAll('input, select, button');
        elements.forEach(el => el.disabled = true);
        
        const btn = form.querySelector('.submit-btn');
        btn.textContent = "Registered ✔";
        btn.style.background = "#27ae60";

        if (candidates.length === 4) {
            setTimeout(showReview, 1000);
        }
    });
});

function showReview() {
    document.getElementById("registration-screen").style.display = "none";
    document.getElementById("review-screen").style.display = "block";
    
    const container = document.getElementById("review-container");
    container.innerHTML = candidates.map((c, i) => `
        <div class="review-card" style="padding:15px; border:2px solid #e2e8f0; border-radius:10px;">
            <h3 style="color:#2b6cb0;">Candidate ${i+1}</h3>
            <p><strong>${c.UserName}</strong></p>
            <p>${c.UserAge} | ${c.UserGender}</p>
        </div>
    `).join("");

    document.getElementById("start-quiz-btn").onclick = startQuizEngine;
}

function startQuizEngine() {
    document.getElementById("review-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "flex";
    initPlayerSession();
}

function initPlayerSession() {
    playerQuestions = [];
    
    let availableIndices = [];
    for (let i = 0; i < masterPool.length; i++) {
        if (!usedQuestionIndices.has(i)) {
            availableIndices.push(i);
        }
    }

    for (let i = availableIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [availableIndices[i], availableIndices[j]] = [availableIndices[j], availableIndices[i]];
    }

    let selectedIndices = availableIndices.slice(0, 10);

    selectedIndices.forEach(idx => {
        playerQuestions.push(masterPool[idx]);
        usedQuestionIndices.add(idx);
    });

    currentQIdx = 0;
    score = 0;
    document.getElementById("current-player-name").textContent = `Player: ${candidates[currentCandIdx].UserName}`;
    renderCircles();
    loadQuestion();
}

function loadQuestion() {
    clearInterval(timer);
    selectedOption = null;
    if(currentQIdx >= 10) { finishCandidate(); return; }

    const qData = playerQuestions[currentQIdx];
    document.getElementById("q-text").textContent = `Q${currentQIdx + 1}: ${qData.q}`;
    
    const optBox = document.getElementById("options-container");
    optBox.innerHTML = "";
    
    qData.a.forEach(opt => {
        const b = document.createElement("button");
        b.className = "option-btn";
        b.textContent = opt;
        b.onclick = () => {
            document.querySelectorAll('.option-btn').forEach(btn => {
                btn.style.borderColor = "#edf2f7";
                btn.classList.remove('selected');
            });
            b.style.borderColor = "#3182ce";
            b.classList.add('selected');
            selectedOption = opt;
        };
        optBox.appendChild(b);
    });

    timeLeft = 10;
    startTimer();
    updateCircleUI('active');
}

function startTimer() {
    const bar = document.getElementById("timer-progress");
    timer = setInterval(() => {
        timeLeft -= 0.1;
        bar.style.width = (timeLeft * 10) + "%";
        if (timeLeft <= 0) {
            processAnswer(false, 'black');
        }
    }, 100);
}

document.getElementById("submit-ans-btn").onclick = () => {
    if(!selectedOption) { alert("Please select an option first!"); return; }
    const isCorrect = selectedOption === playerQuestions[currentQIdx].correct;
    processAnswer(isCorrect);
};

document.getElementById("skip-btn").onclick = () => {
    processAnswer(false, 'black');
};

document.getElementById("back-btn").onclick = () => {
    if(currentQIdx > 0) {
        currentQIdx--;
        loadQuestion();
    }
};

function processAnswer(correct, forceStatus = null) {
    clearInterval(timer);
    if (correct) score += 10;
    
    let status = forceStatus || (correct ? 'green' : 'red');
    updateCircleUI(status);
    
    currentQIdx++;
    setTimeout(loadQuestion, 400);
}

function finishCandidate() {
    candidates[currentCandIdx].score = score;
    currentCandIdx++;
    if (currentCandIdx < 4) {
        alert("Next candidate, please!");
        initPlayerSession();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
    
    const ranked = [...candidates].sort((a, b) => b.score - a.score);
    const winner = ranked[0];

    document.getElementById("winner-card").innerHTML = `
        <div style="padding:25px; margin-bottom:30px; border-radius:15px; background:#fff; text-align:center; border: 3px solid #f6ad55; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
            <h2 style="margin:0; color:#2d3748;">🎉 Top Performer 🎉</h2>
            <h1 style="font-size: 40px; margin: 10px 0; color: #2b6cb0;">${winner.UserName}</h1>
            <p style="font-size:20px; margin:0; color:#48bb78; font-weight:bold;">Total Score: ${winner.score}</p>
        </div>
    `;

    document.getElementById("score-graph").innerHTML = ranked.map(c => `
        <div style="margin-bottom: 25px;"> 
            <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-weight:bold; color:#4a5568;">
                <span>${c.UserName}</span>
                <span>${c.score} Pts</span>
            </div>
            <div style="width:100%; background:#edf2f7; height:22px; border-radius:11px; overflow:hidden; border:1px solid #e2e8f0;">
                <div style="width:${c.score}%; background: linear-gradient(90deg, #4299e1, #3182ce); height:100%; border-radius:11px; transition: width 1.5s ease-in-out;"></div>
            </div>
        </div>
    `).join("");
}

function renderCircles() {
    const con = document.getElementById("circles-container");
    con.innerHTML = "";
    for(let i=1; i<=10; i++) {
        const div = document.createElement("div");
        div.className = "circle";
        div.textContent = i;
        con.appendChild(div);
    }
}

function updateCircleUI(status) {
    const circles = document.querySelectorAll(".circle");
    if(circles[currentQIdx]) {
        if(status === 'active') {
            circles[currentQIdx].style.border = "3px solid #3182ce";
            circles[currentQIdx].style.transform = "scale(1.1)";
        } else {
            circles[currentQIdx].className = `circle ${status}`;
            circles[currentQIdx].style.border = "none";
            circles[currentQIdx].style.transform = "scale(1)";
        }
    }
}