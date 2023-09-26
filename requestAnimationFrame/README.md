# requestAnimationFrame(), cancelAnimationFrame();

## 💬 MEMO

```
 - setInterval()과 비슷하지만 프레임관련 및 애니메이션 처리 작업에 최적화 됨
   진행시간은 사용자의 CPU성능에 따른 초당 프레임으로 자동결정된다.

 - requestAnimationFrame()은 setInterval()과 다르게
   백그라운드 상태에서 리소스 절약을 할 수 있다.
```

![리소스절약](https://file.notion.so/f/f/e8d8ad32-680e-43dd-a515-2e167b723cbb/2e7313ad-22ea-46a6-9b69-ae9c2b06802d/Untitled.png?id=4168f037-4a2e-4b62-ac40-e5a020a37cf1&table=block&spaceId=e8d8ad32-680e-43dd-a515-2e167b723cbb&expirationTimestamp=1695808800000&signature=eOQxTCQ-Xx2__voXNIE52U8qOIUJN1r74u0GcS2yMBM&downloadName=Untitled.png)

```
 - requestAnimationFrame()을 사용하면 메모리 누수가 발생하지 않는다.
   또한 파라미터에 인자를 넣으면 시간도 알 수 있다.
```

![타이머](https://file.notion.so/f/f/e8d8ad32-680e-43dd-a515-2e167b723cbb/8d572cc5-d680-4054-9caa-8e8501bbc0d5/Untitled.png?id=7a5f58f8-fba4-460d-aa1c-c2c607fd2c76&table=block&spaceId=e8d8ad32-680e-43dd-a515-2e167b723cbb&expirationTimestamp=1695801600000&signature=gx5WYo_JvcVGFwvdBWJRhzkv31u5XLzmdkLOEYwkHcQ&downloadName=Untitled.png)
