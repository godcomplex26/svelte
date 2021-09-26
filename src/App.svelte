<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';
	import "swiper/css/pagination"
	import "swiper/css/mousewheel"
	import "swiper/css/scrollbar"

	// import Swiper core and required modules
	import SwiperCore, {
	  Mousewheel, Pagination, Scrollbar
	} from 'swiper';
	// install Swiper modules
	SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

	// 주소 복사
	import CopyClipBoard from './CopyClipBoard.svelte';

	let name = '대구 북구 복현로';

	const copy = () => {
		const app = new CopyClipBoard({
			target: document.getElementById('clipboard'),
			props: { name },
		});
		app.$destroy();
	}

	const pagination = {
	  "clickable": true,
	  "dynamicBullets": true,
	  "renderBullet": function (index, className) {

	          return '<span class=\"' + className + '\"></span>';

	        }
	}
</script>

<main class="main">
	<style type="text/css">
		.swiper-pagination-bullet {
		  width: 12px;
		  height: 12px;
		  text-align: center;
		  line-height: 20px;
		  font-size: 6px;
		  color: #000;
		  opacity: 1;
		  background: rgba(50, 50, 50, 0.2);
		}

		.swiper-pagination-bullet-active {
		  color: #000;
		  background: #ffd400;
		}
	</style>
	<Swiper direction="{'vertical'}" slidesPerView="{'auto'}" spaceBetween="{0}" freeMode="{true}" mousewheel="{true}" pagination='{{
		  "clickable": true,
		}}' class="mySwiper">
		<SwiperSlide class="main_slider"><div class="main_image"><h2>Sungjin & Yurim</h2></div></SwiperSlide>
		<SwiperSlide class="main_slider"><p>결혼을 축하해주세요</p><a href='https://naver.com'>test</a></SwiperSlide>
		<SwiperSlide>
			<Swiper class="mySwiper2 swiper-v" preloadImages="{true}" lazy="{true}" slidesPerView="{3}" spaceBetween="{-6}" pagination='{pagination}'>
				<SwiperSlide>
					<div class="image-grid">
						<img src="img/album/1.jpg" alt="" class="swiper-lazy">
						<img src="img/album/2.jpg" alt="" class="swiper-lazy">
						<img src="img/album/3.jpg" alt="" class="swiper-lazy">
						<img src="img/album/4.jpg" alt="" class="swiper-lazy">
						<img src="img/album/5.jpg" alt="" class="swiper-lazy">
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class="image-grid">
						<img src="img/album/6.jpg" alt="" class="swiper-lazy">
						<img src="img/album/7.jpg" alt="" class="swiper-lazy">
						<img src="img/album/8.jpg" alt="" class="swiper-lazy">
						<img src="img/album/9.jpg" alt="" class="swiper-lazy">
						<img src="img/album/10.jpg" alt="" class="swiper-lazy">
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class="image-grid">
						<img src="img/album/11.jpg" alt="" class="swiper-lazy">
						<img src="img/album/12.jpg" alt="" class="swiper-lazy">
						<img src="img/album/13.jpg" alt="" class="swiper-lazy">
						<img src="img/album/14.jpg" alt="" class="swiper-lazy">
						<img src="img/album/15.jpg" alt="" class="swiper-lazy">
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class="image-grid">
						<img src="img/album/16.jpg" alt="" class="swiper-lazy">
						<img src="img/album/17.jpg" alt="" class="swiper-lazy">
						<img src="img/album/18.jpg" alt="" class="swiper-lazy">
						<img src="img/album/19.jpg" alt="" class="swiper-lazy">
						<img src="img/album/20.jpg" alt="" class="swiper-lazy">
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class="image-grid">
						<img src="img/album/21.jpg" alt="" class="swiper-lazy">
						<img src="img/album/22.jpg" alt="" class="swiper-lazy">
						<img src="img/album/23.jpg" alt="" class="swiper-lazy">
						<img src="img/album/24.jpg" alt="" class="swiper-lazy">
						<img src="img/album/25.jpg" alt="" class="swiper-lazy">
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class="image-grid">
						<img src="img/album/26.jpg" alt="" class="swiper-lazy">
						<img src="img/album/27.jpg" alt="" class="swiper-lazy">
						<img src="img/album/28.jpg" alt="" class="swiper-lazy">
						<img src="img/album/29.jpg" alt="" class="swiper-lazy">
						<img src="img/album/30.jpg" alt="" class="swiper-lazy">
					</div>
				</SwiperSlide>
			</Swiper>
		</SwiperSlide>
		<SwiperSlide id="map_page" class="map">
			<img class="map_img" src="img/map.jpg" />
			<p>주소: {name}</p>
			<input bind:value={name}>
			<button class="btn btn-primary" on:click={copy}>주소복사하기</button>
			<div id="clipboard"></div>
		</SwiperSlide>
		<SwiperSlide class="contact">
			<div class="grid-container">
				<div class='grid-item'><p class='contact_title'>마음 전하실 곳</p></div>
				<div class='grid-item'></div>
				<div class='grid-item'></div>
				<div class='grid-item'><a href='https://qr.kakaopay.com/28100601100004868083261861a807333'><img class='kakaopay' src='img/kakaopay.png' /></a></div>
				<div class='grid-item'><a href='https://qr.kakaopay.com/28100601100004868083261861a807333'><img class='kakaopay' src='img/kakaopay.png' /></a></div>
				<div class='grid-item'><a href='tel:01073003086'><img class='phone' src='img/phone.jpg'/></a></div>
				<div class='grid-item'><a href='tel:01073003086'><img class='phone' src='img/phone.jpg'/></a></div>
			</div>
		</SwiperSlide>
	</Swiper>

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