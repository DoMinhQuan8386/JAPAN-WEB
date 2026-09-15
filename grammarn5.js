const lessons = [
    {
        title: "Câu cơ bản với です",
        description: "Dùng です để nói một vật/người là gì hoặc giới thiệu thông tin cơ bản.",
        pattern: "N1 は N2 です。",
        meaning: "N1 là N2.",
        explanation:
            "です được dùng ở cuối câu danh từ để tạo câu lịch sự. は là trợ từ đánh dấu chủ đề của câu.",
        examples: [
            {
                japanese: "わたしは学生です。",
                romaji: "Watashi wa gakusei desu.",
                vietnamese: "Tôi là học sinh."
            },
            {
                japanese: "これは本です。",
                romaji: "Kore wa hon desu.",
                vietnamese: "Đây là quyển sách."
            }
        ],
        note:
            "は khi làm trợ từ được đọc là “wa”, không đọc là “ha”. です thường được phát âm gần giống “des”.",
        question: "わたしは学生___。",
        answers: ["です", "ます", "でした", "ません"],
        correct: "です"
    },

    {
        title: "Phủ định với ではありません",
        description: "Dùng ではありません để nói “không phải là...” một cách lịch sự.",
        pattern: "N1 は N2 ではありません。",
        meaning: "N1 không phải là N2.",
        explanation:
            "ではありません là dạng phủ định lịch sự của です.",
        examples: [
            {
                japanese: "わたしは先生ではありません。",
                romaji: "Watashi wa sensei dewa arimasen.",
                vietnamese: "Tôi không phải là giáo viên."
            },
            {
                japanese: "これは学生の本ではありません。",
                romaji: "Kore wa gakusei no hon dewa arimasen.",
                vietnamese: "Đây không phải sách của học sinh."
            }
        ],
        note:
            "Trong giao tiếp, じゃありません cũng thường được dùng thay cho ではありません.",
        question: "これは本___。",
        answers: ["ではありません", "ですか", "ます", "いました"],
        correct: "ではありません"
    },

    {
        title: "Trợ từ は",
        description: "は dùng để đánh dấu chủ đề mà câu đang nói đến.",
        pattern: "N は ...",
        meaning: "Về N thì...",
        explanation:
            "は giúp người nghe biết câu đang nói về ai hoặc điều gì.",
        examples: [
            {
                japanese: "わたしはベトナム人です。",
                romaji: "Watashi wa Betonamujin desu.",
                vietnamese: "Tôi là người Việt Nam."
            },
            {
                japanese: "日本語はおもしろいです。",
                romaji: "Nihongo wa omoshiroi desu.",
                vietnamese: "Tiếng Nhật thì thú vị."
            }
        ],
        note:
            "は viết là ha nhưng khi làm trợ từ thì đọc là wa.",
        question: "わたし___学生です。",
        answers: ["は", "を", "に", "で"],
        correct: "は"
    },

    {
        title: "Trợ từ を",
        description: "を đánh dấu đối tượng trực tiếp của hành động.",
        pattern: "N を Vます。",
        meaning: "Làm V đối với N.",
        explanation:
            "を thường đứng sau danh từ và trước động từ để cho biết thứ được tác động bởi hành động.",
        examples: [
            {
                japanese: "ごはんを食べます。",
                romaji: "Gohan o tabemasu.",
                vietnamese: "Tôi ăn cơm."
            },
            {
                japanese: "本を読みます。",
                romaji: "Hon o yomimasu.",
                vietnamese: "Tôi đọc sách."
            }
        ],
        note:
            "を được viết là wo nhưng trong tiếng Nhật hiện đại thường phát âm gần giống “o”.",
        question: "水___飲みます。",
        answers: ["を", "は", "に", "で"],
        correct: "を"
    },

    {
        title: "Trợ từ に",
        description: "に thường dùng để chỉ thời điểm hoặc đích đến.",
        pattern: "Thời gian に Vます。",
        meaning: "Làm gì vào thời điểm nào.",
        explanation:
            "に có nhiều cách dùng. Ở trình độ N5, hai cách rất quan trọng là chỉ thời gian cụ thể và nơi đến.",
        examples: [
            {
                japanese: "七時に起きます。",
                romaji: "Shichi-ji ni okimasu.",
                vietnamese: "Tôi thức dậy lúc 7 giờ."
            },
            {
                japanese: "学校に行きます。",
                romaji: "Gakkou ni ikimasu.",
                vietnamese: "Tôi đi đến trường."
            }
        ],
        note:
            "Không phải mọi cách nói thời gian đều cần に. Ví dụ: きょう (hôm nay) thường không dùng に.",
        question: "六時___起きます。",
        answers: ["に", "を", "で", "は"],
        correct: "に"
    },

    {
        title: "Trợ từ で",
        description: "で dùng để chỉ địa điểm diễn ra hành động hoặc phương tiện.",
        pattern: "N で Vます。",
        meaning: "Làm gì tại N / bằng N.",
        explanation:
            "Khi một hành động xảy ra ở một địa điểm, dùng で sau địa điểm đó.",
        examples: [
            {
                japanese: "学校で勉強します。",
                romaji: "Gakkou de benkyou shimasu.",
                vietnamese: "Tôi học ở trường."
            },
            {
                japanese: "電車で行きます。",
                romaji: "Densha de ikimasu.",
                vietnamese: "Tôi đi bằng tàu điện."
            }
        ],
        note:
            "Phân biệt に và で: に thường chỉ điểm đến/sự tồn tại, còn で chỉ nơi hành động xảy ra.",
        question: "図書館___本を読みます。",
        answers: ["で", "に", "を", "は"],
        correct: "で"
    },

    {
        title: "これ・それ・あれ",
        description: "Dùng để chỉ đồ vật theo khoảng cách với người nói và người nghe.",
        pattern: "これ / それ / あれ は N です。",
        meaning: "Đây / đó / kia là N.",
        explanation:
            "これ: vật gần người nói. それ: vật gần người nghe. あれ: vật xa cả hai.",
        examples: [
            {
                japanese: "これはペンです。",
                romaji: "Kore wa pen desu.",
                vietnamese: "Đây là cây bút."
            },
            {
                japanese: "それはかばんです。",
                romaji: "Sore wa kaban desu.",
                vietnamese: "Đó là cái cặp."
            }
        ],
        note:
            "これ・それ・あれ có thể đứng một mình, không cần danh từ phía sau.",
        question: "___は何ですか。",
        answers: ["これ", "ここ", "この", "こちら"],
        correct: "これ"
    },

    {
        title: "ここ・そこ・あそこ",
        description: "Dùng để chỉ địa điểm.",
        pattern: "ここ / そこ / あそこ は N です。",
        meaning: "Đây / đó / kia là...",
        explanation:
            "ここ: nơi gần người nói. そこ: nơi gần người nghe. あそこ: nơi xa cả hai.",
        examples: [
            {
                japanese: "ここは学校です。",
                romaji: "Koko wa gakkou desu.",
                vietnamese: "Đây là trường học."
            },
            {
                japanese: "あそこは駅です。",
                romaji: "Asoko wa eki desu.",
                vietnamese: "Kia là nhà ga."
            }
        ],
        note:
            "Đây là nhóm từ chỉ địa điểm. Đừng nhầm ここ với これ: ここ = nơi này, これ = cái này.",
        question: "___は図書館です。",
        answers: ["ここ", "これ", "この", "それ"],
        correct: "ここ"
    },

    {
        title: "あります・います",
        description: "Dùng để nói sự tồn tại của đồ vật và người/động vật.",
        pattern: "N は 場所 に あります / います。",
        meaning: "N ở tại địa điểm.",
        explanation:
            "あります dùng cho đồ vật, cây cối và những thứ không có sự sống. います dùng cho người và động vật.",
        examples: [
            {
                japanese: "机の上に本があります。",
                romaji: "Tsukue no ue ni hon ga arimasu.",
                vietnamese: "Có quyển sách ở trên bàn."
            },
            {
                japanese: "教室に先生がいます。",
                romaji: "Kyoushitsu ni sensei ga imasu.",
                vietnamese: "Có giáo viên trong lớp học."
            }
        ],
        note:
            "Mẹo nhớ: あります → đồ vật, います → người/động vật.",
        question: "部屋に猫が___。",
        answers: ["います", "あります", "です", "します"],
        correct: "います"
    },

    {
        title: "Động từ thể ます",
        description: "Làm quen với cách nói lịch sự của động từ trong tiếng Nhật.",
        pattern: "N を Vます。",
        meaning: "Làm một hành động nào đó.",
        explanation:
            "Thể ます là dạng lịch sự thường gặp ở trình độ N5. Một số động từ cơ bản: 食べます (ăn), 飲みます (uống), 行きます (đi), 見ます (xem), 読みます (đọc).",
        examples: [
            {
                japanese: "毎日日本語を勉強します。",
                romaji: "Mainichi nihongo o benkyou shimasu.",
                vietnamese: "Mỗi ngày tôi học tiếng Nhật."
            },
            {
                japanese: "テレビを見ます。",
                romaji: "Terebi o mimasu.",
                vietnamese: "Tôi xem TV."
            }
        ],
        note:
            "Đây là dạng hiện tại/tương lai lịch sự. Muốn nói phủ định thường dùng ～ません.",
        question: "毎日日本語を勉強___。",
        answers: ["します", "です", "あります", "います"],
        correct: "します"
    },

    {
        title: "Tính từ い",
        description: "Làm quen với tính từ đuôi い để miêu tả người, vật và sự việc.",
        pattern: "N は い-adjective です。",
        meaning: "N thì như thế nào.",
        explanation:
            "Tính từ い thường kết thúc bằng い. Ví dụ: おいしい (ngon), おおきい (to), ちいさい (nhỏ), あたらしい (mới).",
        examples: [
            {
                japanese: "このりんごはおいしいです。",
                romaji: "Kono ringo wa oishii desu.",
                vietnamese: "Quả táo này ngon."
            },
            {
                japanese: "日本語はむずかしいです。",
                romaji: "Nihongo wa muzukashii desu.",
                vietnamese: "Tiếng Nhật khó."
            }
        ],
        note:
            "いい là một trường hợp đặc biệt. Dạng phủ định của いい là よくないです.",
        question: "この本は___です。",
        answers: ["おもしろい", "おもしろ", "おもしろく", "おもしろな"],
        correct: "おもしろい"
    },

    {
        title: "～たいです",
        description: "Dùng ～たいです để nói mong muốn làm một việc gì đó.",
        pattern: "Vます → Vたいです。",
        meaning: "Muốn làm V.",
        explanation:
            "Bỏ ます khỏi động từ rồi thêm たいです. Ví dụ 行きます → 行きたいです.",
        examples: [
            {
                japanese: "日本へ行きたいです。",
                romaji: "Nihon e ikitai desu.",
                vietnamese: "Tôi muốn đi Nhật."
            },
            {
                japanese: "寿司を食べたいです。",
                romaji: "Sushi o tabetai desu.",
                vietnamese: "Tôi muốn ăn sushi."
            }
        ],
        note:
            "Công thức: 行きます → 行きたいです, 食べます → 食べたいです, 見ます → 見たいです.",
        question: "日本へ ___ です。",
        answers: ["行きたい", "行きます", "行って", "行く"],
        correct: "行きたい"
    }
];

const lessonImages = [
    "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=1200&q=80"
];

let currentLesson = 0;
let quizScore = 0;

let completedLessons = [];

try {
    completedLessons =
        JSON.parse(localStorage.getItem("n5CompletedLessons")) || [];
} catch (error) {
    completedLessons = [];
}

const lessonList = document.getElementById("lessonList");
const lessonImage = document.getElementById("lessonImage");
const lessonNumber = document.getElementById("lessonNumber");
const lessonTitle = document.getElementById("lessonTitle");
const lessonDescription = document.getElementById("lessonDescription");
const lessonPattern = document.getElementById("lessonPattern");
const lessonMeaning = document.getElementById("lessonMeaning");
const lessonExplanation = document.getElementById("lessonExplanation");
const examplesContainer = document.getElementById("examplesContainer");
const lessonNote = document.getElementById("lessonNote");

const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answers");
const quizFeedback = document.getElementById("quizFeedback");
const quizScoreElement = document.getElementById("quizScore");

const previousButton = document.getElementById("previousButton");
const completeButton = document.getElementById("completeButton");
const nextButton = document.getElementById("nextButton");

const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");


function renderLessonList() {
    lessonList.innerHTML = "";

    lessons.forEach((lesson, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "lesson-item";

        if (index === currentLesson) {
            button.classList.add("active");
        }

        if (completedLessons.includes(index)) {
            button.classList.add("completed");
        }

        button.innerHTML = `
            <span class="lesson-index">${index + 1}</span>
            <span class="lesson-name">${lesson.title}</span>
            <span class="lesson-status">
                ${completedLessons.includes(index) ? "✓" : ""}
            </span>
        `;

        button.addEventListener("click", () => {
            currentLesson = index;
            loadLesson();
        });

        lessonList.appendChild(button);
    });
}


function loadLesson() {
    const lesson = lessons[currentLesson];

    lessonNumber.textContent = `Bài ${currentLesson + 1}`;
    lessonTitle.textContent = lesson.title;
    lessonDescription.textContent = lesson.description;

    lessonPattern.textContent = lesson.pattern;
    lessonMeaning.textContent = lesson.meaning;
    lessonExplanation.textContent = lesson.explanation;
    lessonNote.textContent = lesson.note;

    lessonImage.src =
        lessonImages[currentLesson % lessonImages.length];

    lessonImage.alt = lesson.title;

    examplesContainer.innerHTML = "";

    lesson.examples.forEach(example => {
        const exampleElement = document.createElement("div");

        exampleElement.className = "example-card";

        exampleElement.innerHTML = `
            <div class="example-japanese">
                ${example.japanese}
            </div>

            <div class="example-romaji">
                ${example.romaji}
            </div>

            <div class="example-vietnamese">
                ${example.vietnamese}
            </div>
        `;

        examplesContainer.appendChild(exampleElement);
    });

    loadQuiz();

    previousButton.disabled = currentLesson === 0;
    nextButton.disabled = currentLesson === lessons.length - 1;

    updateProgress();
    renderLessonList();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function loadQuiz() {
    const lesson = lessons[currentLesson];

    questionText.textContent = lesson.question;

    answersContainer.innerHTML = "";
    quizFeedback.textContent = "";
    quizFeedback.className = "quiz-feedback";

    lesson.answers.forEach(answer => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "answer-button";
        button.textContent = answer;

        button.addEventListener("click", () => {
            checkAnswer(answer);
        });

        answersContainer.appendChild(button);
    });

    quizScoreElement.textContent = `Điểm: ${quizScore}`;
}


function checkAnswer(answer) {
    const lesson = lessons[currentLesson];

    const buttons =
        answersContainer.querySelectorAll(".answer-button");

    buttons.forEach(button => {
        button.disabled = true;

        if (button.textContent === lesson.correct) {
            button.classList.add("correct");
        }
    });

    if (answer === lesson.correct) {
        quizScore++;

        quizFeedback.textContent = "🎉 Chính xác!";
        quizFeedback.classList.add("correct-feedback");
    } else {
        quizFeedback.textContent =
            `❌ Chưa đúng. Đáp án đúng là: ${lesson.correct}`;

        quizFeedback.classList.add("wrong-feedback");

        buttons.forEach(button => {
            if (button.textContent === answer) {
                button.classList.add("wrong");
            }
        });
    }

    quizScoreElement.textContent = `Điểm: ${quizScore}`;
}


function completeLesson() {
    if (!completedLessons.includes(currentLesson)) {
        completedLessons.push(currentLesson);

        localStorage.setItem(
            "n5CompletedLessons",
            JSON.stringify(completedLessons)
        );
    }

    updateProgress();
    renderLessonList();

    completeButton.textContent = "✓ Đã hoàn thành";

    if (currentLesson < lessons.length - 1) {
        setTimeout(() => {
            currentLesson++;
            loadLesson();
        }, 500);
    }
}


function nextLesson() {
    if (currentLesson < lessons.length - 1) {
        currentLesson++;
        loadLesson();
    }
}


function previousLesson() {
    if (currentLesson > 0) {
        currentLesson--;
        loadLesson();
    }
}


function updateProgress() {
    const completed = completedLessons.length;
    const total = lessons.length;

    const percent = (completed / total) * 100;

    progressText.textContent =
        `${completed}/${total} bài hoàn thành`;

    progressBar.style.width = `${percent}%`;

    if (completedLessons.includes(currentLesson)) {
        completeButton.textContent = "✓ Đã hoàn thành";
        completeButton.classList.add("completed-button");
    } else {
        completeButton.textContent = "Hoàn thành bài";
        completeButton.classList.remove("completed-button");
    }
}


previousButton.addEventListener("click", previousLesson);
completeButton.addEventListener("click", completeLesson);
nextButton.addEventListener("click", nextLesson);

renderLessonList();
loadLesson();