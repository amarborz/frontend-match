// https://onlinepngtools.com/convert-png-to-base64

window.addEventListener('load', function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let showFullImage = false;

    class Particle {
        constructor(effect, x, y, color) {
            this.effect = effect;
            this.x = Math.random() * this.effect.width;
            this.y = Math.random() * this.effect.height;
            this.originX = Math.floor(x);
            this.originY = Math.floor(y);
            this.size = this.effect.gap;
            this.color = color;
            this.vx = 0;
            this.vy = 0;
            this.ease = 0.03;
            this.friction = 0.95;
            this.dx = 0;
            this.dy = 0;
            this.distance = 0;
            this.force = 0;
            this.angle = 0;
            this.count = 0;
        }
        draw(context) {
            context.fillStyle = this.color;
            context.fillRect(this.x, this.y, this.size, this.size);
        }
        update() {
            this.dx = this.effect.mouse.x - this.x;
            this.dy = this.effect.mouse.y - this.y;
            this.distance = this.dx * this.dx + this.dy * this.dy;
            this.force = -this.effect.mouse.radius / this.distance;

            if (this.distance < this.effect.mouse.radius) {
                this.angle = Math.atan2(this.dy, this.dx);
                this.vx += this.force * Math.cos(this.angle);
                this.vy += this.force * Math.sin(this.angle);
            }

            this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
            this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
        }
        warp() {
            this.x = Math.random() * this.effect.width;
            this.y = Math.random() * this.effect.height;
            this.ease = 0.05
        }
    }

    class Effect {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.particlesArray = [];
            this.image = document.getElementById('image1');
            this.centerX = this.width * 0.5;
            this.centerY = this.height * 0.5;
            this.x = this.centerX - this.image.width * 0.5;
            this.y = this.centerY - this.image.height * 0.5;
            this.gap = 5;
            this.mouse = {
                radius: 3000,
                x: undefined,
                y: undefined
            }
            // window.addEventListener('mousemove', event => {
            //     this.mouse.x = event.x;
            //     this.mouse.y = event.y;
            // });
        }
        init(context) {
            context.drawImage(this.image, this.x, this.y);
            const pixels = context.getImageData(0, 0, this.width, this.height).data;
            for (let y = 0; y < this.height; y += this.gap) {
                for (let x = 0; x < this.width; x += this.gap) {
                    const index = (y * this.width + x) * 4;
                    const red = pixels[index];
                    const green = pixels[index + 1];
                    const blue = pixels[index + 2];
                    const alpha = pixels[index + 3];
                    const color = 'rgb(' + red + ',' + green + ',' + blue + ')';

                    if (alpha > 0) {
                        this.particlesArray.push(new Particle(this, x, y, color));
                    }
                }
            }
        }
        draw(context) {
            // context.drawImage(this.image, this.x, this.y);
            this.particlesArray.forEach(particle => particle.draw(context));

        }
        update() {
            let count = 0;
            this.particlesArray.forEach(particle => particle.update());
            this.particlesArray.forEach(particle => {
                if (Math.abs(particle.originX - particle.x < 0.001) && Math.abs(particle.originY - particle.y < 0.001)) {
                    count += 1;
                }
            });
            if (count > 2900) {
                showFullImage = true;
            }
        }
        warp() {
            this.particlesArray.forEach(particle => particle.warp());
        }
    }

    const effect = new Effect(canvas.width, canvas.height);
    effect.init(ctx);

    // canvas2.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    function animate() {

        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        effect1.handleParticles(ctx2);
        if (showFullImage == false) {
            effect.draw(ctx);
            effect.update();
        } else {
            ctx.drawImage(effect.image, effect.x, effect.y);
        }



        requestAnimationFrame(animate);
    }
    animate();

    document.getElementById('myButton').addEventListener('click', function () {
        window.location.href = 'login.html';
    });
});