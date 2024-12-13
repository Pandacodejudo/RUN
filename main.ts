let SCORE = 0
while (!(input.buttonIsPressed(Button.AB))) {
	
}
let Player = game.createSprite(2, 1)
let Enemy = game.createSprite(2, 3)
Enemy.set(LedSpriteProperty.Brightness, 75)
basic.forever(function () {
    if (input.acceleration(Dimension.X) < -10) {
        Player.change(LedSpriteProperty.X, -1)
    } else if (input.acceleration(Dimension.X) > 10) {
        Player.change(LedSpriteProperty.X, 1)
    }
    if (input.acceleration(Dimension.Y) < -10) {
        Player.change(LedSpriteProperty.Y, -1)
    } else if (input.acceleration(Dimension.Y) > 10) {
        Player.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(200)
})
basic.forever(function () {
    if (Player.get(LedSpriteProperty.X) < Enemy.get(LedSpriteProperty.X)) {
        Enemy.change(LedSpriteProperty.X, -1)
    } else if (Player.get(LedSpriteProperty.X) > Enemy.get(LedSpriteProperty.X)) {
        Enemy.change(LedSpriteProperty.X, 1)
    }
    if (Player.get(LedSpriteProperty.Y) < Enemy.get(LedSpriteProperty.Y)) {
        Enemy.change(LedSpriteProperty.Y, -1)
    } else if (Player.get(LedSpriteProperty.Y) > Enemy.get(LedSpriteProperty.Y)) {
        Enemy.change(LedSpriteProperty.Y, 1)
    }
    if (Enemy.isTouching(Player)) {
        game.setScore(SCORE)
        game.gameOver()
    } else {
        SCORE += 1
    }
    basic.pause(400)
})
