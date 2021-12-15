export function onTextHandler(event, setSomething) {
    setSomething(event.currentTarget.value);
}
// 오! 핸들러 하나의 함수로 재사용 가능!
// 파라미터 2개 이상 넘어올때는 꼭 onClick에서 함수로 넘겨주기