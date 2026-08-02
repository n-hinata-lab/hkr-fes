document.addEventListener("DOMContentLoaded", () => {
    // 全てのカードリンクを取得
    const cardLinks = document.querySelectorAll(".card-link");

    cardLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            const href = link.getAttribute("href");
            
            // リンク先が未設定（#）の場合の通知（動作確認用）
            if (href === "#" || href === "") {
                event.preventDefault();
                console.log("リンク先が設定されていません。");
            }
        });
    });
});