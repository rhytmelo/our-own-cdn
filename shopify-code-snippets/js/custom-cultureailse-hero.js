const base = "https://www.earthenwallplates.com/wp-content/uploads/";
    const heroImages = [
        "2022/01/BWA22.jpeg", "2022/01/BWA26.jpeg","2022/01/BWA27.jpeg", "2020/02/BWANEW15.jpg", "2022/01/BWA32.jpeg", "2020/04/WhatsApp-Image-2020-04-02-at-18.35.16.jpeg", "2020/02/BWANEW14.jpg", "2020/02/BWANEW18.jpg",
        "2022/01/BWA08.jpeg", "2022/01/BWA18.jpeg", "2020/02/BWANEW4.jpg",
        "2022/01/BWA31.jpeg", "2022/01/BWA23.jpeg", "2022/01/BWA14.jpeg",
        "2022/01/BWA13.jpeg", "2022/01/BWA17.jpeg", "2020/02/BWANEW28.jpg",
        "2020/04/WhatsApp-Image-2020-04-02-at-18.36.53.jpeg",
        "2020/02/BWANEW26.jpg", "2022/01/BWA19.jpeg", "2022/01/BWA25.jpeg",
        "2022/01/BWA30.jpeg", "2022/01/BWA33.jpeg",
        "2022/01/BWA11.jpeg", "2020/02/BWANEW23.png", "2020/02/BWANEW21.jpg",
        "2022/01/BWA29.jpeg", "2020/02/BWANEW22.png", "2020/02/BWANEW17.jpg",
        "2020/02/BWANEW24.jpg", "2022/01/BWA03.jpeg", "2020/02/BWANEW27.jpg",
        "2020/02/BWANEW25.jpg", "2022/01/BWA04.jpeg", "2022/01/BWA12.jpeg",
        "2022/01/BWA01.jpg", "2022/01/BWA10.jpeg", "2020/02/BWANEW7.jpg",
        "2020/02/BWANEW5.jpg", "2020/02/BWANEW6.jpg", "2022/01/BWA15.jpeg",
        "2022/01/BWA24.jpeg", "2022/01/BWA09.jpeg", "2020/02/BWANEW9.jpg",
        "2020/02/BWANEW3.jpg", "2020/02/BWANEW20.png", "2020/02/BWANEW19.png",
        "2020/02/BWANEW2.jpg", "2020/02/BWANEW1.jpg"
    ].map(p => base + p);

    function createImageColumns() {
        var wrapper = document.getElementById('imageGridWrapper');
        wrapper.innerHTML = '';

        // Create 2 columns
        var column1 = document.createElement('div');
        column1.className = 'image-column';

        var column2 = document.createElement('div');
        column2.className = 'image-column';

        // Create 3 sets of images for seamless infinite scroll
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < heroImages.length; j++) {
                var imgDiv = document.createElement('div');
                imgDiv.className = 'img-item';
                var img = document.createElement('img');
                img.src = heroImages[j];
                img.alt = 'Product ' + (j + 1);
                imgDiv.appendChild(img);

                if (j % 2 === 0) {
                    column1.appendChild(imgDiv);
                } else {
                    column2.appendChild(imgDiv);
                }
            }
        }

        wrapper.appendChild(column1);
        wrapper.appendChild(column2);
    }

    createImageColumns();

    document.querySelector('.btn-shop').addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = "/collections/wall-plate-sets-new-collection";
    });

    document.querySelector('.btn-learn').addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = "/pages/big-wall-arrangements";
    });