/* =====================================================
   TỪ VỰNG N5 THEO CHỦ ĐỀ
===================================================== */

const topics = [
    {
        id: "greetings",
        icon: "👋",
        title: "Chào hỏi & giao tiếp",
        description: "Những câu và từ thường dùng khi giao tiếp.",
        words: [
            ["こんにちは", "konnichiwa", "Xin chào", "Cụm từ"],
            ["おはよう", "ohayou", "Chào buổi sáng", "Cụm từ"],
            ["こんばんは", "konbanwa", "Chào buổi tối", "Cụm từ"],
            ["ありがとう", "arigatou", "Cảm ơn", "Cụm từ"],
            ["すみません", "sumimasen", "Xin lỗi / Làm ơn", "Cụm từ"],
            ["ごめんなさい", "gomennasai", "Xin lỗi", "Cụm từ"],
            ["さようなら", "sayounara", "Tạm biệt", "Cụm từ"],
            ["はい", "hai", "Vâng / Có", "Từ"],
            ["いいえ", "iie", "Không", "Từ"],
            ["お願いします", "onegaishimasu", "Làm ơn / Nhờ bạn", "Cụm từ"]
        ]
    },

    {
        id: "family",
        icon: "👨‍👩‍👧",
        title: "Gia đình",
        description: "Từ vựng về các thành viên trong gia đình.",
        words: [
            ["家族", "kazoku", "Gia đình", "Danh từ"],
            ["父", "chichi", "Bố của mình", "Danh từ"],
            ["母", "haha", "Mẹ của mình", "Danh từ"],
            ["お父さん", "otousan", "Bố", "Danh từ"],
            ["お母さん", "okaasan", "Mẹ", "Danh từ"],
            ["兄", "ani", "Anh trai của mình", "Danh từ"],
            ["姉", "ane", "Chị gái của mình", "Danh từ"],
            ["弟", "otouto", "Em trai", "Danh từ"],
            ["妹", "imouto", "Em gái", "Danh từ"],
            ["子ども", "kodomo", "Trẻ em / Con", "Danh từ"]
        ]
    },

    {
        id: "school",
        icon: "🏫",
        title: "Trường học",
        description: "Từ vựng thường gặp trong môi trường học tập.",
        words: [
            ["学校", "gakkou", "Trường học", "Danh từ"],
            ["学生", "gakusei", "Học sinh / Sinh viên", "Danh từ"],
            ["先生", "sensei", "Giáo viên", "Danh từ"],
            ["大学", "daigaku", "Đại học", "Danh từ"],
            ["教室", "kyoushitsu", "Phòng học", "Danh từ"],
            ["勉強", "benkyou", "Học tập", "Danh từ"],
            ["宿題", "shukudai", "Bài tập về nhà", "Danh từ"],
            ["本", "hon", "Sách", "Danh từ"],
            ["辞書", "jisho", "Từ điển", "Danh từ"],
            ["試験", "shiken", "Kỳ thi", "Danh từ"]
        ]
    },

    {
        id: "house",
        icon: "🏠",
        title: "Nhà cửa",
        description: "Các phòng và đồ vật quen thuộc trong nhà.",
        words: [
            ["家", "ie", "Nhà", "Danh từ"],
            ["部屋", "heya", "Phòng", "Danh từ"],
            ["台所", "daidokoro", "Nhà bếp", "Danh từ"],
            ["トイレ", "toire", "Nhà vệ sinh", "Danh từ"],
            ["お風呂", "ofuro", "Bồn tắm / Phòng tắm", "Danh từ"],
            ["窓", "mado", "Cửa sổ", "Danh từ"],
            ["ドア", "doa", "Cửa", "Danh từ"],
            ["机", "tsukue", "Bàn", "Danh từ"],
            ["椅子", "isu", "Ghế", "Danh từ"],
            ["ベッド", "beddo", "Giường", "Danh từ"]
        ]
    },

    {
        id: "food",
        icon: "🍚",
        title: "Đồ ăn & thức uống",
        description: "Từ vựng về món ăn và đồ uống hằng ngày.",
        words: [
            ["ご飯", "gohan", "Cơm / Bữa ăn", "Danh từ"],
            ["パン", "pan", "Bánh mì", "Danh từ"],
            ["肉", "niku", "Thịt", "Danh từ"],
            ["魚", "sakana", "Cá", "Danh từ"],
            ["野菜", "yasai", "Rau", "Danh từ"],
            ["果物", "kudamono", "Trái cây", "Danh từ"],
            ["りんご", "ringo", "Táo", "Danh từ"],
            ["水", "mizu", "Nước", "Danh từ"],
            ["お茶", "ocha", "Trà", "Danh từ"],
            ["牛乳", "gyuunyuu", "Sữa", "Danh từ"]
        ]
    },

    {
        id: "shopping",
        icon: "🛒",
        title: "Mua sắm",
        description: "Từ vựng dùng khi mua hàng và hỏi giá.",
        words: [
            ["店", "mise", "Cửa hàng", "Danh từ"],
            ["買い物", "kaimono", "Mua sắm", "Danh từ"],
            ["お金", "okane", "Tiền", "Danh từ"],
            ["値段", "nedan", "Giá tiền", "Danh từ"],
            ["円", "en", "Yên", "Danh từ"],
            ["高い", "takai", "Đắt / Cao", "Tính từ"],
            ["安い", "yasui", "Rẻ", "Tính từ"],
            ["買います", "kaimasu", "Mua", "Động từ"],
            ["売ります", "urimasu", "Bán", "Động từ"],
            ["いくら", "ikura", "Bao nhiêu tiền", "Từ hỏi"]
        ]
    },

    {
        id: "time",
        icon: "🕐",
        title: "Thời gian & ngày tháng",
        description: "Giờ, ngày, tháng và các khoảng thời gian.",
        words: [
            ["時間", "jikan", "Thời gian", "Danh từ"],
            ["今日", "kyou", "Hôm nay", "Danh từ"],
            ["明日", "ashita", "Ngày mai", "Danh từ"],
            ["昨日", "kinou", "Hôm qua", "Danh từ"],
            ["朝", "asa", "Buổi sáng", "Danh từ"],
            ["昼", "hiru", "Buổi trưa", "Danh từ"],
            ["夜", "yoru", "Buổi tối / Đêm", "Danh từ"],
            ["今", "ima", "Bây giờ", "Danh từ"],
            ["毎日", "mainichi", "Mỗi ngày", "Danh từ"],
            ["週", "shuu", "Tuần", "Danh từ"]
        ]
    },

    {
        id: "daily",
        icon: "🚶",
        title: "Hoạt động hằng ngày",
        description: "Những hoạt động thường làm mỗi ngày.",
        words: [
            ["起きます", "okimasu", "Thức dậy", "Động từ"],
            ["寝ます", "nemasu", "Ngủ", "Động từ"],
            ["食べます", "tabemasu", "Ăn", "Động từ"],
            ["飲みます", "nomimasu", "Uống", "Động từ"],
            ["見ます", "mimasu", "Xem / Nhìn", "Động từ"],
            ["聞きます", "kikimasu", "Nghe / Hỏi", "Động từ"],
            ["読みます", "yomimasu", "Đọc", "Động từ"],
            ["書きます", "kakimasu", "Viết", "Động từ"],
            ["行きます", "ikimasu", "Đi", "Động từ"],
            ["帰ります", "kaerimasu", "Về", "Động từ"]
        ]
    },

    {
        id: "transport",
        icon: "🚉",
        title: "Giao thông",
        description: "Phương tiện và địa điểm liên quan đến đi lại.",
        words: [
            ["電車", "densha", "Tàu điện", "Danh từ"],
            ["駅", "eki", "Nhà ga", "Danh từ"],
            ["バス", "basu", "Xe buýt", "Danh từ"],
            ["車", "kuruma", "Ô tô / Xe hơi", "Danh từ"],
            ["自転車", "jitensha", "Xe đạp", "Danh từ"],
            ["飛行機", "hikouki", "Máy bay", "Danh từ"],
            ["船", "fune", "Tàu / Thuyền", "Danh từ"],
            ["タクシー", "takushii", "Taxi", "Danh từ"],
            ["歩きます", "arukimasu", "Đi bộ", "Động từ"],
            ["乗ります", "norimasu", "Lên / Đi bằng phương tiện", "Động từ"]
        ]
    },

    {
        id: "weather",
        icon: "🌤️",
        title: "Thời tiết",
        description: "Các từ vựng cơ bản về thời tiết.",
        words: [
            ["天気", "tenki", "Thời tiết", "Danh từ"],
            ["晴れ", "hare", "Trời nắng / Quang đãng", "Danh từ"],
            ["雨", "ame", "Mưa", "Danh từ"],
            ["雪", "yuki", "Tuyết", "Danh từ"],
            ["風", "kaze", "Gió", "Danh từ"],
            ["暑い", "atsui", "Nóng", "Tính từ"],
            ["寒い", "samui", "Lạnh", "Tính từ"],
            ["暖かい", "atatakai", "Ấm áp", "Tính từ"],
            ["涼しい", "suzushii", "Mát mẻ", "Tính từ"],
            ["曇り", "kumori", "Trời nhiều mây", "Danh từ"]
        ]
    },

    {
        id: "colors",
        icon: "🎨",
        title: "Màu sắc",
        description: "Các màu cơ bản thường gặp trong tiếng Nhật.",
        words: [
            ["赤", "aka", "Đỏ", "Danh từ"],
            ["青", "ao", "Xanh dương", "Danh từ"],
            ["白", "shiro", "Trắng", "Danh từ"],
            ["黒", "kuro", "Đen", "Danh từ"],
            ["黄色", "kiiro", "Vàng", "Danh từ"],
            ["緑", "midori", "Xanh lá", "Danh từ"],
            ["茶色", "chairo", "Nâu", "Danh từ"],
            ["紫", "murasaki", "Tím", "Danh từ"],
            ["ピンク", "pinku", "Hồng", "Danh từ"],
            ["色", "iro", "Màu sắc", "Danh từ"]
        ]
    },

    {
        id: "numbers",
        icon: "🔢",
        title: "Số đếm",
        description: "Các số và cách đếm cơ bản.",
        words: [
            ["一", "ichi", "Một", "Số"],
            ["二", "ni", "Hai", "Số"],
            ["三", "san", "Ba", "Số"],
            ["四", "yon", "Bốn", "Số"],
            ["五", "go", "Năm", "Số"],
            ["六", "roku", "Sáu", "Số"],
            ["七", "nana", "Bảy", "Số"],
            ["八", "hachi", "Tám", "Số"],
            ["九", "kyuu", "Chín", "Số"],
            ["十", "juu", "Mười", "Số"]
        ]
    },

    {
        id: "work",
        icon: "💼",
        title: "Công việc",
        description: "Từ vựng cơ bản về công việc và nghề nghiệp.",
        words: [
            ["仕事", "shigoto", "Công việc", "Danh từ"],
            ["会社", "kaisha", "Công ty", "Danh từ"],
            ["会社員", "kaishain", "Nhân viên công ty", "Danh từ"],
            ["銀行員", "ginkouin", "Nhân viên ngân hàng", "Danh từ"],
            ["先生", "sensei", "Giáo viên", "Danh từ"],
            ["医者", "isha", "Bác sĩ", "Danh từ"],
            ["学生", "gakusei", "Học sinh / Sinh viên", "Danh từ"],
            ["働きます", "hatarakimasu", "Làm việc", "Động từ"],
            ["休みます", "yasumimasu", "Nghỉ", "Động từ"],
            ["忙しい", "isogashii", "Bận rộn", "Tính từ"]
        ]
    },

    {
        id: "places",
        icon: "📍",
        title: "Địa điểm",
        description: "Các địa điểm thường gặp trong cuộc sống.",
        words: [
            ["学校", "gakkou", "Trường học", "Danh từ"],
            ["病院", "byouin", "Bệnh viện", "Danh từ"],
            ["銀行", "ginkou", "Ngân hàng", "Danh từ"],
            ["郵便局", "yuubinkyoku", "Bưu điện", "Danh từ"],
            ["駅", "eki", "Nhà ga", "Danh từ"],
            ["公園", "kouen", "Công viên", "Danh từ"],
            ["図書館", "toshokan", "Thư viện", "Danh từ"],
            ["店", "mise", "Cửa hàng", "Danh từ"],
            ["会社", "kaisha", "Công ty", "Danh từ"],
            ["レストラン", "resutoran", "Nhà hàng", "Danh từ"]
        ]
    },

    {
        id: "people-body",
        icon: "🧑",
        title: "Con người & cơ thể",
        description: "Từ vựng về con người và các bộ phận cơ thể.",
        words: [
            ["人", "hito", "Người", "Danh từ"],
            ["男", "otoko", "Đàn ông / Nam", "Danh từ"],
            ["女", "onna", "Phụ nữ / Nữ", "Danh từ"],
            ["男の子", "otokonoko", "Bé trai", "Danh từ"],
            ["女の子", "onnanoko", "Bé gái", "Danh từ"],
            ["頭", "atama", "Đầu", "Danh từ"],
            ["顔", "kao", "Khuôn mặt", "Danh từ"],
            ["目", "me", "Mắt", "Danh từ"],
            ["耳", "mimi", "Tai", "Danh từ"],
            ["口", "kuchi", "Miệng", "Danh từ"]
        ]
    }
];


/* =====================================================
   BIẾN
===================================================== */

let currentTopicIndex = 0;
let currentWordIndex = 0;
let quizScore = 0;
let quizAnswered = false;


/* =====================================================
   LẤY ELEMENT HTML
===================================================== */

const topicsGrid = document.getElementById("topicsGrid");

const topicLabel = document.getElementById("topicLabel");
const topicTitle = document.getElementById("topicTitle");
const topicDescription = document.getElementById("topicDescription");

const japaneseWord = document.getElementById("japaneseWord");
const wordRomaji = document.getElementById("wordRomaji");
const wordType = document.getElementById("wordType");
const wordMeaning = document.getElementById("wordMeaning");

const topicProgress = document.getElementById("topicProgress");

const showMeaningButton =
    document.getElementById("showMeaningButton");

const previousWordButton =
    document.getElementById("previousWordButton");

const nextWordButton =
    document.getElementById("nextWordButton");

const audioButton =
    document.getElementById("audioButton");

const vocabQuestion =
    document.getElementById("vocabQuestion");

const vocabAnswers =
    document.getElementById("vocabAnswers");

const vocabQuizFeedback =
    document.getElementById("vocabQuizFeedback");

const vocabQuizScore =
    document.getElementById("vocabQuizScore");

const nextQuizButton =
    document.getElementById("nextQuizButton");

const learnedCount =
    document.getElementById("learnedCount");

const progressPercent =
    document.getElementById("progressPercent");

const progressFill =
    document.getElementById("progressFill");


/* =====================================================
   HIỂN THỊ CHỦ ĐỀ
===================================================== */

function renderTopics() {

    topicsGrid.innerHTML = "";

    topics.forEach((topic, index) => {

        const card = document.createElement("div");

        card.className = "topic-card";

        if (index === currentTopicIndex) {
            card.classList.add("active");
        }

        card.innerHTML = `
            <div class="topic-icon">
                ${topic.icon}
            </div>

            <h3>
                ${topic.title}
            </h3>

            <p>
                ${topic.description}
            </p>

            <span class="topic-number">
                ${topic.words.length} từ vựng
            </span>
        `;

        card.addEventListener("click", () => {
            selectTopic(index);
        });

        topicsGrid.appendChild(card);

    });
}


/* =====================================================
   CHỌN CHỦ ĐỀ
===================================================== */

function selectTopic(index) {

    currentTopicIndex = index;

    currentWordIndex = 0;

    renderTopics();

    renderWord();

    createQuiz();

    document
        .getElementById("vocabularySection")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* =====================================================
   HIỂN THỊ TỪ VỰNG
===================================================== */

function renderWord() {

    const topic = topics[currentTopicIndex];

    const word = topic.words[currentWordIndex];

    japaneseWord.textContent = word[0];

    wordRomaji.textContent = word[1];

    wordMeaning.textContent = word[2];

    wordType.textContent = word[3];

    topicLabel.textContent = topic.title;

    topicTitle.textContent = topic.title;

    topicDescription.textContent = topic.description;

    topicProgress.textContent =
        `${currentWordIndex + 1} / ${topic.words.length}`;

    wordMeaning.classList.remove("show");

    showMeaningButton.textContent =
        "👀 Hiện nghĩa";

    previousWordButton.disabled =
        currentWordIndex === 0;

    nextWordButton.disabled =
        currentWordIndex === topic.words.length - 1;

    markWordAsLearned(topic, currentWordIndex);

    updateProgress();
}


/* =====================================================
   HIỆN NGHĨA
===================================================== */

function toggleMeaning() {

    wordMeaning.classList.toggle("show");

    if (wordMeaning.classList.contains("show")) {

        showMeaningButton.textContent =
            "🙈 Ẩn nghĩa";

    } else {

        showMeaningButton.textContent =
            "👀 Hiện nghĩa";
    }
}


/* =====================================================
   TỪ TRƯỚC
===================================================== */

function previousWord() {

    if (currentWordIndex > 0) {

        currentWordIndex--;

        renderWord();
    }
}


/* =====================================================
   TỪ TIẾP THEO
===================================================== */

function nextWord() {

    const topic = topics[currentTopicIndex];

    if (currentWordIndex < topic.words.length - 1) {

        currentWordIndex++;

        renderWord();
    }
}


/* =====================================================
   LƯU TỪ ĐÃ HỌC
===================================================== */

function markWordAsLearned(topic, wordIndex) {

    const key =
        `vocab_${topic.id}_${wordIndex}`;

    localStorage.setItem(key, "learned");
}


/* =====================================================
   CẬP NHẬT TIẾN ĐỘ
===================================================== */

function updateProgress() {

    let totalWords = 0;

    let learnedWords = 0;

    topics.forEach(topic => {

        topic.words.forEach((word, index) => {

            totalWords++;

            const key =
                `vocab_${topic.id}_${index}`;

            if (localStorage.getItem(key) === "learned") {
                learnedWords++;
            }

        });

    });

    const percent =
        totalWords === 0
            ? 0
            : Math.round(
                (learnedWords / totalWords) * 100
            );

    learnedCount.textContent =
        `${learnedWords} / ${totalWords}`;

    progressPercent.textContent =
        `${percent}%`;

    progressFill.style.width =
        `${percent}%`;
}


/* =====================================================
   PHÁT ÂM
===================================================== */

function speakWord() {

    const topic = topics[currentTopicIndex];

    const word = topic.words[currentWordIndex];

    if ("speechSynthesis" in window) {

        const speech =
            new SpeechSynthesisUtterance(word[0]);

        speech.lang = "ja-JP";

        speech.rate = 0.8;

        window.speechSynthesis.cancel();

        window.speechSynthesis.speak(speech);

    } else {

        alert("Trình duyệt của bạn không hỗ trợ phát âm.");
    }
}


/* =====================================================
   TẠO QUIZ
===================================================== */

function createQuiz() {

    const topic = topics[currentTopicIndex];

    const word =
        topic.words[
            Math.floor(
                Math.random() * topic.words.length
            )
        ];

    vocabQuestion.textContent =
        `「${word[0]}」 nghĩa là gì?`;

    vocabAnswers.innerHTML = "";

    vocabQuizFeedback.textContent = "";

    quizAnswered = false;

    const answers = [word[2]];

    while (answers.length < 4) {

        const randomWord =
            topic.words[
                Math.floor(
                    Math.random() * topic.words.length
                )
            ];

        if (!answers.includes(randomWord[2])) {

            answers.push(randomWord[2]);

        }

    }

    answers.sort(() => Math.random() - 0.5);

    answers.forEach(answer => {

        const button =
            document.createElement("button");

        button.className = "quiz-answer";

        button.textContent = answer;

        button.addEventListener("click", () => {

            checkQuizAnswer(
                answer,
                word[2],
                button
            );

        });

        vocabAnswers.appendChild(button);

    });
}


/* =====================================================
   KIỂM TRA QUIZ
===================================================== */

function checkQuizAnswer(
    selectedAnswer,
    correctAnswer,
    selectedButton
) {

    if (quizAnswered) {
        return;
    }

    quizAnswered = true;

    const buttons =
        vocabAnswers.querySelectorAll(".quiz-answer");

    buttons.forEach(button => {

        button.disabled = true;

        if (button.textContent === correctAnswer) {

            button.classList.add("correct");

        }

    });


    if (selectedAnswer === correctAnswer) {

        quizScore++;

        vocabQuizFeedback.textContent =
            "🎉 Chính xác!";

        selectedButton.classList.add("correct");

    } else {

        vocabQuizFeedback.textContent =
            `❌ Chưa đúng. Đáp án là: ${correctAnswer}`;

        selectedButton.classList.add("wrong");
    }

    vocabQuizScore.textContent =
        quizScore;
}


/* =====================================================
   EVENT
===================================================== */

showMeaningButton.addEventListener(
    "click",
    toggleMeaning
);

previousWordButton.addEventListener(
    "click",
    previousWord
);

nextWordButton.addEventListener(
    "click",
    nextWord
);

audioButton.addEventListener(
    "click",
    speakWord
);

nextQuizButton.addEventListener(
    "click",
    createQuiz
);


/* =====================================================
   KHỞI ĐỘNG
===================================================== */

renderTopics();

renderWord();

createQuiz();

updateProgress();