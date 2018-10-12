/*
Attempting to bring a version of Jordan Jenkins' Halloween ghost to life in the browser. Check out the inspiration and originals at https://dribbble.com/shots/3055734-Have-a-Happy-Halloween and https://dribbble.com/shots/3878696-Happy-Halloween!
*/

class Ghost {
    constructor(el) {
        this.scene = el;
        this.clone = el.cloneNode(true);
        this.isEscaping = false;
        this.ghost = el.querySelector('.ghost');
        this.face = el.querySelector('.ghost-face');
        this.eyes = el.querySelector('.eyes-row');
        this.leftEye = this.eyes.querySelector('.left');
        this.rightEye = this.eyes.querySelector('.right');
        this.mouth = el.querySelector('.mouth');
        this.mouthState = 'neutral';
        this.shadow = el.querySelector('.shadow-container');
        this.leftCheek = el.querySelector('.left.cheek');
        this.leftCheek = el.querySelector('.right.cheek');
        this.leftHand = el.querySelector('.hand-left');
        this.rightHand = el.querySelector('.right-hand');
        this.activityInterval = null;
    }

    reset() {
        this.scene.remove();
        this.scene = this.clone.cloneNode(true);
        this.resetRefs();
        this.scene.classList.remove('stars-out');
        this.scene.style.position = 'absolute';
        this.scene.style.left = Math.floor(Math.random() * (document.querySelector('body').getBoundingClientRect().width - 140)) + 'px';
        this.scene.style.top = Math.floor(Math.random() * (document.querySelector('body').getBoundingClientRect().height - 160)) + 'px';
        this.scene.classList.add('descend');
        this.shadow.classList.add('disappear');
        document.querySelector('body').append(this.scene);
        this.enter();
    }

    resetRefs() {
        this.ghost = this.scene.querySelector('.ghost');
        this.face = this.scene.querySelector('.ghost-face');
        this.eyes = this.scene.querySelector('.eyes-row');
        this.leftEye = this.eyes.querySelector('.left');
        this.rightEye = this.eyes.querySelector('.right');
        this.mouth = this.scene.querySelector('.mouth');
        this.mouthState = 'neutral';
        this.isEscaping = false;
        this.shadow = this.scene.querySelector('.shadow-container');
        this.leftCheek = this.scene.querySelector('.left.cheek');
        this.leftCheek = this.scene.querySelector('.right.cheek');
        this.leftHand = this.scene.querySelector('.hand-left');
        this.rightHand = this.scene.querySelector('.right-hand');
    }

    blink() {
        this.leftEye.classList.add('blink');
        this.rightEye.classList.add('blink');
        setTimeout(() => {
            this.leftEye.classList.remove('blink');
            this.rightEye.classList.remove('blink');
        }, 50)
    }

    wave() {
        this.leftHand.classList.add('waving');
        setTimeout(() => {
            this.leftHand.classList.remove('waving');
        }, 500);
    }

    openMouth() {
        this.mouth.classList.remove('closed');
        this.mouth.classList.add('open');
        this.mouthState = 'open';
    }

    closeMouth() {
        this.mouth.classList.add('closed');
        setTimeout(() => {
            this.mouth.classList.remove('open');
        }, 50)


        this.mouthState = 'closed';
    }

    neutralMouth() {
        this.mouth.classList.remove('open');
        this.mouth.classList.remove('closed');
        this.mouthState = 'neutral';
    }

    hover() {
        this.ghost.classList.add('hover');
    }

    surprise() {
        this.face.classList.add('surprised');
    }

    runAway() {
        clearInterval(this.activityInterval);
        if (!this.isEscaping) {
            this.isEscaping = true;
            this.scene.classList.add('run-away', 'move-stars-in');
            this.scene.classList.remove('stars-out');
            setTimeout(() => {
                this.shadow.classList.add('disappear');
                setTimeout(() => {
                    this.reset();
                }, Math.floor(Math.random()*1000) + 500);
            }, 450);
        }
    }

    enter() {
        setTimeout(() => {
            this.shadow.classList.remove('disappear');
        }, 5);
        setTimeout(() => {
            this.scene.classList.remove('descend');
            this.scene.classList.add('stars-out', 'move-stars-out');
        }, 600);
        setTimeout(() => {
            this.hover();
            this.prepareEscape();
            this.startActivity();
        }, 1200)
    }

    startActivity() {
        this.activityInterval = setInterval(() => {
            switch (Math.floor(Math.random()*4)) {
                case 0:
                    this.blink();
                    //this.surprise();
                    setTimeout(() => { this.blink() }, 400);
                    setTimeout(() => { this.blink() }, 1300);
                    break;
                case 1:
                    this.wave();
                    break;
                default:
                    break;
            }
        }, 7000);
    }

    prepareEscape() {
        this.scene.addEventListener('click', () => { this.runAway() }, false);
        this.scene.addEventListener('mouseover', () => { this.runAway() }, false);
        this.scene.addEventListener('focus', () => { this.runAway() }, false);
    }
}

let ghost = new Ghost(document.querySelector('.scene-container'));

ghost.hover();
ghost.startActivity();
ghost.prepareEscape();




let ghost2 = new Ghost(document.querySelector('.scene-container'));

ghost2.hover();
ghost2.startActivity();
ghost2.prepareEscape();

let ghost3 = new Ghost(document.querySelector('.scene-container'));

ghost3.hover();
ghost3.startActivity();
ghost3.prepareEscape();

let ghost4 = new Ghost(document.querySelector('.scene-container'));

ghost4.hover();
ghost4.startActivity();
ghost4.prepareEscape();

let ghost5 = new Ghost(document.querySelector('.scene-container'));

ghost5.hover();
ghost5.startActivity();
ghost5.prepareEscape();

let ghost6 = new Ghost(document.querySelector('.scene-container'));

ghost6.hover();
ghost6.startActivity();
ghost6.prepareEscape();

let ghost7 = new Ghost(document.querySelector('.scene-container'));

ghost7.hover();
ghost7.startActivity();
ghost7.prepareEscape();

let ghost8 = new Ghost(document.querySelector('.scene-container'));

ghost8.hover();
ghost8.startActivity();
ghost8.prepareEscape();

let ghost9 = new Ghost(document.querySelector('.scene-container'));

ghost9.hover();
ghost9.startActivity();
ghost9.prepareEscape();

let ghost10 = new Ghost(document.querySelector('.scene-container'));

ghost10.hover();
ghost10.startActivity();
ghost10.prepareEscape();