export default class AI {
    constructor(paddle, ball) {
        this.paddle = paddle;
        this.ball = ball;
    }

    update() {
        this.paddle.y = this.ball.y - this.paddle.height / 2;
    }
}