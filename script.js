// ===============================
// DỮ LIỆU HIRAGANA
// ===============================

const hiragana = [
    ["あ", "a"],
    ["い", "i"],
    ["う", "u"],
    ["え", "e"],
    ["お", "o"],

    ["か", "ka"],
    ["き", "ki"],
    ["く", "ku"],
    ["け", "ke"],
    ["こ", "ko"],

    ["さ", "sa"],
    ["し", "shi"],
    ["す", "su"],
    ["せ", "se"],
    ["そ", "so"],

    ["た", "ta"],
    ["ち", "chi"],
    ["つ", "tsu"],
    ["て", "te"],
    ["と", "to"],

    ["な", "na"],
    ["に", "ni"],
    ["ぬ", "nu"],
    ["ね", "ne"],
    ["の", "no"],

    ["は", "ha"],
    ["ひ", "hi"],
    ["ふ", "fu"],
    ["へ", "he"],
    ["ほ", "ho"],

    ["ま", "ma"],
    ["み", "mi"],
    ["む", "mu"],
    ["め", "me"],
    ["も", "mo"],

    ["や", "ya"],
    ["ゆ", "yu"],
    ["よ", "yo"],

    ["ら", "ra"],
    ["り", "ri"],
    ["る", "ru"],
    ["れ", "re"],
    ["ろ", "ro"],

    ["わ", "wa"],
    ["を", "wo"],
    ["ん", "n"]
];


// ===============================
// DỮ LIỆU KATAKANA
// ===============================

const katakana = [
    ["ア", "a"],
    ["イ", "i"],
    ["ウ", "u"],
    ["エ", "e"],
    ["オ", "o"],

    ["カ", "ka"],
    ["キ", "ki"],
    ["ク", "ku"],
    ["ケ", "ke"],
    ["コ", "ko"],

    ["サ", "sa"],
    ["シ", "shi"],
    ["ス", "su"],
    ["セ", "se"],
    ["ソ", "so"],

    ["タ", "ta"],
    ["チ", "chi"],
    ["ツ", "tsu"],
    ["テ", "te"],
    ["ト", "to"],

    ["ナ", "na"],
    ["ニ", "ni"],
    ["ヌ", "nu"],
    ["ネ", "ne"],
    ["ノ", "no"],

    ["ハ", "ha"],
    ["ヒ", "hi"],
    ["フ", "fu"],
    ["ヘ", "he"],
    ["ホ", "ho"],

    ["マ", "ma"],
    ["ミ", "mi"],
    ["ム", "mu"],
    ["メ", "me"],
    ["モ", "mo"],

    ["ヤ", "ya"],
    ["ユ", "yu"],
    ["ヨ", "yo"],

    ["ラ", "ra"],
    ["リ", "ri"],
    ["ル", "ru"],
    ["レ", "re"],
    ["ロ", "ro"],

    ["ワ", "wa"],
    ["ヲ", "wo"],
    ["ン", "n"]
];


// ===============================
// BIẾN
// ===============================

let currentTable = "hiragana";

let currentData = hiragana;

let currentQuestion = null;

let score = 0;


// ===============================
// LẤY ELEMENT HTML
// ===============================

const grid =
    document.getElementById("kanaGrid");

const quizKana =
    document.getElementById("quizKana");

const answer =
    document.getElementById("answer");

const feedback =
    document.getElementById("feedback");


// ===============================
// HIỂN THỊ BẢNG
// ===============================

function renderTable() {

    grid.innerHTML = "";

    currentData.forEach(([kana, romaji]) => {

        const card =
            document.createElement("div");

        card.className = "kana-card";

        card.innerHTML = `
            <div class="kana">
                ${kana}
            </div>

            <div class="romaji">
                ${romaji}
            </div>
        `;

        card.addEventListener(
            "click",
            () => selectKana(kana, romaji)
        );

        grid.appendChild(card);
    });
}


// ===============================
// CHUYỂN HIRAGANA / KATAKANA
// ===============================

function switchTable(type) {

    currentTable = type;

    if (type === "hiragana") {

        currentData = hiragana;

    } else {

        currentData = katakana;
    }


    document
        .getElementById("hiraganaTab")
        .classList.toggle(
            "active",
            type === "hiragana"
        );


    document
        .getElementById("katakanaTab")
        .classList.toggle(
            "active",
            type === "katakana"
        );


    document
        .getElementById("tableTitle")
        .textContent =
        type === "hiragana"
            ? "Bảng Hiragana"
            : "Bảng Katakana";


    document
        .getElementById("quizType")
        .textContent =
        type === "hiragana"
            ? "Hiragana"
            : "Katakana";


    renderTable();

    newQuestion();
}


// ===============================
// CHỌN MỘT CHỮ
// ===============================

function selectKana(kana, romaji) {

    quizKana.textContent = kana;

    currentQuestion = {
        kana: kana,
        romaji: romaji
    };

    answer.value = "";

    feedback.textContent = "";

    feedback.className = "";

    document
        .querySelectorAll(".kana-card")
        .forEach(card => {

            const cardKana =
                card.querySelector(".kana")
                    .textContent;

            card.classList.toggle(
                "selected",
                cardKana === kana
            );
        });

    answer.focus();
}


// ===============================
// TẠO CÂU HỎI MỚI
// ===============================

function newQuestion() {

    const randomIndex =
        Math.floor(
            Math.random() *
            currentData.length
        );

    const item =
        currentData[randomIndex];

    currentQuestion = {

        kana: item[0],

        romaji: item[1]
    };


    quizKana.textContent =
        currentQuestion.kana;


    answer.value = "";

    feedback.textContent = "";

    feedback.className = "";


    document
        .querySelectorAll(".kana-card")
        .forEach(card => {

            card.classList.remove(
                "selected"
            );
        });


    answer.focus();
}


// ===============================
// KIỂM TRA ĐÁP ÁN
// ===============================

function checkAnswer() {

    if (!currentQuestion) {
        return;
    }


    const userAnswer =
        answer.value
            .trim()
            .toLowerCase();


    if (!userAnswer) {

        feedback.textContent =
            "✏️ Nhập đáp án trước nha!";

        feedback.className =
            "wrong";

        return;
    }


    if (
        userAnswer ===
        currentQuestion.romaji
    ) {

        score++;

        document
            .getElementById("score")
            .textContent = score;


        feedback.textContent =
            "🎉 Chính xác! すごい！";

        feedback.className =
            "correct";

    } else {

        feedback.textContent =
            `❌ Chưa đúng. ${currentQuestion.kana} = ${currentQuestion.romaji}`;

        feedback.className =
            "wrong";
    }
}


// ===============================
// ENTER = KIỂM TRA
// ===============================

answer.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            checkAnswer();
        }
    }
);


// ===============================
// KHỞI ĐỘNG WEBSITE
// ===============================

renderTable();

newQuestion();