async function init(){ 

  const response = await fetch('/ad', {
    method: 'GET',
  });
  const dbMapAdverts = await response.json();


  var myMap = new window.ymaps.Map("map", {
      center: [59.93139123904442,30.41594565054736],
      zoom: 10
  });
  

  myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
  // myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
  myMap.controls.remove('rulerControl'); // удаляем контрол правил
  // myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)




  const geocoder = [];
  let i = 0;
  dbMapAdverts.forEach((advert) => {
    geocoder[i] = [];
    geocoder[i].push(window.ymaps.geocode(advert.location));
    geocoder[i].push(advert.location);
    geocoder[i].push(advert.title);
    geocoder[i].push(advert.photo);
    geocoder[i].push(advert.id);
    i++;
  });

  let count = 0;
  // После того, как поиск вернул результат, вызывается callback-функция
  geocoder.forEach((geo) => {
    geo[0].then(
      (res) => {
        // координаты объекта
        const coordinates = res.geoObjects.get(0).geometry.getCoordinates();

        // Добавление метки (Placemark) на карту
        const placemark = new window.ymaps.Placemark(coordinates, {
          hintContent: `${geo[1]}`,
          balloonContent: `<a href="/adverts/${geo[4]}" class="map-href">${geo[2]}</a>`,
        }, {
          preset: 'islands#redDotIcon',
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',

          // Своё изображение иконки метки.
          iconImageHref: `${geo[3]}`,
          // Размеры метки.
          iconImageSize: [32, 32],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-16, -16],
          href: `/adverts/${geo[4]}`,
        });
        count++;
        myMap.geoObjects.add(placemark);
      },
    );
  });
};

export default init;
