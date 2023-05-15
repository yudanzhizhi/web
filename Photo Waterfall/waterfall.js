pictrues = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png', 'img6.png', 'img7.png', 'img8.png', 'img9.png', 'img10.png', 'img11.png', 'img12.png', 'img13.png', 'img14.png', 'img15.png', 'img16.png', 'img17.png', 'img18.png', 'img19.png', 'img20.png', 'img21.png', 'img22.png', 'img23.png', 'img24.png', 'img25.png', 'img26.png', 'img27.png', 'img28.png', 'img29.png', 'img30.png', 'img31.png', 'img32.png', 'img33.png', 'img34.png', 'img35.png', 'img36.png', 'img37.png', 'img38.png', 'img39.png', 'img40.png', 'img41.png', 'img42.png', 'img43.png', 'img44.png', 'img45.png', 'img46.png', 'img47.png', 'img48.png', 'img49.png', 'img50.png', ]

window.onload = function () {
    waterFall();
    window.onresize = waterFall();
}

function waterFall() {
    let container = document.getElementById("container");
    let item = document.getElementsByClassName("item");
    let img_width = (item[0].clientWidth)*0.9963;//这个奇怪的数字只是为了适应窗口大小
    let windows_width = document.documentElement.clientWidth;
    let columnCount = Math.floor(windows_width / img_width);
    container.style.width = columnCount * img_width + "px";
    let hrr = [];//存放图片高度
    for (let i = 0; i < item.length; i++) {
        if (i < columnCount) {
            item[i].style.top = "0px";
            item[i].style.left = i * img_width + "px";
            hrr.push(item[i].clientHeight);
        } else {
            let min = Math.min(...hrr);
            let index = hrr.indexOf(min);
            item[i].style.top = min + "px";
            item[i].style.left = index * img_width + "px";
            hrr[index] += item[i].clientHeight;
        }
    }
}

function show_img(source) {
    old_popup = document.querySelectorAll('.new_container');
    let num = old_popup.length;
    if (num == 1) {
        document.body.removeChild(old_popup[0]);
    }
    let popup = document.createElement("div");
    let img = document.createElement("img");
    popup.className = "new_container";
    img.src = source;
    img.alt = "error";
    popup.appendChild(img);
    popup.style.zIndex = "9999";
    popup.style.height = "200%";
    document.body.style.overflow = "hidden";
    document.body.appendChild(popup);
    popup.onclick = function() {
        document.body.removeChild(popup);
        document.body.style.overflow = "visible";
    }
}
  