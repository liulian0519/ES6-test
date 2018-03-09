{
    let ajax=function (callback) {
        console.log('执行1');
        setTimeout(function () {
            callback&&callback.call()
        },1000)
    };
    ajax(function () {
        console.log('timeout1')
    })
}
{
    let ajax = function () {
        console.log('zhixing');
        return new Promise(function (resolve,reject) {
            setTimeout(function () {
                resolve()
            },1000)
        })
    };
    ajax().then(function () {
        console.log('promise','timeout2');
    })
}
{
    let ajax = function () {
        console.log('执行3');
        return new Promise(function (resolve,reject) {
            setTimeout(function () {
                resolve()
            },1000)
        })
    };
    ajax().then(function () {
        return new Promise(function (resolve,reject) {
            setTimeout(function () {
                resolve()
            },2000)
        });
    }).then(function () {
            console.log('timeout3');
        })
}
{
    let ajax = function (num) {
        console.log('zhixing4');
        return new Promise(function (resolve,reject) {
            if(num>5){
                resolve();
            }else{
                throw new Error('出错了');
            }
        })
    }
    ajax(6).then(function () {
        console.log('log',6);
    }).catch(function (err) {
        console.log('catch',err);
    });

    ajax(3).then(function () {
        console.log('log',3);
    }).catch(function (err) {
        console.log('catch',err);
    });
}
{
    //所有图片加载完成再加载到页面上
    function loadImage(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function () {
                resolve(img);
            }
            img.onerror = function () {
                reject(err);
            }
        })
    }

    function showImages(imgs) {
        imgs.forEach(function (img) {
            document.body.appendChild(img);
          img.style.height = '200px'
            img.style.width = '200px';
        });
    }
    Promise.all([
        loadImage('http://pic29.photophoto.cn/20131204/0034034499213463_b.jpg'),
        loadImage('http://pic2.ooopic.com/12/42/25/02bOOOPIC95_1024.jpg'),
        loadImage('http://img3.3lian.com/2013/c2/78/d/38.jpg')
    ]).then(showImages)

}
{
    //有一个图片加载完成就添加到页面上
    function loadImage(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function () {
                resolve(img);
            }
            img.onerror = function () {
                reject(err);
            }
        })
    }
   function showImage(img){
        document.body.appendChild(img);
       img.style.height = '400px'
       img.style.width = '400px';
       img.style.marginLeft = '100px'
   }
    Promise.race([
        loadImage('http://pic29.photophoto.cn/20131204/0034034499213463_b.jpg'),
        loadImage('http://pic2.ooopic.com/12/42/25/02bOOOPIC95_1024.jpg'),
        loadImage('http://img3.3lian.com/2013/c2/78/d/38.jpg')
    ]).then(showImage)

}
