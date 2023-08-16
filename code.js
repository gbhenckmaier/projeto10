var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","c4e310e0-8174-4127-a46e-0cbcc94b488b","e072a244-6c02-4af5-8645-43dfa35497bf","8219ffd8-18c0-4f30-a024-fa22b2627b98","4fee697c-6ba9-49e9-a92f-b75ef123eecf","83349b8f-c599-4355-a5c7-eff85319cc76","731637a6-3b07-4b47-8e7c-a0a17614a859","f4206f66-bade-49c7-b4b9-9fa560e8f45b"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"hALOOI16IeMSo78WtWKpkosM9soBgRGx","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"bF379hRxKREK4BG930hwadXzJMa_c8sE","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"JNm4O.xsAC3OhTtwMkuHaGyUGQ5R7beB","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"e072a244-6c02-4af5-8645-43dfa35497bf":{"name":"enemy","sourceUrl":null,"frameSize":{"x":362,"y":208},"frameCount":1,"looping":true,"frameDelay":12,"version":"3qTE0eo7LSxGx85UkGAuNs3WB9WuVZEP","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":362,"y":208},"rootRelativePath":"assets/e072a244-6c02-4af5-8645-43dfa35497bf.png"},"8219ffd8-18c0-4f30-a024-fa22b2627b98":{"name":"hero1","sourceUrl":null,"frameSize":{"x":264,"y":298},"frameCount":1,"looping":true,"frameDelay":12,"version":"TrmMtgpFiYKu94.QGlEXska_6iwJaUHw","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":298},"rootRelativePath":"assets/8219ffd8-18c0-4f30-a024-fa22b2627b98.png"},"4fee697c-6ba9-49e9-a92f-b75ef123eecf":{"name":"enemy2","sourceUrl":null,"frameSize":{"x":338,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"DuAATXD_M.KedqqwvOymQPNIdMjpa14O","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":338,"y":168},"rootRelativePath":"assets/4fee697c-6ba9-49e9-a92f-b75ef123eecf.png"},"83349b8f-c599-4355-a5c7-eff85319cc76":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/oy1yIltrLNQf4iGHFFcLGgYTezk0.f73/category_backgrounds/background_landscape07.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"oy1yIltrLNQf4iGHFFcLGgYTezk0.f73","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oy1yIltrLNQf4iGHFFcLGgYTezk0.f73/category_backgrounds/background_landscape07.png"},"731637a6-3b07-4b47-8e7c-a0a17614a859":{"name":"enemy3","sourceUrl":null,"frameSize":{"x":312,"y":372},"frameCount":1,"looping":true,"frameDelay":12,"version":"emP0cRXQbZc3MTd44f5pwBjPRR1AUynj","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":312,"y":372},"rootRelativePath":"assets/731637a6-3b07-4b47-8e7c-a0a17614a859.png"},"f4206f66-bade-49c7-b4b9-9fa560e8f45b":{"name":"net","sourceUrl":"assets/api/v1/animation-library/gamelab/Pzgb8NyBmiy7GjEMah58tt6xTNFxM9_f/category_food/drumstick.png","frameSize":{"x":384,"y":384},"frameCount":1,"looping":true,"frameDelay":2,"version":"Pzgb8NyBmiy7GjEMah58tt6xTNFxM9_f","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":384,"y":384},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Pzgb8NyBmiy7GjEMah58tt6xTNFxM9_f/category_food/drumstick.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
 b.setAnimation("b")
var hero = createSprite(200,345,200,345)
hero.shapeColor="red"

var enemy1 = createSprite(200,250,10,10)

var enemy2 = createSprite(200,150,10,10)

var enemy3 = createSprite(200,50,10,10)

var net = createSprite(200,5,200,20);


var goal =0;
var death = 0

hero.setAnimation("hero1");
hero.scale=.1;
enemy1.setAnimation("enemy");
enemy1.scale=.2;
enemy2.setAnimation("enemy2");
enemy2.scale=.2;
enemy3.setAnimation("enemy3");
enemy3.scale=.1,5;
net.setAnimation("net");
net.scale=.1,5;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);


function draw() {
  
//plano de fundo(b);

createEdgeSprites()

enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)

if(keyDown(UP_ARROW)){
  hero.y=hero.y-3
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+3
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-3
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+3
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  hero.x=200
  hero.y=350
  death = death+1
}
if(hero.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  hero.x=200
  hero.y=345
  goal=goal+1
}
textSize(20)
  fill("blue")
  text("Objetivos:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("mortes:"+death,20,350);
  
drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
