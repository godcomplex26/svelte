<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Navigation, Pagination, A11y } from 'swiper';
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import 'swiper/css/scrollbar';
	export let name;
	let photo1 = 'img/wedding1.jpg';
</script>

<main class="main">
	<div class="main_image"><h2>Sungjin & Yurim</h2></div>	
	<Swiper class="album"
		modules={[Navigation, Pagination, A11y]}
		spaceBetween={0}
		slidesPerView={1}
		pagination={{ clickable: true }}
		on:slideChange={() => console.log('slide change')}
		on:swiper={(e) => console.log(e.detail[0])}
	>
	<SwiperSlide class="photos"><img src={photo1} /></SwiperSlide>
	<SwiperSlide class="photos"><img src={photo1} /></SwiperSlide>
	<SwiperSlide class="photos"><img src={photo1} /></SwiperSlide>
	<SwiperSlide class="photos"><img src={photo1} /></SwiperSlide>
  </Swiper>
  <div id="map"></div>
	<script>
		var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
		    mapOption = { 
		        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
		        level: 3 // 지도의 확대 레벨
		    };

		// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
		var map = new kakao.maps.Map(mapContainer, mapOption);

		var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 

		// 마커를 생성합니다
		var marker = new kakao.maps.Marker({
		    position: markerPosition
		});

		// 마커가 지도 위에 표시되도록 설정합니다
		marker.setMap(map);

		var iwContent = '<div style="padding:5px;">예식장 <br><a href="https://map.kakao.com/link/map/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
	    iwPosition = new kakao.maps.LatLng(33.450701, 126.570667); //인포윈도우 표시 위치입니다

		// 인포윈도우를 생성합니다
		var infowindow = new kakao.maps.InfoWindow({
		    position : iwPosition, 
		    content : iwContent 
		});

		// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
		infowindow.open(map, marker);
	</script>
</main>

<style>
	main {
		text-align: center;
		/*padding: 1em;*/
		/*max-width: 240px;*/
		margin: 0 auto;
		/*margin-top: 60px;*/
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	/*@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}*/
</style>