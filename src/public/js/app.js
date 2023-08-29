const soket = new WebSocket(`ws://${window.location.host}`);

soket.addEventListener("open", () => {
    console.log("서버에 연결됨");
});

soket.addEventListener("close", () => {
    console.log("서버와 연결 종료");
});

soket.addEventListener("message", (message) => {
    console.log("이 메세지는 : " , message.data , "로부터 받아옴");
});

setTimeout(() => {
    soket.send("브라우저 -> 서버 메세지");
}, 5000);
