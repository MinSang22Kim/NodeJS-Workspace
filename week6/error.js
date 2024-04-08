process.on('uncaughtException', (err) => {
    console.error('예상치 못한 예외 : ', err);
});

throw new Event('예상치 못한 예외 발생');