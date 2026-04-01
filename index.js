function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function runAgent() {
    while (true) {
        console.log("hello world");
        await sleep(10000);
    }
}

runAgent();