    function init(){ 
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
    }
export default init;
