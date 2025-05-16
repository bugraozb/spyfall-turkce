document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const playerCountInput = document.getElementById("player-count");
  const playerInputsContainer = document.getElementById("player-inputs");
  const startGameBtn = document.getElementById("start-game");
  const gameScreen = document.getElementById("game-screen");
  const setupScreen = document.getElementById("setup-screen");
  const playersContainer = document.getElementById("players-container");
  const newGameBtn = document.getElementById("new-game");
  const startVotingBtn = document.getElementById("start-voting");
  const votingScreen = document.getElementById("voting-screen");
  const votingOptions = document.getElementById("voting-options");
  const submitVoteBtn = document.getElementById("submit-vote");
  const resultsScreen = document.getElementById("results-screen");
  const resultsContent = document.getElementById("results-content");
  const playAgainBtn = document.getElementById("play-again");
  const roleModal = document.getElementById("role-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  const closeModal = document.querySelector(".close-modal");
  const timerDisplay = document.getElementById("timer-display");
  const timerSelect = document.getElementById("timer");

  // Game State
  let gameState = {
    players: [],
    spy: null,
    location: null,
    viewedRoles: [],
    votes: {},
    timer: null,
    timeLeft: 0,
  };

  // Event Listeners
  playerCountInput.addEventListener("input", generatePlayerInputs);
  startGameBtn.addEventListener("click", startGame);
  newGameBtn.addEventListener("click", resetGame);
  startVotingBtn.addEventListener("click", startVoting);
  submitVoteBtn.addEventListener("click", submitVotes);
  playAgainBtn.addEventListener("click", resetGame);
  closeModal.addEventListener("click", () => roleModal.classList.add("hidden"));

  // Generate player name inputs based on player count
  function generatePlayerInputs() {
    const count = parseInt(playerCountInput.value);
    playerInputsContainer.innerHTML = "";

    for (let i = 0; i < count; i++) {
      const div = document.createElement("div");
      div.className = "player-input";
      div.innerHTML = `
              <label for="player-${i}">Oyuncu ${i + 1} İsmi:</label>
              <input type="text" id="player-${i}" required>
          `;
      playerInputsContainer.appendChild(div);
    }
  }

  // Start the game
  function startGame() {
    // Get player names
    const playerCount = parseInt(playerCountInput.value);
    gameState.players = [];

    for (let i = 0; i < playerCount; i++) {
      const name = document.getElementById(`player-${i}`).value.trim();
      if (!name) {
        alert(`Lütfen Oyuncu ${i + 1} için bir isim girin.`);
        return;
      }
      gameState.players.push({ id: i, name });
    }

    // Select spy
    const spyIndex = Math.floor(Math.random() * gameState.players.length);
    gameState.spy = gameState.players[spyIndex].id;

    // Select location
    const randomLocationIndex = Math.floor(Math.random() * locations.length);
    gameState.location = locations[randomLocationIndex];

    // Assign roles to non-spy players
    gameState.players.forEach((player) => {
      if (player.id !== gameState.spy) {
        const roles = gameState.location.roles;
        player.role = roles[Math.floor(Math.random() * roles.length)];
      }
    });

    // Reset viewed roles
    gameState.viewedRoles = [];
    gameState.votes = {};

    // Setup timer
    const minutes = parseInt(timerSelect.value);
    gameState.timeLeft = minutes * 60;
    updateTimerDisplay();

    if (gameState.timer) {
      clearInterval(gameState.timer);
    }

    gameState.timer = setInterval(() => {
      gameState.timeLeft--;
      updateTimerDisplay();

      if (gameState.timeLeft <= 0) {
        clearInterval(gameState.timer);
        startVoting();
      }
    }, 1000);

    // Switch to game screen
    setupScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    renderPlayerCards();
  }

  // Render player cards
  function renderPlayerCards() {
    playersContainer.innerHTML = "";
    gameState.players.forEach((player) => {
      const card = document.createElement("div");
      card.className = `player-card ${
        gameState.viewedRoles.includes(player.id) ? "viewed" : ""
      }`;
      card.textContent = player.name;
      card.dataset.playerId = player.id;

      card.addEventListener("click", () => {
        if (!gameState.viewedRoles.includes(player.id)) {
          showPlayerRole(player.id);
        } else {
          alert("Bu oyuncu zaten rolünü gördü!");
        }
      });

      playersContainer.appendChild(card);
    });
  }

  // Show player role in modal
  function showPlayerRole(playerId) {
    const player = gameState.players.find((p) => p.id === playerId);

    if (player.id === gameState.spy) {
      modalTitle.textContent = "Rolün: Casus";
      modalBody.innerHTML = `
          <p>Sen casussun!</p>
          <p>Diğer oyuncuların <strong>bilinmeyen bir yerde</strong> olduğunu bilmiyorlar.</p>
          <p>Onlara yakalanmadan konumlarını tahmin etmeye çalış!</p>
      `;
    } else {
      modalTitle.textContent = "Rolün";
      modalBody.innerHTML = `
          <p><strong>Konum:</strong> ${gameState.location.name}</p>
          <p><strong>Rolün:</strong> ${player.role}</p>
          <p>Casusu bulmaya çalış! Ama dikkatli ol, casus seni kandırmaya çalışacak.</p>
      `;
    }

    // Mark role as viewed
    gameState.viewedRoles.push(playerId);
    roleModal.classList.remove("hidden");

    // Update the player card
    const card = document.querySelector(
      `.player-card[data-player-id="${playerId}"]`
    );
    if (card) {
      card.classList.add("viewed");
    }
  }

  // Update timer display
  function updateTimerDisplay() {
    const minutes = Math.floor(gameState.timeLeft / 60);
    const seconds = gameState.timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;

    if (gameState.timeLeft <= 60) {
      timerDisplay.style.color = "var(--danger-color)";
    } else {
      timerDisplay.style.color = "var(--accent-color)";
    }
  }

  // Start voting process
  function startVoting() {
    clearInterval(gameState.timer);
    gameScreen.classList.add("hidden");
    votingScreen.classList.remove("hidden");

    // Create voting options
    votingOptions.innerHTML = "";
    gameState.players.forEach((player) => {
      const option = document.createElement("div");
      option.className = "voting-option";
      option.textContent = player.name;
      option.dataset.playerId = player.id;

      option.addEventListener("click", () => {
        document.querySelectorAll(".voting-option").forEach((opt) => {
          opt.classList.remove("selected");
        });
        option.classList.add("selected");
      });

      votingOptions.appendChild(option);
    });
  }

  // Submit votes
  function submitVotes() {
    const selectedOption = document.querySelector(".voting-option.selected");
    if (!selectedOption) {
      alert("Lütfen oy vermek için bir oyuncu seçin.");
      return;
    }

    const votedPlayerId = parseInt(selectedOption.dataset.playerId);

    // In a real multiplayer game, you'd track each player's vote
    // Here we'll just simulate that all players voted for the selected player
    gameState.votes = {};
    gameState.players.forEach((player) => {
      gameState.votes[player.id] = votedPlayerId;
    });

    showResults();
  }

  // Show game results
  function showResults() {
    votingScreen.classList.add("hidden");
    resultsScreen.classList.remove("hidden");

    // Count votes
    const voteCounts = {};
    gameState.players.forEach((player) => {
      voteCounts[player.id] = 0;
    });

    Object.values(gameState.votes).forEach((votedId) => {
      voteCounts[votedId]++;
    });

    // Find who got the most votes
    let maxVotes = 0;
    let suspectedSpy = null;

    for (const [playerId, count] of Object.entries(voteCounts)) {
      if (count > maxVotes) {
        maxVotes = count;
        suspectedSpy = parseInt(playerId);
      }
    }

    // Get the actual spy
    const actualSpy = gameState.players.find((p) => p.id === gameState.spy);

    // Display results
    resultsContent.innerHTML = "";

    // Add voting results
    const votesHeader = document.createElement("h3");
    votesHeader.textContent = "Oylar:";
    resultsContent.appendChild(votesHeader);

    gameState.players.forEach((player) => {
      const voters = gameState.players.filter(
        (p) => gameState.votes[p.id] === player.id
      );
      const voteItem = document.createElement("div");
      voteItem.className = "result-item";

      if (voters.length > 0) {
        const voterNames = voters.map((v) => v.name).join(", ");
        voteItem.textContent = `${player.name}: ${voters.length} oy (${voterNames})`;
      } else {
        voteItem.textContent = `${player.name}: 0 oy`;
      }

      resultsContent.appendChild(voteItem);
    });

    // Add spy reveal
    const spyReveal = document.createElement("div");
    spyReveal.className = "spy-reveal";

    if (suspectedSpy === gameState.spy) {
      spyReveal.textContent = `Tebrikler! Casus (${actualSpy.name}) doğru tespit edildi!`;
      spyReveal.style.color = "var(--success-color)";
    } else {
      const suspectedPlayer = gameState.players.find(
        (p) => p.id === suspectedSpy
      );
      spyReveal.innerHTML = `
              <p>Casus yakalanamadı!</p>
              <p>Şüphelenilen kişi: ${
                suspectedPlayer ? suspectedPlayer.name : "Yok"
              }</p>
              <p>Gerçek casus: ${actualSpy.name} idi!</p>
              <p>Konum: ${gameState.location.name}</p>
          `;
      spyReveal.style.color = "var(--danger-color)";
    }

    resultsContent.appendChild(spyReveal);
  }

  // Reset the game
  function resetGame() {
    gameState = {
      players: [],
      spy: null,
      location: null,
      viewedRoles: [],
      votes: {},
      timer: null,
      timeLeft: 0,
    };

    if (gameState.timer) {
      clearInterval(gameState.timer);
    }

    resultsScreen.classList.add("hidden");
    gameScreen.classList.add("hidden");
    votingScreen.classList.add("hidden");
    setupScreen.classList.remove("hidden");

    // Reset player inputs
    generatePlayerInputs();
  }

  // Initialize
  generatePlayerInputs();
});
