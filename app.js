
      // Quiz in JS object form
      const quizData = [
        {
          question: "What is the capital of France?",
          options: ["Berlin", "Madrid", "Paris", "Rome"],
          answer: "Paris",
        },
        {
          question: "Which planet is known as the Red Planet?",
          options: ["Earth", "Mars", "Jupiter", "Venus"],
          answer: "Mars",
        },
        {
          question: "Who wrote 'To Kill a Mockingbird'?",
          options: [
            "Harper Lee",
            "Mark Twain",
            "Ernest Hemingway",
            "Jane Austen",
          ],
          answer: "Harper Lee",
        },
      ];

      // Render the quiz
      const quizContainer = document.getElementById("quiz");
      quizData.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.className = "question";
        questionDiv.innerHTML =
          `<p>${index + 1}. ${q.question}</p>` +
          q.options
            .map(
              (option, i) =>
                `<label><input type="radio" name="q${index}" value="${option}"> ${option}</label><br>`
            )
            .join("");
        quizContainer.appendChild(questionDiv);
      });

      // Evaluate the quiz
      function submitQuiz() {
        let score = 0;
        quizData.forEach((q, index) => {
          const selected = document.querySelector(
            `input[name="q${index}"]:checked`
          );
          if (selected && selected.value === q.answer) {
            score++;
          }
        });
        document.getElementById(
          "result"
        ).textContent = `You scored ${score} out of ${quizData.length}.`;
        setTimeout(restart, 3000);
      }

      function restart() {
        // Sare selected radio buttons ko uncheck karo
        const selectedOptions = document.querySelectorAll(
          'input[type="radio"]:checked'
        );
        selectedOptions.forEach((option) => {
          option.checked = false;
        });

        // Result text ko empty kar do
        document.getElementById("result").textContent = "";

        // Optional: Page scroll ko top pe le jao
        window.scrollTo(0, 0);
      }
        restart();
  