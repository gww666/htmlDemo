/**
 * Created by Administrator on 2017/4/2 0002.
 * param
 * return
 */
onload = function() {
    //var tool = new Tool();
    var speed = 1;//背景图片移动的速速
    var b_speed = 8; //子弹的移动速度
    var tBullet; //周期性创造子弹
    var tEnemy; //周期性创建敌机
    var bgImg = document.createElement("img"); //创建背景图片节点
    var heroImg = document.createElement("img"); //创建英雄机的图片节点
    var bulletImg = document.createElement("img"); //创建子弹的图片节点

    var enemyImg1 = document.createElement("img"); //创建敌机的图片节点
    var enemyImg2 = document.createElement("img"); //创建敌机的图片节点
    var enemyImg3 = document.createElement("img"); //创建敌机的图片节点
    var boomImg1 = document.createElement("img"); //创建爆炸效果的图片节点
    var boomImg2 = document.createElement("img"); //创建爆炸效果的图片节点
    var boomImg3 = document.createElement("img"); //创建爆炸效果的图片节点
    var boomImg4 = document.createElement("img"); //创建爆炸效果的图片节点
    var boomImg5 = document.createElement("img"); //创建爆炸效果的图片节点
    var boomImg6 = document.createElement("img"); //创建爆炸效果的图片节点
    var boomImg7 = document.createElement("img"); //创建爆炸效果的图片节点
    var boomImg8 = document.createElement("img"); //创建爆炸效果的图片节点
    var boomImg9 = document.createElement("img"); //创建爆炸效果的图片节点
    var boomImg10 = document.createElement("img"); //创建爆炸效果的图片节点
    var boomImg11 = document.createElement("img"); //创建爆炸效果的图片节点
    //img.addEventListener("load", function (event) {
    //    alert("load");
    //}, false);
    var width = window.innerWidth; //获取屏幕宽
    var height = window.innerHeight; //获取屏幕高
    //document.body.appendChild(img);
    //document.body.appendChild(heroImg);

    //设置背景图片的参数
    bgImg.src = "img/bg_05.jpg";
    bgImg.style.width = width + "px";
    bgImg.style.height = height + "px";
    //alert(bgImg.style.width);
    //设置英雄机图片的参数
    heroImg.src = "img/hero.png";
    heroImg.style.width = 120 + "px";
    heroImg.style.height = 79 + "px";
    //设置子弹图片的参数
    bulletImg.src = "img/bullet1.png";
    bulletImg.style.width = 20 + "px";
    bulletImg.style.height = 38 + "px";
    //精英敌机图片的参数
    enemyImg1.src = "img/敌机1.png";
    enemyImg1.style.width = 177 + "px";
    enemyImg1.style.height = 135 + "px";
    //普通敌机
    enemyImg2.src = "img/敌机6.png";
    enemyImg2.style.width = 106 + "px";
    enemyImg2.style.height = 76 + "px";
    //小喽啰
    enemyImg3.src = "img/敌机10.png";
    enemyImg3.style.width = 76 + "px";
    enemyImg3.style.height = 46 + "px";
    //爆炸效果

    boomImg1.src = "img/b1.gif";
    boomImg2.src = "img/b2.gif";
    boomImg3.src = "img/b3.gif";
    boomImg4.src = "img/b4.gif";
    boomImg5.src = "img/b5.gif";
    boomImg6.src = "img/b6.gif";
    boomImg7.src = "img/b7.gif";
    boomImg8.src = "img/b8.gif";
    boomImg9.src = "img/b9.gif";
    boomImg10.src = "img/b10.gif";
    boomImg11.src = "img/b11.gif";
    //enemyImg3.style.width = 76 + "px";
    //enemyImg3.style.height = 46 + "px";

    var mBg; //循环绘制背景图的第一张
    var mBg2; //循环绘制背景图的第二张
    var mHero; //英雄机图片
    //var mBullet; //子弹图片
    var bulletArr = []; //子弹数组
    var enemyArr = []; //敌机数组
    var boomArr = []; //飞机爆炸数组
    var boomImgArr = [boomImg1, boomImg2, boomImg3, boomImg4,
        boomImg5, boomImg6, boomImg7, boomImg8, boomImg9, boomImg10, boomImg11];
    var mCanvas = document.getElementById("canvas");
    var ctx = mCanvas.getContext("2d");
    mCanvas.width = width;
    mCanvas.height = height;
    var pageX =  width / 2;
    var pageY = height - 50;
    //ctx.drawImage(bgImg, 0, 0, width, height);

    //英雄机对象
    function Hero(img, x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
    }
    Hero.prototype.move = function (pageX, pageY) {
        this.x = pageX - this.w / 2;
        this.y = pageY - this.h / 2;
    };

    function createHero() {
        return new Hero(heroImg, pageX, pageY, 120, 80);
    }

    //背景图片对象
    function Bg(img, x, y, w, h, speed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
        this.speed = speed;
    }

    Bg.prototype.move = function () {
        if (this.y >= this.h) {
            this.y = 0 - this.h;
        }
        this.y += this.speed;
    };

    function createBg(x, y, img) {
        return new Bg(img, x, y, width, height, speed);
    }

    function moveBg(bg) {
        //ctx.globalCompositeOperation = "source-over";
        ctx.drawImage(bg.img, bg.x, bg.y, bg.w, bg.h);

        bg.move();
    }

    //子弹对象
    function Bullet(img, x, y, w, h) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        //this.my = 0;
        this.speed = b_speed;
    }

    Bullet.prototype.move = function () {
        this.y -= this.speed;
    };

    //创建子弹
    function createBullet() {
        bulletArr.push(new Bullet(bulletImg, pageX - 10, pageY - 78, 20, 38))
    }

    //删除子弹
    function deleteBullet(i) {
        //当超出边界时要删除
        if (bulletArr[i] != null && bulletArr[i].y < 0) {
            //bulletArr.shift();
            bulletArr.splice(i, 1);
        }
        //与敌机发生碰撞也要删除
        for (var j = 0; j < enemyArr.length; j++) {
            if (bulletArr[i] != null && Tool.pz(bulletArr[i], enemyArr[j]) && enemyArr[j].state) {
                console.log("消失的子弹的X坐标" + bulletArr[i].x);

                bulletArr.shift();
                //敌机状态设为阵亡
                enemyArr[j].state = 0;
                //enemyArr[j].shift();
                //console.log("销毁的飞机的X坐标" + enemyArr[j].x);
                //enemyArr.splice(j, 1);

                break;
                //bulletArr.slice(i, 1);
            }
        }
    }

    //周期性创造子弹的函数
    function bulletInterval() {
        tBullet = setInterval(createBullet, 300);
    }

    //绘制子弹
    function drawBullet() {
        for (var i = 0; i < bulletArr.length; i++) {
            //ctx.clearRect(0, 0, width, height);
            ctx.drawImage(bulletArr[i].img, bulletArr[i].x, bulletArr[i].y, bulletArr[i].w, bulletArr[i].h);
            bulletArr[i].move();
            //deleteBullet(i);
            if (bulletArr[i] != null && bulletArr[i].y < 0) {
                //bulletArr.shift();
                bulletArr.splice(i, 1);
                i--;
            }
            //超出边界删除
            //if (bulletArr[i].y < 0) {
            //    bulletArr.shift();
            //}
            for (var j = 0; j < enemyArr.length; j++) {
                if (bulletArr[i] != null && Tool.pz(bulletArr[i], enemyArr[j]) && enemyArr[j].state) {
                    console.log("消失的子弹的X坐标" + bulletArr[i].x);

                    bulletArr.shift();
                    //敌机状态设为阵亡
                    enemyArr[j].state = 0;
                    //enemyArr[j].shift();
                    //console.log("销毁的飞机的X坐标" + enemyArr[j].x);
                    //enemyArr.splice(j, 1);

                    break;
                    //bulletArr.slice(i, 1);
                }
            }
            //deleteBullet(i);
        }
    }

    //敌机对象
    function Enemy(img, x, y, w, h, speed, level) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = speed;
        this.img = img;
        this.state = 1;
        this.level = level;

    }

    //敌机移动
    Enemy.prototype.move = function () {
        this.y += this.speed;
    };

    //创建敌机
    function createEnemy(img, x, y, w, h, speed) {
        enemyArr.push(new Enemy(img, x, y, w, h, speed));
    }

    //周期性创建敌机
    function enemyInterval() {
        var num = parseInt((Math.random() * 8));
        //console.log("随机数" + num);
        var x = parseInt(Math.random() * width);
        console.log("随机x坐标" + x);
        var e_speed = 0;
        if (num == 0) {
            //精英敌机
            e_speed = 2;
            x = x + 177 / 2;
            console.log("实际x坐标" + x);
            createEnemy(enemyImg1, x, 0 - 135, 177, 135, e_speed, 3);
            //console.log("宽" + parseInt(enemyImg1.style.width), "高" + parseInt(enemyImg1.style.height));
        } else if (num == 1 || num == 2) {
            //普通敌机
            e_speed = 3;
            x = x + 106 * 0.5;
            console.log("实际x坐标" + x);
            createEnemy(enemyImg2, x, 0 - 76, 106, 76, e_speed, 2);
            //console.log(parseInt(enemyImg2.style.width), parseInt(enemyImg2.style.height));
        } else if (num > 2) {
            //小喽啰
            e_speed = 4;
            x = x + 76 * 0.5;
            console.log("实际x坐标" + x);
            createEnemy(enemyImg3, x, 0 - 46, 76, 46, e_speed, 1);
            //console.log(parseInt(enemyImg3.style.width), parseInt(enemyImg3.style.height));
        }
        //createEnemy(enemyImg, x, 0 - parseInt(enemyImg.style.height), parseInt(enemyImg.style.width), parseInt(enemyImg.style.height), e_speed);
        //tEnemy = setInterval(function() {
        //    createEnemy(enemyImg, x, 0, parseInt(enemyImg.style.width), parseInt(enemyImg.style.height), e_speed);
        //}, 500);
    }

    function enemyInterval2() {
        var x = Math.random() * width;
        enemyImg1.src = "img/敌机1.png";
        enemyImg1.style.width = 177 + "px";
        enemyImg1.style.height = 135 + "px";
        var e_speed = 1;
        createEnemy(enemyImg1, x, 0 - 135, 177, 135, e_speed);
    }

    //删除敌机
    function deleteEnemy() {
        for (var i = 0; i < enemyArr.length; i++) {
            if ((enemyArr[i].y - enemyArr[i].h) > height) {
                console.log(enemyArr[i].h);
                if (enemyArr[i].h == 135) {
                    console.log("飞机尾部位置" + (enemyArr[i].y - enemyArr[i].h));
                    console.log("当前屏幕下边界" + height);
                }
                //enemyArr.shift();
                enemyArr.splice(i, 1);
                i--;
            }
        }
    }

    //产生爆炸效果并且延迟500ms消失
    //function boom(i) {
    //    enemyArr.splice(i, 1);
    //}

    //绘制敌机
    function drawEnemy() {
        for (var i = 0; i < enemyArr.length; i++) {
            if (enemyArr[i].state) {
                ctx.drawImage(enemyArr[i].img, enemyArr[i].x, enemyArr[i].y, enemyArr[i].w, enemyArr[i].h);
                enemyArr[i].move();
            } else {
                createBoom(boomImgArr, enemyArr[i].x, enemyArr[i].y, enemyArr[i].w, enemyArr[i].h);
                enemyArr.splice(i, 1);
                i--;
                //ctx.drawImage(boomImg, enemyArr[i].x, enemyArr[i].y, enemyArr[i].w, enemyArr[i].h);
                //boom(i);
                //setTimeout(function () {
                //    //enemyArr.splice(i, 1);
                //    //boom(i);
                //    //i--;
                //}, 500);
                //i--;
            }


            //deleteEnemy(i);
            //删除敌机
            //if ((enemyArr[i].y - enemyArr[i].h) > height) {
            //    console.log("飞机尾部位置" + (enemyArr[i].y - enemyArr[i].h));
            //    console.log("当前屏幕下边界" + height);
            //    enemyArr.shift();
            //}
        }
    }

    function Boom(imgArr, x, y, w, h) {
        this.imgArr = imgArr;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.state = 1; //boom存在
        this.num = 0;
    }

    Boom.prototype.draw = function () {

        //for (var i = 0; i < this.imgArr.length; i++) {
            ctx.drawImage(this.imgArr[this.num++], this.x, this.y, this.w, this.h);
        if (this.num == this.imgArr.length) {
            this.state = 0;
        }
            //console.log("长度为：" + this.imgArr.length);
            //var x = this.x;
            //var y = this.y;
            //var w = this.w;
            //var h = this.h;

            //window.callback(this, setTimeout(function () {
            //     this.state = 0;
            //}, 500));
            //console.log(this.imgArr[i]);
            //console.log(this.x);
            //console.log(this.y);
            //console.log(this.w);
            //console.log(this.h);
        //}

        //this.state = 0;
    };

    function createBoom(imgArr, x, y, w, h) {
        boomArr.push(new Boom(imgArr, x, y, w, h));
        console.log(boomArr.length);
    }

    function drawBoom() {
        for (var i = 0; i < boomArr.length; i++) {
            if (boomArr[i].state == 1) {
                //console.log("绘制爆炸图片");
                boomArr[i].draw();
            }
        }
    }

    //工具类
    var Tool = {
        //前者为小，后者为大
        //碰撞检测
        pz : function (obj1, obj2) {
            //if ((obj1.x + obj1.w / 2) > (obj2.x - obj2.w / 2) && (obj1.x - obj1.w / 2) < (obj2.x + obj2.w / 2) &&
            //    (obj1.y < obj2.y + obj2.h) && obj1.y + obj1.h > obj2.y) {
            //    return true;
            //}
            if ((obj1.x + obj1.w / 2) > (obj2.x) && (obj1.x - obj1.w / 2) < (obj2.x + obj2.w) &&
                (obj1.y < obj2.y + obj2.h) && obj1.y + obj1.h > obj2.y) {
                return true;
            }
            return false;
            //if (obj1.x + obj1.w / 2 < obj2.x - obj2.w / 2 || obj1.x - obj1.w / 2 > obj2.x + obj2.w / 2 ||
            //    obj1.y > obj2.y + obj2.h || obj1.y + obj1.h < obj2.y) {
            //    return false;
            //} else {
            //    return true;
            //}
        }
    };

    mBg = createBg(0, 0, bgImg);
    mBg2 = createBg(0, 0 - height, bgImg);
    mHero = createHero();

    function animate() {
        //ctx.clearRect(0, 0, width, height);

        moveBg(mBg);
        moveBg(mBg2);
        heroDraw(pageX, pageY);

        drawBullet();
        drawEnemy();
        deleteEnemy();

        drawBoom();

        requestAnimationFrame(animate);
    }


    animate();
    bulletInterval();//周期性创建子弹
    tEnemy = setInterval(enemyInterval, 2500);//周期性创建敌机

    //绘制英雄机
    function heroDraw(pageX, pageY) {
        //ctx.globalCompositeOperation = "source-atop";
        //ctx.globalCompositeOperation = "copy";
        //ctx.clearRect(0, 0, width, height);
        ctx.drawImage(mHero.img, pageX - 60, pageY - 40, mHero.w, mHero.h);
        mHero.move(pageX, pageY);
        //createBullet(pageX, pageY - 40);
        //alert(mHero.img);
        //alert(pageX);
        //alert(pageY);
        //console.log(mHero.w);
        //console.log(mHero.h);
    }

    //英雄机跟随鼠标移动而移动
    mCanvas.onmousemove = function (event) {
        pageX = event.clientX;
        pageY = event.clientY;
        heroDraw(pageX, pageY);
        //createBullet(pageX, pageY - 40);
        //alert(1111);
    }







};
