document.addEventListener('DOMContentLoaded', function() {
    // 페이지의 모든 성경 구절 제목 요소를 선택합니다.
    const bibleReferences = document.querySelectorAll('.bible-reference');

    // 각 성경 구절 제목에 클릭 이벤트 리스너를 추가합니다.
    bibleReferences.forEach(reference => {
        reference.addEventListener('click', function() {
            let content = null;
            
            // 1. 바로 다음 형제 요소(nextElementSibling)에 'bible-content'가 있는지 확인
            if (this.nextElementSibling && this.nextElementSibling.classList.contains('bible-content')) {
                content = this.nextElementSibling;
            } 
            // 2. 만약 없다면, 부모 요소(li, p 등) 내에서 'bible-content' 클래스를 가진 요소를 찾습니다.
            else if (this.parentElement) {
                content = this.parentElement.querySelector('.bible-content');
            }

            // 구절 내용이 있다면 토글합니다.
            if (content) {
                // 'display' 속성을 토글하여 보이게/숨기게 합니다.
                if (content.style.display === 'none' || content.style.display === '') {
                    // 숨겨져 있으면 보이게 합니다.
                    content.style.display = 'block';
                } else {
                    // 보이면 숨깁니다.
                    content.style.display = 'none';
                }
            }
        });
    });
});
