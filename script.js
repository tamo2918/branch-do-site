document.addEventListener('DOMContentLoaded', function() {
    // 現在の日付を設定
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('ja-JP', options);
    
    // 最終更新日の表示
    const currentDateElement = document.getElementById('current-date');
    if (currentDateElement) {
        currentDateElement.textContent = formattedDate;
    }
    
    // フッターの年を更新
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = now.getFullYear();
    }
}); 